import axios from "axios";

// TODOs:
// - [ ] Take in ChainID and ERC-20 token as parameters
// - [ ] Can query multiple APIs (e.g. NFTs)
export async function covalentQuery() {
    let results
    try {
        // Note: gets 10,000 objects at once (arbitrary limit for hackathon)
        const resp = await axios.get("https://api.covalenthq.com/v1/43114/tokens/0x8729438eb15e2c8b576fcc6aecda6a148776c0f5/token_holders/?&key=ckey_b5951d05b0ac41b1a37ed81af21&page-size=10")
        let { items } = resp.data.data
        results = items.map(x => x.address)
    } catch (e) {
        console.error(e)
    }
    return results
}