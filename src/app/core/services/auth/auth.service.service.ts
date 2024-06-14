import {inject, Injectable} from '@angular/core';
import {Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword,} from "@angular/fire/auth";
import {Credentials, UserDto} from "@/types";
import {DatabaseServiceService} from "@app/core/services/database/database.service.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private readonly auth = inject(Auth)
  private database = inject(DatabaseServiceService)

  private readonly authUser = this.auth.currentUser;
  readonly authState = authState(this.auth)
  constructor() { }


  async login(credentials: Credentials){
    return await signInWithEmailAndPassword(this.auth, credentials.email, credentials.password)
  }

  logout(){
    return this.auth.signOut()
  }

  async register(credentials: UserDto){
    await this.database.createUser(credentials)
    return createUserWithEmailAndPassword(this.auth, credentials.email, credentials.password)
  }
}
