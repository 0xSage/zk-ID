pragma circom 2.0.3;

include "../node_modules/circomlib/circuits/poseidon.circom";

// TODO include 0xparc ecdsa sig circuit

template Merkle() {
	// Public inputs, circom requires at least 1 pub input...
	signal input dummy;

	// Private inputs
	signal input in;

	// Outputs
	signal output out;

	// trivial circuit to test all is working
	in === 5;
	out <== in;
}