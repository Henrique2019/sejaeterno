import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from '../environments/environment';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArtigosComponent } from './artigos/artigos.component';
import { VideosComponent } from './videos/videos.component';
import { EstudosComponent } from './estudos/estudos.component';
import { ParceirosComponent } from './parceiros/parceiros.component';
import { SobreComponent } from './sobre/sobre.component';
import { CrudComponent } from './componentes/crud/crud.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtigosComponent,
    VideosComponent,
    EstudosComponent,
    ParceirosComponent,
    SobreComponent,
    CrudComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule  { }

