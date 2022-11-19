import { TruthPipe } from './truth.pipe';

describe('TruthPipe', () => {
  it('create an instance', () => {
    const pipe = new TruthPipe();
    expect(pipe).toBeTruthy();
  });
});