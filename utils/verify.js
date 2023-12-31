const { run } = require("hardhat");

const verify = async (contractAddress, constructorArgs = []) => {
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: constructorArgs,
        });
    } catch (error) {
        if (error.message.toLowerCase().includes("already verified"))
            console.log(`Contract ${contractAddress} has already been verified`);
        else console.log(error);
    }
};

module.exports = verify;
