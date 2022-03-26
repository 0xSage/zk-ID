// TODO: Construct Merkle Proof

export async function constructMerkleTree(data) {
    console.log(data)
    console.log(data.length)

    const leaves = data.map(x => {
        console.log(x)
        console.log(typeof x)
        return x
    })
    
    // const tree = new MerkleTree(leaves, poseidon)
    // console.log(tree.toString())
    
    // console.log(poseidon)

    
    return data
}