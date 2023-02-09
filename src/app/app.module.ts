import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PaymentValidationComponent } from './features/payment-validation/payment-validation.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    PaymentValidationComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
