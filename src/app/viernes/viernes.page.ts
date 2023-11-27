import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-viernes',
  templateUrl: './viernes.page.html',
  styleUrls: ['./viernes.page.scss'],
})
export class ViernesPage implements OnInit {
  tarea: string ="";

  constructor(private router: Router,private appService: AppService) { }

  ngOnInit() {
  }
  enviarViernes(){
    this.appService.setTareaViernes(this.tarea.toString())
    this.router.navigate(['/home']);

  }
}
