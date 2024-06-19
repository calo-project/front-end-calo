// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract CaloToken is ERC721{
    address public owner;

    constructor(
        string memory _name,
        string memory _symbol)
    ERC721(_name, _symbol) {
        owner = msg.sender;
    }
}