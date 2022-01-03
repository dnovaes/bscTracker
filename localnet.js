const interval = require('./utils/interval')
const web3Custom = require('./web3_custom/methods')
const Web3 = require('web3');
const config = require('./localconfig.json');

const BscNode = "http://127.0.0.1:8545"
const web3BSC = new Web3(BscNode)

const walletAddr = []
walletAddr.push(config.walletAddr0)
walletAddr.push(config.walletAddr1)

const privWalletAddr = []
privWalletAddr.push(config.privWalletAddr0)
//web3BSC.eth.accounts.wallet.add(myWalletPrivateKey)

//methods
async function main () {
    console.log(`Web3 version: ${Web3.version}\n`)

    web3Custom.init(web3BSC)
    let beforeBalance = await web3Custom.getBalance(walletAddr[0])
    console.log(`Initial Balance: ${web3Custom.fromWei(beforeBalance)} ETH\n`)

    let valueToTransfer = "0.001"
    console.log(`Transfering ${valueToTransfer} ETH ...`)

    let payload = {
        fromAddr: walletAddr[0],
        fromPrivAddr: privWalletAddr[0],
        toAddr: walletAddr[1],
        valueToTransfer: valueToTransfer,
        gasPriceGwei: "5",
        chainCommon: null
    }
    web3Custom.transfer(payload)
        .then(res => {
            console.log(`Transaction hash: ${res.transactionHash}`)

            web3Custom.getBalance(walletAddr[0])
                .then(currBalance => {
                    let valueUsed = web3Custom.fromWei((beforeBalance-currBalance).toString())
                    console.log(`\nTransfer + GasFee: ${valueUsed} ETH, ${web3Custom.toUSD(valueUsed, "ether", "ether").toFixed(2)} USD`)
                    console.log("\n")
                })
        })

}

// startProgram
main()