export interface IUser {
  role: string;
  email: string;
}

export interface IContext {
  user: { role: string; email: string };
  logIn: (login: IUser) => void;
  logOut: () => void;
  handyLoading: boolean;
}
