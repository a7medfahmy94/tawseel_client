import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AgmCoreModule } from 'angular2-google-maps/core';

export const firebaseConfig = {
  apiKey: 'AIzaSyDn_NMUsa9sVsYm19ApwK2U8juSC1PYLfM',
  authDomain: 'tawseel-37034.firebaseapp.com',
  databaseURL: 'https://tawseel-37034.firebaseio.com',
  storageBucket: 'tawseel-37034.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBcCEdwqJJRmFl8E3__78AoyPMGSVB_M80'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
