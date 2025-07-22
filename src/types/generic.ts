export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

export interface TodoState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
}

export type TodoFilter = 'all' | 'active' | 'completed';