pragma solidity ^0.6.0;

import {Verifier} from "./verifier.sol";

contract Membership {
    Verifier public verifier;

    event NewMember(uint256 _member);

    constructor(Verifier _verifier) public {
        verifier = _verifier;
    }

    function join(
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256 _root,
        uint256 _recipient
    ) public {
        // Double checkroot format
        require(_root == 0x2e55e0bc8706313ad36bea5a450e5d7ad8bd71820737fa79c3c4f5ce538ffcbd);
        // TODO double check format
        require(verifier.verifyProof(a, b, c, [_root, _recipient]), "INVALID PROOF");
        // Recipient was watermarked within the proof
        emit NewMember(_recipient);
    }
}
