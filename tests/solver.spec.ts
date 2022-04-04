import 'mocha'
import {expect} from 'chai'
import {Solver} from '../src/solver'
import { Bubble } from '../src/bubble'
import { Merge } from '../src/merge'

const data:number[] = [1, 4, 5, 6, 7, 2, 1, 3, 4, 5, 1, 1]
const bubbletest: Solver = new Solver(data, new Bubble)
const mergetest: Solver = new Solver(data, new Merge)

describe('Test', () => {
  it('bubble', () => {
    expect(bubbletest).to.be.instanceOf(Solver)
    expect(bubbletest).to.deep.eq([
      1, 1, 1, 1, 2,
      3, 4, 4, 5, 5,
      6, 7])
  })
  it('Merge', () => {
    expect(mergetest).to.be.instanceOf(Solver)
  })
})