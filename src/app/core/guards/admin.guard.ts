import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('here');
    return this.authService.obtenerUsuarioAutenticado()
      .pipe(
        map((usuarioAutenticado) => {
          if (usuarioAutenticado?.role !== 'admin') {
            alert('No tienes permisos')
            return false;
          } else {
            return true;
          }
        })
      )
  }

}
