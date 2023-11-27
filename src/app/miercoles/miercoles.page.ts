import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-miercoles',
  templateUrl: './miercoles.page.html',
  styleUrls: ['./miercoles.page.scss'],
})
export class MiercolesPage implements OnInit {
  tarea: string ="";

  constructor(private router: Router,private appService: AppService) { }

  ngOnInit() {
  }
  enviarMiercoles(){
    this.appService.setTareaMiercoles(this.tarea.toString())
    this.router.navigate(['/home']);

  }
}
