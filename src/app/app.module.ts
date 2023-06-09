import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustpPipe } from './pipes/custp.pipe';
import { StrpPipe } from './pipes/strp.pipe';
import { AsyncComponent } from './async/async.component';

@NgModule({
  declarations: [
    AppComponent,
    CustpPipe,
    StrpPipe,
    AsyncComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
