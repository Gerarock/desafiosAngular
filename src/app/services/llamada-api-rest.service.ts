import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Clientes } from '../models/clientes.model';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class LlamadaApiRestService {

  private clientes$ = new BehaviorSubject<Clientes[]>([]);

  constructor(
    private httpClient: HttpClient
  ) { }

  get clientes(): Observable<Clientes[]> {
    return this.clientes$.asObservable();
  }

  obtenerClientes(): void {
    this.httpClient.get<Clientes[]>(`${environments.apiBaseUrl}/clientes`)
      .subscribe({
        next: (clientes) => {
          this.clientes$.next(clientes);
        }
      })
  }
}
