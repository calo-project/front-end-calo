// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract CaloToken is ERC721 {
    address public owner;
    uint256 public totalCaloEvent;
    uint256 public totalSupply;

    struct CaloEvent {
        uint256 id;
        string slug;
        string name;
        string descriptionEvent;
        string place;
        string province;
        string city;
        uint256 cost;
        string detailPlace;
        uint256 tickets;
        uint256 maxTickets;
        string linkAddress;
        string poster;
        string linkSosmed;
        string startTime;
        string endTime;
        string date;
        string idVendor;
        string slug;
        string vendorDescription;
        string vendorWallet;
        string vendorLinkWebsite;
        string vendorLinkInstagram;
    }

    mapping(uint256 => CaloEvent) public caloevent;
    mapping(uint256 => mapping(address => bool)) public hasBought;

    modifier onlyOwner(){
        require(msg.sender == owner, "Only owner can call this function");
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
        require(_id != 0, "Event ID Salah");
        require(_id <= totalCaloEvent, "Event tidak ada");
        require(msg.value >= caloevent[_id].cost, "Pembayaran tidak mencukupi");
        require(caloevent[_id].tickets > 0, "Tiket sudah habis");

        caloevent[_id].tickets -= 1;
        hasBought[_id][msg.sender] = true;
        totalSupply++;
        _safeMint(msg.sender, totalSupply);
    }

    function cancel(uint256 _id) public {
        require(_id != 0, "Event ID Salah");
        require(_id <= totalCaloEvent, "Event tidak ada");
        require(hasBought[_id][msg.sender], "Anda belum membeli tiket untuk acara ini");

        caloevent[_id].tickets += 1;
        hasBought[_id][msg.sender] = false;

        for (uint256 i = 1; i <= totalSupply; i++) {
            if (ownerOf(i) == msg.sender) {
                _burn(i);
                break;
            }
        }

        payable(msg.sender).transfer(caloevent[_id].cost);
    }

    function getCaloEvent(uint256 _id) public view returns (CaloEvent memory) {
        return caloevent[_id];
    }

    function withdraw() public onlyOwner {
        (bool success, ) = owner.call{value: address(this).balance}("");
        require(success);
    }
}
