import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from './services/auth-guard.service';

import { HttpClientModule } from '@angular/common/http' // conexion con apis mediante internet

const routes: Routes =[
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', loadChildren:() => import('./login/login.module').then(x => x.LoginPageModule)},
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(x => x.HomePageModule),
    canActivate: [AuthGuardService],
  },
];




@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },SQLite],
  bootstrap: [AppComponent],
})
export class AppModule {}
