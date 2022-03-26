# zk-id

## Motivation
For learning purposes only. Circuits and contracts are not audited.

## Overview
This repo contains the following: 
- A generic plugin for constructing merkle trees on AVAX chain state.
- A generic implementation for SNARK proofs on merkle inclusion.

Possible usecases include letting users prove:
- I own more than __ tokens
- I own an NFT of this variety
- I participated in this ICO

## ZK
A SNARK proof of any values in public chain state, without the existence of "ZK Oracles", is possible with a merkle proof of inclusion.

For increased privacy, merkle leaves can be commitments to private values hash(pws/addresses/somesecret), rather than just addresses in the clear (as seen in TornadoCash, zkAirdrops, etc). But since we're proving public chain state, these additional constraints are not necessary.

## Credits
- Tornado Cash
- 0xParc mentors
	- https://github.com/weijiekoh/zknftmint