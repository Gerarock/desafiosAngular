import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';

export interface LoginFormValue {
  user: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUser$ = new BehaviorSubject<Usuario | null>(null);

  constructor(
    private router: Router,
    private httClient: HttpClient
  ) { }

  obtenerUsuarioAutenticado(): Observable<Usuario | null> {
    return this.authUser$.asObservable();
  }

  login(formValue: LoginFormValue): void {
/*     const usuario: Usuario = {
      id: 1,
      nombre: 'Gerardo',
      apellido: 'Veliz',
      user: formValue.user,
      role: 'user'
    }
    localStorage.setItem('auth-user', JSON.stringify(usuario));
    this.authUser$.next(usuario);
    this.router.navigate(['dashboard']); */

    this.httClient.get('http://localhost:3000/usuarios').pipe.arguments

  }

  logout(): void {
    localStorage.removeItem('auth-user');
    this.authUser$.next(null);
    this.router.navigate(['auth']);
  }

  verificarStorage(): void {
    const storageValor = localStorage.getItem('auth-user');
    if (storageValor) {
      const usuario = JSON.parse(storageValor);
      this.authUser$.next(usuario);
    }
  }
}
