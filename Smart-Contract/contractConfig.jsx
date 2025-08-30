import { defineChain } from "viem";


const Contract_Finale = "0xf897a5C5FA3E3237D80d46C0796B689b6D893CC7"
export const CONTRACT_ADDRESS =  Contract_Finale;

export const CrossFi = defineChain({
  id: 114,
  name: 'Flare Coston 2',
  nativeCurrency: {
    decimals: 18,
    name: 'Flare',
    symbol: 'FLR',
  },
  rpcUrls: {
    default: { http: ['https://coston2-api.flare.network/ext/C/rpc'] },
  },
  blockExplorers: {
    default: {
      name: 'RouteScan',
      url: 'https://coston2.testnet.flarescan.com'
    },
  },
})

export const CONTRACT_ABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			}
		],
		"name": "deployerWithdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "depositToSafe",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "returnfromInvestment",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_Amount",
				"type": "uint256"
			}
		],
		"name": "userWithdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "withdrawToInvest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "depositorsList",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unloadData",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
