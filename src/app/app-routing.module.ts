import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    
  },
  {
    path: 'lunes',
    loadChildren: () => import('./lunes/lunes.module').then( m => m.LunesPageModule),
    canActivate: [AuthGuardService], //Authguard para restringir en acceso en paginas
  },
  {
    path: 'martes',
    loadChildren: () => import('./martes/martes.module').then( m => m.MartesPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'miercoles',
    loadChildren: () => import('./miercoles/miercoles.module').then( m => m.MiercolesPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'jueves',
    loadChildren: () => import('./jueves/jueves.module').then( m => m.JuevesPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'viernes',
    loadChildren: () => import('./viernes/viernes.module').then( m => m.ViernesPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'sabado',
    loadChildren: () => import('./sabado/sabado.module').then( m => m.SabadoPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'domingo',
    loadChildren: () => import('./domingo/domingo.module').then( m => m.DomingoPageModule),
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
