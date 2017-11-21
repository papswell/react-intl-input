import expect from 'expect';
import { getNames } from './../../src/components/intl-input';

describe('getNames', () => {

  it('should get a name object', () => {
    expect(getNames('customInput')).toEqual({
      inputName: `customInput-0-input`,
      selectName: `customInput-0-select`,
    })
  })
});
