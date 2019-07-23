export class User{
  constructor (
      public username:string,
      public lastName?:string,
      public firstName?:string,
      public matricule?:string,
      public roles?:string[]
  ) {

  }
}