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

async function helloWorldSol() {
    web3BSC.eth.defaultAccount = myWalletAddr
    let helloAbi = [{"constant":false,"inputs":[{"name":"x","type":"string"}],"name":"setMessage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getMessage","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]
    
    var contractAddress = "0xEBccdE06CA5B13dF4D41e358C9ba6018D361202B"
    
    var contractByteCode = {
        "linkReferences": {},
        "object": "608060405234801561001057600080fd5b506102d7806100206000396000f30060806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063368b877214610051578063ce6d41de146100ba575b600080fd5b34801561005d57600080fd5b506100b8600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061014a565b005b3480156100c657600080fd5b506100cf610164565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561010f5780820151818401526020810190506100f4565b50505050905090810190601f16801561013c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b8060009080519060200190610160929190610206565b5050565b606060008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101fc5780601f106101d1576101008083540402835291602001916101fc565b820191906000526020600020905b8154815290600101906020018083116101df57829003601f168201915b5050505050905090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061024757805160ff1916838001178555610275565b82800160010185558215610275579182015b82811115610274578251825591602001919060010190610259565b5b5090506102829190610286565b5090565b6102a891905b808211156102a457600081600090555060010161028c565b5090565b905600a165627a7a7230582092791f9f709b36d1cfcca98fa4ccc7b9886f567bebba1e2b3470ad4a74f184260029",
        "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x2D7 DUP1 PUSH2 0x20 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x4C JUMPI PUSH1 0x0 CALLDATALOAD PUSH29 0x100000000000000000000000000000000000000000000000000000000 SWAP1 DIV PUSH4 0xFFFFFFFF AND DUP1 PUSH4 0x368B8772 EQ PUSH2 0x51 JUMPI DUP1 PUSH4 0xCE6D41DE EQ PUSH2 0xBA JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x5D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xB8 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP3 ADD DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP4 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY DUP3 ADD SWAP2 POP POP POP POP POP POP SWAP2 SWAP3 SWAP2 SWAP3 SWAP1 POP POP POP PUSH2 0x14A JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xC6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xCF PUSH2 0x164 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP1 PUSH1 0x20 ADD DUP3 DUP2 SUB DUP3 MSTORE DUP4 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x10F JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0xF4 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x13C JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST DUP1 PUSH1 0x0 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH2 0x160 SWAP3 SWAP2 SWAP1 PUSH2 0x206 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x60 PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 ISZERO PUSH2 0x1FC JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x1D1 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x1FC JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x1DF JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0x247 JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0x275 JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0x275 JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0x274 JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x259 JUMP JUMPDEST JUMPDEST POP SWAP1 POP PUSH2 0x282 SWAP2 SWAP1 PUSH2 0x286 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH2 0x2A8 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x2A4 JUMPI PUSH1 0x0 DUP2 PUSH1 0x0 SWAP1 SSTORE POP PUSH1 0x1 ADD PUSH2 0x28C JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST SWAP1 JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 SWAP3 PUSH26 0x1F9F709B36D1CFCCA98FA4CCC7B9886F567BEBBA1E2B3470AD4A PUSH21 0xF18426002900000000000000000000000000000000 ",
        "sourceMap": "28:215:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;28:215:0;;;;;;;"
    }
    var helloContract = new web3BSC.eth.Contract(helloAbi, contractAddress)

    await helloContract.methods.setMessage("NFT is comming!").send({
        from: myWalletAddr
    }, function(error, res) {
        if (error) {
            console.log(`Error: ${error}`)
        } else {
            console.log(`Transaction send result: ${res}`)
        }
    })
    var res = await helloContract.methods.getMessage().call()
/*     {
        from: myWalletAddr,
        gasPrice: web3Custom.toWei("10", "Gwei"),
        gas: "120000",
        data: contractByteCode
    }) */
    console.log(`Result of helloContract.getMessage(): '${res}'`)
}

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

    //helloWorldSol()

}

// startProgram
main()