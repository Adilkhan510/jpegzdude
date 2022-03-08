import _ from "@nomiclabs/hardhat-ethers";

import { ethers } from "hardhat";
import { expect } from "chai";


describe("Hero", function(){
    async function createHero(){
        const Hero = await ethers.getContractFactory("Hero");
        const hero = await Hero.deploy();
        await hero.deployed();

        return Hero
    }

    let hero;

    before(async function(){
        hero = await createHero()
    });


    it("Should fail at creating hero cause of missing payment", async function(){
        let e;

        try{
            await hero.createHero(0,{
                value: ethers.utils.parseEther("0.04999999")
            });
        }catch(err){
            e = err;
        }

        expect(e.message.includes("Please send moar money")).to.equal(true)
    })
})