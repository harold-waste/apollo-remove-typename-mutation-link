import { removeTypenameFromMutation } from './index'
import { desiredOperation, operation } from './operation';

const forward = jest.fn();

describe('it should remove typename', () => {
  it('should remove typename', () => {
    removeTypenameFromMutation(operation, forward);
    expect(forward).toHaveBeenCalledWith(desiredOperation);
  });
});
