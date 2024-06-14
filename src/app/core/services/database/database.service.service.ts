import {inject, Injectable} from '@angular/core';
import {UserDto} from "@/types";
import {addDoc, collection, doc, Firestore, getDocs, query, where} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {
  private firestore: Firestore = inject(Firestore)
  private collection$ = collection(this.firestore, 'users')
  constructor() { }

  private document(path: string,id: string){
    return doc(this.firestore, `${path}/${id}`)
  }

  async createUser(data: UserDto){
    return await addDoc(this.collection$, data)
  }
  async getUserByEmail(email: string): Promise<UserDto>{
    try {
      let user: UserDto = {} as UserDto
      const q = query(this.collection$, where('email', '==', email))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach(doc => {
        user = {...doc.data()} as UserDto
      })
      return user
    }catch (e){
      console.error(e)
      return {} as UserDto
    }
  }
}
