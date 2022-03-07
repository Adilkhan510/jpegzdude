import { countReset } from "console";
import { ethers } from "ethers";

async function hasSigners(): Promise<boolean> {
    //@ts-ignore

    const metamask = window.ethereum;
    if(!metamask){
        throw new Error("Get a metamask")
    };
    
    const signers = await (metamask.request({method: 'eth_accounts'}) as Promise<string[]>);
    //If there are signers available that means that there are accounts. 
    return signers.length > 0;
    //return signers && signers.length; should work too
}

async function requestAccess(): Promise<boolean> {
    //@ts-ignore
    const result = (await window.ethereum.request({ method: 'eth_requestAccounts' })) as string[];
    return result && result.length > 0;
}

async function getContract() {
    const address = process.env.CONTRACT_ADDRESS;

    if (!(await hasSigners()) && !(await requestAccess())) {
        console.log("You are in trouble, no one wants to play");
    }
    // we now have metamask available to access
    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const counter = new ethers.Contract(
        address,
        [
            "function incrementCount() public",
            "function getCount() public view returns (uint32)"
        ], // abi
        provider.getSigner()
    );

    console.log("We have done it, time to call");
    const el = document.createElement("div");
    async function setCounter(){
        el.innerHTML = await counter.getCount();
    }

    setCounter();

    const button = document.createElement("button");
    button.innerText ="Increment"
    button.onclick= async function(){
        await counter.incrementCount();
        setCounter()
    }
    document.body.appendChild(el);
    document.body.appendChild(button);
}


getContract();