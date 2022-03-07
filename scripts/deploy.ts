import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const hello = await HelloWorld.deploy();
    await hello.deployed();

    return hello;
}

// @ts-ignore
async function sayHello(hello) {
    // its not mutating state so this will not cause a transaction
    console.log("Say Hello:", await hello.hello());
}

deploy().then(sayHello);