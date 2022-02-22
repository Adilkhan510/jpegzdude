// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract Counter {

    // member on the contract called counter, it is a base type of 256int;

    uint counter;

    function count() public returns(uint){
        // add 1 to it
        //mutate the state of counter variable. 
        counter++;
        console.log("Counter is now",counter);

        return counter;
    }
}
