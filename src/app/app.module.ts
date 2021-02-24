import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipDirective } from './tooltip.directive';
import { CntsPipe } from './CNTS/cnts.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TooltipDirective,
    CntsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
