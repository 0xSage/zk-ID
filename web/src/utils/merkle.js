// TODO: Construct Merkle Proof
import { MerkleTree } from 'zkp-merkle-airdrop-lib'
import * as ethers from "ethers"

// NOTE: This is incredibly hacky: we are
export async function constructMerkleTree(data) {

    // NOTE: Arbitrary limit of 2**10
    // TODO: Validate that data length is < 2**10
    let treeHeight = 2 ** 10;
    let arr = new Array(treeHeight).fill(0)
    let leaves = arr.map((zero,i) => data[i] ? ethers.BigNumber.from(data[i]): ethers.BigNumber.from(zero))

    // let leaves = arr.map((x, i) => {
    //     let elem = data[i]
    //     if (elem) {
    //         return ethers.BigNumber.from(data[i])
    //     } else {
    //         return ethers.BigNumber.from(x)
    //     }
    // })


    let tree = MerkleTree.createFromLeaves(leaves)
    // console.log(tree)

    return data
}