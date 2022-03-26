# zk-id

## Motivation
For hackathon & learning purposes only. Circuits and contracts are not audited.

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
- Rust installation of Circom. [Instructions](https://docs.circom.io/getting-started/installation/#installing-dependencies)
## Credits
- Tornado Cash
- 0xParc mentors
	- https://github.com/weijiekoh/zknftmint