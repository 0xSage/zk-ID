pragma circom 2.0.3;

include "../node_modules/circomlib/circuits/poseidon.circom";

// TODO include 0xparc ecdsa sig circuit

template Merkle() {
	signal input in;
	signal output out;

	// trivial circuit to test all is working
	in === 5;
	out <== in;
}