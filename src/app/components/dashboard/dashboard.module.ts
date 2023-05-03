import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ToolbarModule } from './pages/toolbar/toolbar.module';
import { AsideModule } from './pages/aside/aside.module';
import { FooterModule } from './pages/footer/footer.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    AsideModule,
    FooterModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'cards',
        pathMatch: 'full'
      },
      {
        path: 'cards',
        loadChildren: () => import('./pages/cards/cards.module').then((m) => m.CardsModule)
      },
      {
        path: 'listas',
        loadChildren: () => import('./pages/listas/listas.module').then((m) => m.ListasModule)
      },
      {
        path: 'formularios',
        loadChildren: () => import('./pages/formularios/formularios.module').then((m) => m.FormulariosModule)
      },
      {
        path: 'reactive-programming',
        loadChildren: () => import('./pages/reactive-programming/reactive-programming.module').then((m) => m.ReactiveProgrammingModule)
      },
      {
        path: 'llamada-api-rest',
        loadChildren: () => import('./pages/llamada-api-rest/llamada-api-rest.module').then((m) => m.LlamadaApiRestModule)
      }
    ]),
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
