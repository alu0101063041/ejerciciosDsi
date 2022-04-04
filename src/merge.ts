
export interface Strategy {
  execute(data: number[]): number[];
}
/**
 * Clase Merge
 */
export class Merge implements Strategy {
  execute(data: number[]):number[] {
    if (data.length <=1) {
      return data;
    }
    const middle = Math.floor(data.length);
    const left = data.slice(0, middle);
    const right = data.slice(middle);
    console.log(data);
    return this.merge(this.execute(left), this.execute(right));
  }
  merge(left:number[], right:number[]):number[] {
    const array:number[] = [];
    let lIndex=0;
    let rIndex=0;
    while (lIndex + rIndex < left.length + right.length) {
      const lItem = left[lIndex];
      const rItem = right[rIndex];
      if (lItem == null) {
        array.push(rItem);
        rIndex++;
      } else if (rItem == null) {
        array.push(lItem);
        lIndex++;
      } else if (lItem < rItem) {
        array.push(lItem);
        lIndex++;
      } else {
        array.push(rItem);
        rIndex++;
      }
    }
    console.log(array);
    return array;
  }
}
