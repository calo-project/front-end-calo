import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import CaloTokenAbi from '../abis/CaloToken.json';
import config from '../config/config.json';

export const useBlockchain = () => {
    const [account, setAccount] = useState(null);
    const [provider, setProvider] = useState(null);
    const [caloToken, setCaloToken] = useState(null);
    const [events, setCaloEvents] = useState([]);

    useEffect(() => {
        const fetchAccounts = async () => {
            try {
                if (!window.ethereum) {
                    console.error("MetaMask is not installed!");
                    return;
                }

                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const account = ethers.utils.getAddress(accounts[0]);
                setAccount(account);

                const provider = new ethers.providers.Web3Provider(window.ethereum);
                setProvider(provider);

                const network = await provider.getNetwork();
                const address = config[network.chainId]?.CaloToken?.address;

                if (!address) {
                    console.error("Contract address not found for network:", network.chainId);
                    return;
                }

                const caloToken = new ethers.Contract(address, CaloTokenAbi, provider);
                setCaloToken(caloToken);
                console.log(caloToken);

                if (typeof caloToken.totalCaloEvent !== 'function') {
                    console.error("totalCaloEvent bukan function dari ABI");
                    return;
                }

                const totalCaloEvent = await caloToken.totalCaloEvent();
                console.log({ totalCaloEvent: totalCaloEvent.toString() });

                const events = [];
                for (let i = 1; i <= totalCaloEvent; i++) {
                    const event = await caloToken.getCaloEvent(i);
                    events.push(event);
                }

                setCaloEvents(events);
                console.log(events);

                window.ethereum.on('accountsChanged', async () => {
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                    const account = ethers.utils.getAddress(accounts[0]);
                    setAccount(account);
                });
            } catch (error) {
                console.error("Terjadi kesalahan:", error);
            }
        };

        fetchAccounts();
    }, []);

    return { account, events };
};
