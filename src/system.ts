// Client code is able to work properly with the interface of SystemA
export namespace App {
  export class SystemA {
    constructor(private csvData: string = '') {
    }
    getData(): string {
      return this.csvData;
    }
  }
}

