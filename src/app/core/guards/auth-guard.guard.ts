import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthServiceService} from "@app/core/services/auth/auth.service.service";
import {map, of, switchMap} from "rxjs";
import {DatabaseServiceService} from "@app/core/services/database/database.service.service";
import {UserDto} from "@/types";

const router = ()=> inject(Router)
const authState = () => inject(AuthServiceService).authState
const database = () => inject(DatabaseServiceService)

export const authGuardGuard: CanActivateFn = (route, state) => {
  const auth = authState()
  const navigator = router()
  return auth.pipe(
    map(user => {
      console.log("1", user)
      if (!user) {
        navigator.navigate(['/auth/log-in']).then()
        return false;
      }
      return true;
    })
  );
};



export const authGuard: CanActivateFn = (route, state) => {
  const navigator = router()
  const auth = authState()
  const db = database()
  return auth.pipe(
    switchMap(user => {
      if (user){
        const email = user.email as string
        console.log("2", email)
        return  db.getUserByEmail(email).then(response =>{
          if (response.role === 'Client'){
            navigator.navigateByUrl('/').then()
          }else {
            navigator.navigateByUrl('/dashboard').then()
          }
          return false
        })
      }
      return of(true)
    })
  )
}
