import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClimaModel } from '../models/clima.model';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

/// consumo del apirest clima
  constructor(public http:HttpClient) { }
  public getClima(Lon: String,Lat: String):Promise<ClimaModel>{
    let urlClima= `https://api.open-meteo.com/v1/forecast?latitude=${Lat}&longitude=${Lon}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`;
    return new Promise(resolve=>{
      this.http.get<ClimaModel>(urlClima).subscribe((data: ClimaModel)=>{
          resolve(data);
      },error=>{
        console.log(error);
      });
    });

  }
}
