// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CrowdFunding {
    struct Campaign {
       address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;     
        uint256 amountCollected;
        string image;
        address[] donators;
        uint256[] donations;

    }

       // so we can access
    mapping(uint256 => Campaign) public campaign;

    uint256 public numberOfCampaigns = 0;
}