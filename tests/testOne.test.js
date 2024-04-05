const assert = require('assert');
const sandbox = require('@architect/sandbox');
const axios = require('axios'); // Add this line

describe('Lambda function 1', () => {
    // Start the sandbox before running tests
    before(async () => {
        await sandbox.start();
    });

    // Stop the sandbox after running tests
    after(async () => {
        await sandbox.end();
    });

    it('should return a response with status code 200', async function() {
        const response = await axios.get('http://localhost:3333'); // Modify this line
        assert.strictEqual(response.status, 200); // Modify this line
    });
});