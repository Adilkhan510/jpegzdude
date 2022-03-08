// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";



contract Hero{
    //if you accept enums to a 
    enum Class{Mage, Healer, Barbarian}



    function createHero(Class class) public payable{
        require(msg.value >= 0.05 ether, "Please send moar money");
        
    }

}