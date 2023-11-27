import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-jueves',
  templateUrl: './jueves.page.html',
  styleUrls: ['./jueves.page.scss'],
})
export class JuevesPage implements OnInit {
  tarea: string ="";

  constructor(private router: Router,private appService: AppService) { }

  ngOnInit() {
  }
  enviarJueves(){
    this.appService.setTareaJueves(this.tarea.toString())
    this.router.navigate(['/home']);

  }
}