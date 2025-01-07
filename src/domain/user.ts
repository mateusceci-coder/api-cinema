export interface CreateUserParams {
  name: string;
  email: string;
  age: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  createdAt: Date;
}
