// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

    /**
        public = anyone outside, subContract and Contract  can call it.
        Private = only contract can call it
        internal = contract and subcontracts can call
        external = only outside can call it 

        pure = can't read or write
        view = returns state // to read data
     */

contract Counter {


    // member on the contract called counter, it is a base type of 256int;

    // uint defaults to a 256 bit #
    uint counter;

    // state mutating function
    function getCount() public view returns(uint32){
        //reads state
        //Use it to get the data out
        return uint32(counter);

    }

    function incrementCount() public{
        //Write state
        counter++;
        // console.log("Counter is now",counter);

    }
}
