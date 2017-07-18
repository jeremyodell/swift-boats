import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SwiftGridComponent } from './swift-grid/swift-grid.component';
import { AgGridModule } from 'ag-grid-angular/main';
import { BoatsComponent } from './boats/boats/boats.component';
import { NavComponent } from './core/nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SailorsComponent } from './sailors/sailors.component';
import { AddGuestComponent } from './add-guest/add-guest.component';

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
    SwiftGridComponent,
    BoatsComponent,
    DashboardComponent,
    PageNotFoundComponent,
    SailorsComponent,
    AddGuestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AgGridModule.withComponents([]),
    CoreModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
