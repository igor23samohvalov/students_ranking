export default interface IStudent {
  id: string | number;
  name: string;
  surname: string;
  form: string;
  rating: number;
  history: (number | string)[];
  ranking: number;
}
