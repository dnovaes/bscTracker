const interval = require('../interval')
const web3Custom = require('../web3_custom/methods')
const Web3 = require('web3');

const BscNode = "http://127.0.0.1:8545"
const web3BSC = new Web3(BscNode)

/*
Requisites:
- run a local instance of ETH network unless you change the content of var BscNode
- deploy the contract (https://remix.ethereum.org/)
- put the addresses, abi and run it
*/

//localNet
const myWalletAddr = "0x50699D01C9c931cBAA70F13Fbb710908CF3f19a2"

//methods
async function helloWorldSol() {
    web3BSC.eth.defaultAccount = myWalletAddr
    let helloAbi = [{"constant":false,"inputs":[{"name":"x","type":"string"}],"name":"setMessage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getMessage","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]
    
    var contractAddress = "0xEBccdE06CA5B13dF4D41e358C9ba6018D361202B"
    var helloContract = new web3BSC.eth.Contract(helloAbi, contractAddress)

    await helloContract.methods.setMessage("Example Working !!").send({
        from: myWalletAddr,
        gasPrice: web3Custom.toWei("5", "Gwei"),
        gas: "120000"
    }, function(error, res) {
        if (error) {
            console.log(`Error: ${error}`)
        } else {
            console.log(`Transaction send result: ${res}\n`)
        }
    })
    var res = await helloContract.methods.getMessage().call()
    console.log(`Result of helloContract.getMessage(): '${res}'`)
}

async function main() {
    web3Custom.init(web3BSC)

    let beforeBalance = await web3Custom.getBalance(myWalletAddr)
    console.log(`Initial Balance: ${web3Custom.fromWei(beforeBalance)} ETH\n`)

    helloWorldSol()

    let finalBalance = await web3Custom.getBalance(myWalletAddr)
    console.log(`Final Balance: ${web3Custom.fromWei(finalBalance)} ETH\n`)

    let gasFee = Math.abs(finalBalance-beforeBalance).toString()
    let gasFeeETH = parseFloat(web3Custom.fromWei(gasFee))

    let gasFeeUSDwei = web3Custom.toUSD(gasFee, "ether", "ether").toString()
    let gasFeeUSD = parseFloat(web3Custom.fromWei(gasFeeUSDwei))
    console.log(`gasFee: ${gasFeeUSD.toFixed(5)} USD or ${gasFeeETH.toFixed(5)} ETH`)
}

main()
