export class Login {
  static readonly type = '[Authentication] Login';
  constructor(public username: string, public password: string) {}
}

export class Logout {
  static readonly type = '[Authentication] Logout';
  constructor() {}
}

export class GetAuthorized {
  static readonly type = '[Authentication] Get Authorized';
  constructor() {}
}