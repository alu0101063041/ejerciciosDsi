import { Solver } from './solver'
import { Bubble } from './bubble'

const data:number[] = [1, 4, 5, 6, 7, 2, 1, 3, 4, 5, 1, 1]
const bubbletest: Solver = new Solver(data, new Bubble)
console.log(bubbletest.logic)
