import { Injectable } from "@angular/core";
import { gql, Mutation } from "apollo-angular";
import { IAccount } from "../interfaces/account.interface";

export interface Response {
  account: IAccount;
  token: string;
}

@Injectable({
  providedIn: "root",
})
export class LoginGQL extends Mutation<Response> {
  override document = gql`
    mutation login($username: String!, $password: String!) {
      login(username: $username, password: $password) {
        account {
          _id,
          username,
          firstName,
          lastName,
          email,
          phone,
          gender,
          isAdmin,
          updatedAt,
          createdAt
        },
        token
      }
    }
  `;
}