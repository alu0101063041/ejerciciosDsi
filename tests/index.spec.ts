import 'mocha'
import {expect} from 'chai'
import {App} from '../src/system'
describe('Test', () => {
  it('test1', () => {
    const A: App.SystemA = new App.SystemA;
    expect(A).to.be.instanceOf(App.SystemA)
  })
})