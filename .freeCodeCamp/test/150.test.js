const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === 'read' && lastCommand[1] === 'NAME' && lastCommand[2].op === '<' && lastCommand[3] === 'name.txt');
  });
});