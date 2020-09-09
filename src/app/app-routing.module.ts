import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideosComponent } from './videos/videos.component';
import { EstudosComponent } from './estudos/estudos.component';
import { ArtigosComponent } from './artigos/artigos.component';
import { SobreComponent } from './sobre/sobre.component';
import { ParceirosComponent } from './parceiros/parceiros.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'estudos', component: EstudosComponent },
  { path: 'artigos', component: ArtigosComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'parceiros', component: ParceirosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
