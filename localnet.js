const interval = require('./utils/interval')
const web3Custom = require('./web3_custom/methods')
const Web3 = require('web3');

const BscNode = "http://127.0.0.1:8545"
const web3BSC = new Web3(BscNode)

//testNet

const myWalletAddr = "0xe0fB750d66017b06327F905515259a01Ed6feE90"
const myWalletPrivateKey = "0x821e7d9d8b8c8b5ef7d5f50e823212bbaee8b7686d9a3a292e589312a4346e44"
//web3BSC.eth.accounts.wallet.add(myWalletPrivateKey)

//methods
async function main () {
    console.log(`Web3 version: ${Web3.version}\n`)

    web3Custom.init(web3BSC)
    let beforeBalance = await web3Custom.getBalance(myWalletAddr)
    console.log(`Initial Balance: ${web3Custom.fromWei(beforeBalance)} ETH\n`)

    let valueToTransfer = "0.001"
    console.log(`Transfering ${valueToTransfer} ETH ...`)

    let payload = {
        fromAddr: myWalletAddr,
        fromPrivAddr: myWalletPrivateKey,
        toAddr: "0xE5e7c6981675F30c61F8a2cc9AE3aC1FE4f66C78",
        valueToTransfer: valueToTransfer,
        gasPriceGwei: "5",
        chainCommon: null
    }
    web3Custom.transfer(payload)
        .then(res => {
            console.log(`Transaction hash: ${res.transactionHash}`)

            web3Custom.getBalance(myWalletAddr)
                .then(currBalance => {
                    let valueUsed = web3Custom.fromWei((beforeBalance-currBalance).toString())
                    console.log(`\nTransfer + GasFee: ${valueUsed} ETH, ${web3Custom.toUSD(valueUsed, "ether", "ether").toFixed(2)} USD`)
                    console.log("\n")
                })
        })

}

// startProgram
main()