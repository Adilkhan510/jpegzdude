import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";


async function deploy() {
    // ethers will import the json file when it is compiled, 
    //It will go and look for the Counter file.
    const Contract = await ethers.getContractFactory("Counter");
    //once we get the contract, we are going to deploy it.

    const counter = await Contract.deploy();
    await counter.deployed(); 

    // console.log("Counter should be zero since we just deployed it ",counter)
    //once deployed we will return the deployed contract.  
    return counter;
}

//@ts-ignore
async function count(counter){
    // Mutate the state of the counter by 
    await counter.incrementCount();
    console.log("counter should be +1 since we called the state mutating function", await counter.getCount())

    // we will get a big number here instead of a number. 
    // numbers are 256 bits, so printing out that will not show
}

//When we deploy the counter, we will have access to the methods on the contract.
// count will increment the value of the counter state variable.
deploy().then(count)