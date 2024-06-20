import { useBlockchain } from '../../hooks/useBlockchain.js';
import EventList from '../../components/common/EventList.jsx';

export default function Test() {
    const { account, events } = useBlockchain();

    return (
        <div>
            <h1>Test</h1>
            {account && <p>{account.slice(0, 6) + '...' + account.slice(-4)}</p>}
            <EventList events={events} />
        </div>
    );
};


