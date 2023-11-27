import { Component, OnInit, ViewChildren } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { AnimationController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  name: String;
  pass: String;

  constructor(private appService: AppService, private router: Router,private menuCtrl: MenuController,private animationCtrl: AnimationController) {
    this.name= "";
    this.pass= "";
   }
   ngOnInit() {
    this.menuCtrl.enable(false)
  }


   mensajeError= "";
   isAlertOpen = false;
   public alertButtons = ['OK'];
 
   setOpen(isOpen: boolean) {
     this.isAlertOpen = isOpen;
   }


  InicioSesion=()=>{
    console.log(this.name)
    console.log(this.pass)
    console.log('nuevo version !!!!!!!!!!!!!!!!!!!!!!!!ss')
    localStorage.setItem('UserName',this.name.toString())//token para inicio almacenado en Local Storage  

    if(
    this.ValidacionLargo(this.name)&&
    this.ValidacionLargo2(this.pass)&&
    this.ValidacionNumerico(this.pass)
    ){
      //agregar logica de inicio correcto, interpolacion y blablabla
      this.appService.setUserName(this.name.toString()) 
      // aqui es para usar el servicio

      console.log("pasa")

    // redireccion a home
    this.router.navigate(['/home']);
    }
    else{
      console.log("no pasa")
      this.setOpen(true)
    }

  }
  ValidacionLargo=(text:String)=>{
    if(text.length<9 && text.length>2){
      return true
    }
    console.log("Extension incorrecta")
    this.mensajeError= "extension incorrecta"
    return false
    
  }


  ValidacionNumerico=(text:String)=>{
    if(text.match(/\d+/)){
      return true
    }
    console.log("el dato no es numerico")
    this.mensajeError= "el dato no es numerico"
    return false
  }

  ValidacionLargo2=(text:String)=>{
    if(text.length==4){
      return true
    }
    console.log("Extension incorrecta")
    this.mensajeError= "Extension incorrecta"
    return false
    
  }

 


}
