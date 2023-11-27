import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-lunes',
  templateUrl: './lunes.page.html',
  styleUrls: ['./lunes.page.scss'],
})
export class LunesPage implements OnInit {
  tarea: string ="";

  constructor(private router: Router,private appService: AppService) { }

  ngOnInit() {
  }

  enviarLunes(){
    this.appService.setTareaLunes(this.tarea.toString()) 
    // let variable1: NavigationExtras ={
    //   state:{
    //     tareaLunes: this.tarea
    //   }
    // }
    // this.router.navigate(['/home'],variable1);
    this.router.navigate(['/home']);
  }

}
