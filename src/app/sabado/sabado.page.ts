import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-sabado',
  templateUrl: './sabado.page.html',
  styleUrls: ['./sabado.page.scss'],
})
export class SabadoPage implements OnInit {
  tarea: string ="";

  constructor(private router: Router,private appService: AppService) { }

  ngOnInit() {
  }
  enviarSabado(){
    this.appService.setTareaSabado(this.tarea.toString())
    this.router.navigate(['/home']);

  }
}
