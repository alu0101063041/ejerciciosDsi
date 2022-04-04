

export interface Strategy {
  execute(data: number[]): number[];
}
/**
 * Clase que usa algoritmo bubble sort
 */
export class Bubble implements Strategy {
  execute(data: number[]) :number[] {
    data = data.slice();
    console.log(data);
    for ( let i=0; i<data.length; i++) {
      for (let j=0; j<data.length-1; j++) {
        if (data[j] > data[j+1]) {
          [data[j], data[j+1]] =[data[j+1], data[j]];
          console.log(data);
        }
      }
    }
    return data;
  }
}
