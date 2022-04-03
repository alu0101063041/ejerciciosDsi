// Client code is able to work properly with the interface of SystemA
export class SystemA {
  constructor(private csvData: string = '') {
  }
  getData(): string {
    return this.csvData;
  }
}

export type JSONData = {
  name: string;
  surname: string;
  username: string;
}

