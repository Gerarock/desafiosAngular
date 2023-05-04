import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, map, catchError, of } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environments } from 'src/environments/environments';

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
    this.httClient.get<Usuario[]>(
      `${environments.apiBaseUrl}/usuarios`,
      {
        params: {
          ...formValue
        }
      }
    ).subscribe({
      next: (usuarios) => {
        const usuarioAutenticado = usuarios[0];
        if (usuarioAutenticado) {
          localStorage.setItem('token', usuarioAutenticado.token);
          localStorage.setItem('auth-user', JSON.stringify(usuarioAutenticado));
          this.authUser$.next(usuarioAutenticado);
          this.router.navigate(['dashboard']);
        } else {
          alert('¡Usuario o contraseña incorrectos!');
        }
      }
    });
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('auth-user');
    this.authUser$.next(null);
    this.router.navigate(['auth']);
  }

  verificaToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    return this.httClient.get<Usuario[]>(
      `${environments.apiBaseUrl}/usuarios?token=${token}`),
      {
        headers: new HttpHeaders({
          'authorization': token || ''
        }),
      }
        .pipe(
          map((usuarios) => {
            const usuarioAutenticado = usuarios[0];
            if (usuarioAutenticado) {
              localStorage.setItem('token', usuarioAutenticado.token);
              this.authUser$.next(usuarioAutenticado);
            }
            return !!usuarioAutenticado;
          }),
          catchError((err) => {
            return of(false);
          })
        );
  }
}