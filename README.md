# zk-id

## Motivation
For hackathon & learning purposes only. Circuits and contracts are not audited.

### Hackathon Assets
- WAGMI contract deployment: 
- 0xbA2f3C5B66cB5D133e48d1314cc6cCF5A2D45F50
- 0x4F969b587b8F00f380e28FE362E747C63666Be9D
- Example trx: 0x1be299fddc0f8f60172c2abc194f30c78a840d31f40c02224dc4e783609385e2

- Hackathon code: https://github.com/0xEigenvector/zk-ID/tree/main/final/eth_addr
- Demo video: https://drive.google.com/drive/folders/1PvkLKwy-mAhNTafAV-6hfYQTtgwEyz90?usp=sharing

## Overview
This repo contains the following: 
- A generic plugin for constructing merkle trees with Poseidon hashes on AVAX public chain state.
- A generic implementation of SNARK proofs for merkle inclusion.
- Constraints that prover knows the private key corresponding to such an address.

Possible apps include anything requiring users to prove set membership without disclosing their specific address.

Our simple demo lets users prove:
- I own more than __ tokens
- I own an NFT of this variety
- I participated in this ICO

## ZK
For increased privacy, merkle leaves can be commitments to private values e.g. `hash(pws/addresses/some_secret_nullifier_tuple)`, rather than just addresses in the clear (as seen in TornadoCash, zkAirdrops). But since we're proving public chain state, these additional constraints are not necessary in this simple project.

## Requirements
- Node/npm
- Rust/cargo
- Cargo build and install Circom. [Instructions](https://docs.circom.io/getting-started/installation/#installing-dependencies)
- Macs: `brew install wget`
## Credits
- Tornado Cash
- 0xParc mentors
	- https://github.com/weijiekoh/zknftmint