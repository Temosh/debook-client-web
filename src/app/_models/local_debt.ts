export class LocalDebt {
  creditType: {
    type: string
  };

  currency: {
    code: string,
    sign: string
  };

  localUser: {
    name: string,
    surname: string
  };

  user: {
    name: string,
    surname: string,
    email: string
  };
  value: number;
}
