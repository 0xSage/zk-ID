// TODO: Construct Merkle Proof
import { MerkleTree } from "merkletreejs"
import * as ethers from "ethers"
import { hash } from "../../node_modules/circomlib/src/pedersenHash.js"

export async function constructMerkleTree(data) {
    console.log(hash)

    const leaves = data.map(x => {
        return x
    })

    const tree = new MerkleTree(leaves, hash)

    console.log(tree.toString())
    
    return data
}