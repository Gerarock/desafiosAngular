import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  public storageValue;

  constructor(private authService: AuthService) {
    const data = localStorage.getItem('auth-user');
    this.storageValue = JSON.parse(data!);
  }

  logout(){
    this.authService.logout();
  }
}
