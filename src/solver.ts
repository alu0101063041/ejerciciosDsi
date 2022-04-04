import { Merge } from './merge';
import { Bubble } from './bubble';
/**
 * This is an example of context class where different algorithms are available
 */
export interface Strategy {
  execute(data: number[]): number[];
}

export class Solver {
  constructor(private data: number[], private strategy: Strategy) {
  }

  setStrategy(str: Strategy) {
    this.strategy = str
  }
  logic() {
    this.strategy.execute(this.data)
  }
}
