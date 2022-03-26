// TODO: Construct Merkle Proof
import { MerkleTree } from "merkletreejs"
import * as ethers from "ethers"

export async function constructMerkleTree(data) {
    console.log(data)
    console.log(data.length)

    const leaves = data.map(x => {
        console.log(x)
        console.log(typeof x)
        return x
    })

    const tree = new MerkleTree(leaves, ethers.utils.keccak256)
    console.log(tree.toString())
    
    
    
    return data
}