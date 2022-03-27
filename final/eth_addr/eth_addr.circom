pragma circom 2.0.2;

include "../../node_modules/circomlib/circuits/mimcsponge.circom";
include "../../node_modules/circomlib/circuits/bitify.circom";
include "../../node_modules/circomlib/circuits/comparators.circom";
include "../../circuits/eth_addr.circom";

// From TornadoCash
// Computes MiMC([left, right])
template HashLeftRight() {
    signal input left;
    signal input right;
    signal output hash;

    // TODO later change this for poseidon?
    component hasher = MiMCSponge(2, 220, 1);
    hasher.ins[0] <== left;
    hasher.ins[1] <== right;
    hasher.k <== 0;
    hash <== hasher.outs[0];
}

// if s == 0 returns [in[0], in[1]]
// if s == 1 returns [in[1], in[0]]
template DualMux() {
    signal input in[2];
    signal input s;
    signal output out[2];

    s * (1 - s) === 0;
    out[0] <== (in[1] - in[0])*s + in[0];
    out[1] <== (in[0] - in[1])*s + in[1];
}

template Membership(levels) {
	// Private signal
	signal input privkey[4];
	signal input leaf;
	signal input pathElements[levels];
	signal input pathIndices[levels];

	// Public signals
	signal input root;
    signal input recipient; // not taking part in any computations

	component k2a = PrivKeyToAddr(64,4);

    for(var i = 0; i<4; i++) {
        k2a.privkey[i] <== privkey[i];
    }

    // 1. Check if private key matches leaf
    component eq = IsEqual();
	log(k2a.addr);
    eq.in[0] <== k2a.addr;
    eq.in[1] <== leaf;
    eq.out === 1;

	// 2. MerkleTreeChecker: checks that corresponding pubkey is in merkle tree
    // similar to Tornado Cash
    component selectors[levels];
    component hashers[levels];

    for (var i = 0; i < levels; i++) {
        selectors[i] = DualMux();
        selectors[i].in[0] <== i == 0 ? leaf : hashers[i - 1].hash;
        selectors[i].in[1] <== pathElements[i];
        selectors[i].s <== pathIndices[i];

        hashers[i] = HashLeftRight();
        hashers[i].left <== selectors[i].out[0];
        hashers[i].right <== selectors[i].out[1];
    }
	
	log(hashers[levels - 1].hash);
    root === hashers[levels - 1].hash;

    // 3. Watermark the recipient
    signal recipientSquare;
    recipientSquare <== recipient * recipient;
}

component main {public [root, recipient]} = Membership(2);
