const interval = require('./interval')
const web3Custom = require('./web3_custom/methods')

const Web3 = require('web3');

const BscNode = "http://127.0.0.1:8545"
const web3BSC = new Web3(BscNode)

const myWalletAddr = "0x7345B350143E4048Ad7d9E2962BEEC702bC8af8f" //testNet
const myWalletPrivateKey = "0x414dcdb89a5f9ca6358a3b7237822724e5dfc39bc5554e89b288ccae0bde176d"
web3BSC.eth.accounts.wallet.add(myWalletPrivateKey)

// startProgram

console.log(Web3.version)
web3Custom.init(web3BSC)
web3Custom.getBalance(myWalletAddr)
web3Custom.getAccounts()

web3Custom.transfer(myWalletAddr, myWalletPrivateKey, "0xE5e7c6981675F30c61F8a2cc9AE3aC1FE4f66C78", "0.002")
    .then(res => {
        console.log(`Transaction hash: ${res.transactionHash}`)
        console.log(res)
        web3Custom.getBalance(myWalletAddr)
    })