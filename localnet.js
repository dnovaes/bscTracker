const interval = require('./interval')
const web3Custom = require('./web3_custom/methods')
const Web3 = require('web3');

const BscNode = "http://127.0.0.1:8545"
const web3BSC = new Web3(BscNode)

//testNet
const myWalletAddr = "0x9f0879Fda1dF24135E29445b12D3e2470f9767Fb"
const myWalletPrivateKey = "0xf333104694198f68670a16249d73fa9593dc58e13fc74e18128f3e977ecbece3"
web3BSC.eth.accounts.wallet.add(myWalletPrivateKey)

// startProgram
async function main () {
    console.log(`Web3 version: ${Web3.version}\n`)

    web3Custom.init(web3BSC)
    let beforeBalance = await web3Custom.getBalance(myWalletAddr)
    console.log(`Initial Balance: ${beforeBalance}`)
    web3Custom.getAccounts()

    let valueToTransfer = "1"
    console.log(`Transfering ${valueToTransfer} ETH ...`)

    gasPriceGwei = "1000"
    web3Custom.transfer(myWalletAddr, myWalletPrivateKey, "0xE5e7c6981675F30c61F8a2cc9AE3aC1FE4f66C78", valueToTransfer, gasPriceGwei)
        .then(res => {
            console.log(`Transaction hash: ${res.transactionHash}`)

            web3Custom.getBalance(myWalletAddr)
                .then(currBalance => {
                    let valueUsed = web3Custom.fromWei((beforeBalance-currBalance).toString())
                    console.log(`Transfer + GasFee: ${valueUsed} ETH, ${web3Custom.gweiToUSD(valueUsed, "ether", "ether").toFixed(2)} USD`)
                })
        })

}

main()