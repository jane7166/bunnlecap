import { ethers } from "hardhat";

export function bubblesend() {
    const [user, project] = ethers.getSigners();

    // console.log("before user balance: ", ethers.provider.getBalance(user.address));
    // console.log("before project balance: ", ethers.provider.getBalance(project.address));

    user.sendTransaction({
        to: project.address,
        value: ethers.parseEther('0.001')
    })

    // console.log("after user balance: ", ethers.provider.getBalance(user.address));
    // console.log("after fore project balance: ", ethers.provider.getBalance(project.address));

}

// main().catch((error) => {

// })