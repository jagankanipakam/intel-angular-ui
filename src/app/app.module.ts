import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { PokerCardsComponent } from './components/poker-cards/poker-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
@NgModule({
  declarations: [AppComponent, PokerCardsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgProgressModule.withConfig({
      spinnerPosition: 'right',
      color: '#e53935',
    }),
    NgProgressHttpModule,
    BrowserAnimationsModule,
    AngularMultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
