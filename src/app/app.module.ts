import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SwiftGridComponent } from './swift-grid/swift-grid.component';
import {AgGridModule} from 'ag-grid-angular/main';

export const firebaseConfig = {
    apiKey: 'AIzaSyCnMbqBgTro4VfRjiOg2tFNlRs63TcxdHw',
    authDomain: 'swift-boats.firebaseapp.com',
    databaseURL: 'https://swift-boats.firebaseio.com',
    projectId: 'swift-boats',
    storageBucket: 'swift-boats.appspot.com',
    messagingSenderId: '990014182728'
};


@NgModule({
  declarations: [
    AppComponent,
    SwiftGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
