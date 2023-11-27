import { Component, Input } from '@angular/core';
import { AppService } from '../app.service';
import { ApisService } from '../services/apis.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
//libreria capacitor para geolocalizacion
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  TareaL = "";
  TareaMa = "";
  TareaMi = "";
  TareaJ = "";
  TareaV = "";
  TareaS = "";
  TareaD = "";
  Temp = "";

  userName: String = "";
  constructor(private apisServices: ApisService, private appService: AppService, private router: Router, private activedRouter: ActivatedRoute, private menuCtrl: MenuController) {
    this.appService.getUserName.subscribe(u => {
      this.userName = u
      console.log("funciono " + u)
    })




    this.appService.getTareaLunes.subscribe(u => {
      this.TareaL = u
      console.log("funciono tarea Lunes " + u)
    })

    this.appService.getTareaMartes.subscribe(u => {
      this.TareaMa = u
      console.log("funciono tarea Martes " + u)
    })


    this.appService.getTareaMiercoles.subscribe(u => {
      this.TareaMi = u
      console.log("funciono tarea Lunes " + u)
    })

    this.appService.getTareaJueves.subscribe(u => {
      this.TareaJ = u
      console.log("funciono tarea Martes " + u)
    })


    this.appService.getTareaViernes.subscribe(u => {
      this.TareaV = u
      console.log("funciono tarea Lunes " + u)
    })

    this.appService.getTareaSabado.subscribe(u => {
      this.TareaS = u
      console.log("funciono tarea Martes " + u)
    })


    this.appService.getTareaDomingo.subscribe(u => {
      this.TareaD = u
      console.log("funciono tarea Lunes " + u)
    })







  }
  ///utilizandoapi android para solicitar datos de gps o servicios de google
  async geoloca(){
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current position:', coordinates);

    /// se utiliza el api de clima con la geolocalizacion de android
    let Clima= await this.apisServices.getClima(coordinates.coords.longitude.toString(),coordinates.coords.latitude.toString());
    console.log('clima en tu ubicacion: '+JSON.stringify(Clima))
    let temperatura= Clima.current_weather.temperature
    console.log(temperatura)
    // se transfiere a una variable para mostrarse en interfaz grafica
    this.Temp = temperatura.toString()
  }

  ngOnInit() {
    this.menuCtrl.enable(true)
    this.geoloca();
  }


}
