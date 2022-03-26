// Imports
jest.setTimeout(90000)
import * as fs from 'fs'
const circomlib = require('circomlibjs')

const ff = require('ffjavascript')
const stringifyBigInts: (obj: object) => any = ff.utils.stringifyBigInts

import {
	callGenWitness as genWitness,
	callGetSignalByName as getSignalByName,
} from 'circom-helper'

// My tests
describe('should generate valid witness on circuit', () => {
	// Name of my circuit test in ../../circom/test/
	const circuit = 'Merkle_test'

	// beforeAll(), TODO build the other circuit template dependencies

	it('should do something', async () => {
		// Preimage
		const secret = BigInt(5);

		// Format circuit inputs
		const circuitInputs = stringifyBigInts({
			secret
		})
		// Generate the witness
		const witness = await genWitness(circuit, circuitInputs)

		// Get the output from witness				component.signal_name
		const out = await getSignalByName(circuit, witness, 'main.out')

		expect(out).toEqual(5);
	})
})