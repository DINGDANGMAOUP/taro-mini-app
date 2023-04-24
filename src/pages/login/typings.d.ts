declare namespace LOGIN {
  interface FormType {
    username: string;
    password: string;
  }

  type Type = 'username' | 'password' | 'reset'

  interface ActionType {
    type: Type;
    nextUsername?: string;
    nextPassword?: string;
  }
}
