import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransitionDirective } from './libs/directivas/transition.directive';
import { FirstComponent } from './components/first/first.component';

@NgModule({
  declarations: [
    AppComponent,
    TransitionDirective,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
