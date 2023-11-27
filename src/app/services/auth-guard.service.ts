import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, CanActivateFn } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }

  // funcion verificando en local Storage un token que se asocia al acceso.

  canActivate(route: ActivatedRouteSnapshot): boolean{ 
      console.log(route);

      let authInfo = {
        authenticated: false,
      };
      let Token = localStorage.getItem('UserName')
      console.log('el token es: '+Token)
      if (Token && Token !='') {
        authInfo.authenticated= true
      }

      if (!authInfo.authenticated) {
        this.router.navigate(['login']);
        return false;
      }

      return true;



  }


}

