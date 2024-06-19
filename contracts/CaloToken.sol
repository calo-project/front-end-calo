// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract CaloToken is ERC721 {
    address public owner;
    uint256 public totalCaloEvent;

    struct CaloEvent {
        uint256 id;
        string name;
        uint256 cost;
        uint256 maxTickets;
        string date;
        string time;
        string location;
    }

    mapping(uint256 => CaloEvent) public caloevent;

    modifier onlyOwner(){
        require(msg.sender == owner);
        _;
    }

    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {
        owner = msg.sender;
    }

    function list(
        string memory _name,
        uint256 _cost,
        uint256 _maxTickets,
        string memory _date,
        string memory _time,
        string memory _location
    ) public onlyOwner {
        totalCaloEvent++;
        caloevent[totalCaloEvent] = CaloEvent(
            totalCaloEvent,
            _name,
            _cost,
            _maxTickets,
            _date,
            _time,
            _location
        );
    }

    function getCaloEvent(uint256 _id) public view returns (CaloEvent memory) {
        return caloevent[_id];
    }
}
