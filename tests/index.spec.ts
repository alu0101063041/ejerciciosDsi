import 'mocha'
import {expect} from 'chai'
import {SystemA} from '../src/index'

describe('Test', () => {
  it('test1', () => {
    const A: SystemA = new SystemA;
    expect(A).to.be.instanceOf(SystemA)
  })
})