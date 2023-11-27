import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-domingo',
  templateUrl: './domingo.page.html',
  styleUrls: ['./domingo.page.scss'],
})
export class DomingoPage implements OnInit {
  tarea: string ="";

  constructor(private router: Router,private appService: AppService) { }

  ngOnInit() {
  }
  enviarDomingo(){
    this.appService.setTareaDomingo(this.tarea.toString())
    this.router.navigate(['/home']);

  }
}