import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';

import { DeviceDetectorModule } from 'ngx-device-detector';
import { ContainerHttpComponent } from './container-http/container-http.component';
import { PresenterHttpComponent } from './presenter-http/presenter-http.component';
import { ContainerWsComponent } from './container-ws/container-ws.component';
import { PresenterWsComponent } from './presenter-ws/presenter-ws.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerHttpComponent,
    PresenterHttpComponent,
    ContainerWsComponent,
    PresenterWsComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
