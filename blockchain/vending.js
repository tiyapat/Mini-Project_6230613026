const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"donutBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getVendingMachineBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"purchase","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"restock","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const vendingMachineContract = web3 => {
    return new web3.eth.Contract(abi, "0xf3A01E500FF0027bb303B5989aABa357Ea4E8a63")
}

export default vendingMachineContract







/*
getMyDonutCountHandler()
import Web3 from 'web3'

const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/e126dd2c1e1e4c76a01fd65e9c88325c"
)

const web3 = new Web3(provider)
*/