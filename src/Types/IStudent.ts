export interface IStudent {
  name: string;
  surname: string;
  form: string;
  rating: number;
  history?: (number | string)[];
  ranking?: number;
  email: string;
}

export interface IStudentId extends IStudent {
  id: string;
}
