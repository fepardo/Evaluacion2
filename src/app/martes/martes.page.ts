import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-martes',
  templateUrl: './martes.page.html',
  styleUrls: ['./martes.page.scss'],
})
export class MartesPage implements OnInit {
  tarea2: string ="";

  constructor(private router: Router,private appService: AppService) { }

  ngOnInit() {
  }

  enviarMartes(){
    this.appService.setTareaMartes(this.tarea2.toString())
    // let variable2: NavigationExtras ={
    //   state:{
    //     tareaMartes: this.tarea2
    //   }
    // }
    // this.router.navigate(['/home'],variable2);
    this.router.navigate(['/home']);

  }

}
