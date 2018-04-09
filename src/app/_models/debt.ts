export class Debt {
  person: {
    name: string,
    surname: string
  };

  currency: {
    code: string,
    sign: string
  };

  creditType: {
    type: string
  };

  value: number;
}
