import { Component, OnDestroy, OnInit } from '@angular/core';
import { LlamadaApiRestService } from 'src/app/services/llamada-api-rest.service';
import { MatTableDataSource } from '@angular/material/table';
import { Clientes } from 'src/app/models/clientes.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-llamada-api-rest',
  templateUrl: './llamada-api-rest.component.html',
  styleUrls: ['./llamada-api-rest.component.css']
})
export class LlamadaApiRestComponent implements OnInit, OnDestroy {

  destroyed$ = new Subject<void>();
  dataSource = new MatTableDataSource<Clientes>();
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'edad', 'direccion', 'email'];

  aplicarFiltros(ev: Event): void {
    const inputValue = (ev.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue?.trim()?.toLowerCase();
  }

  constructor(
    private llamadaApiRestService: LlamadaApiRestService
  ) { }

  ngOnInit(): void {
    this.llamadaApiRestService.clientes.subscribe({
      next: (clientes) => {
        this.dataSource.data = clientes;
      }
    })
    this.llamadaApiRestService.obtenerClientes();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
