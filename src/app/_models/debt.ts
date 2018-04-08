export class Debt {
  user: {
    name: string,
    surname: string,
    email: string
  };

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
