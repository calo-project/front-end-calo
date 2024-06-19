// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract CaloToken is ERC721 {
    address public owner;
    uint256 public totalCaloEvent;
    uint256 public totalSupply;

    struct CaloEvent {
        uint256 id;
        string name;
        uint256 cost;
        uint256 tickets;
        uint256 maxTickets;
        string date;
        string time;
        string location;
    }

    mapping(uint256 => CaloEvent) public caloevent;
    mapping(uint256 => mapping(address => bool)) public hasBought;

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
        uint256 _tickets,
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
            _tickets,
            _maxTickets,
            _date,
            _time,
            _location
        );
    }

    function mint(uint256 _id) public payable {
        require(_id != 0);
        require(_id <= totalCaloEvent);

        require(msg.value >= caloevent[_id].cost);

        caloevent[_id].tickets -= 1;
        hasBought[_id][msg.sender] = true;
        totalSupply++;
        _safeMint(msg.sender, totalSupply);
    }

    function getCaloEvent(uint256 _id) public view returns (CaloEvent memory) {
        return caloevent[_id];
    }
}
