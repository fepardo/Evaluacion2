import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private userName= new BehaviorSubject("");
  getUserName = this.userName.asObservable();
  constructor() { }
  setUserName(userName: string){
    this.userName.next(userName);
  }



  // variables en memoria para persistencia entre paginas, con uso de observables y suscripciones.
  private tareaLunes= new BehaviorSubject("");
  getTareaLunes = this.tareaLunes.asObservable();
  setTareaLunes(text: string){
    this.tareaLunes.next(text);
  }

  private tareaMartes= new BehaviorSubject("");
  getTareaMartes = this.tareaMartes.asObservable();
  setTareaMartes(text: string){
    this.tareaMartes.next(text);
  }

  private tareaMiercoles= new BehaviorSubject("");
  getTareaMiercoles = this.tareaMiercoles.asObservable();
  setTareaMiercoles(text: string){
    this.tareaMiercoles.next(text);
  }

  private tareaJueves= new BehaviorSubject("");
  getTareaJueves = this.tareaJueves.asObservable();
  setTareaJueves(text: string){
    this.tareaJueves.next(text);
  }

  private tareaViernes= new BehaviorSubject("");
  getTareaViernes = this.tareaViernes.asObservable();
  setTareaViernes(text: string){
    this.tareaViernes.next(text);
  }

  private tareaSabado= new BehaviorSubject("");
  getTareaSabado = this.tareaSabado.asObservable();
  setTareaSabado(text: string){
    this.tareaSabado.next(text);
  }

  private tareaDomingo= new BehaviorSubject("");
  getTareaDomingo = this.tareaDomingo.asObservable();
  setTareaDomingo(text: string){
    this.tareaDomingo.next(text);
  }


}
