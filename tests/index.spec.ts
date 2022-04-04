import 'mocha'
import {expect} from 'chai'
import {App} from '../src/system'

describe('Test', () => {
  it('test1', () => {
    const A: App.SystemA = new App.SystemA('Aaa');
    expect(A).to.be.instanceOf(App.SystemA)
  })
  it('testw', () => {
    const A: App.SystemA = new App.SystemA('Aaa');
    expect(A.getData()).to.be.eq('Aaa')
  })
})