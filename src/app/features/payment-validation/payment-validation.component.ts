import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import {
  IConfig,
  NgxMaskDirective,
  NgxMaskPipe,
  provideNgxMask,
} from 'ngx-mask';
import { IPaymentModel, IYear } from 'src/app/models/payment-validation';
import { regexValidator } from '../shared/validators/regex.validator';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@Component({
  selector: 'app-payment-validation',
  templateUrl: './payment-validation.component.html',
  styleUrls: ['./payment-validation.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    CommonModule,
  ],
  providers: [provideNgxMask(maskConfig)],
})
export class PaymentValidationComponent implements OnInit {
  public form!: FormGroup;
  public paymentModel: IPaymentModel = <IPaymentModel>{};
  public customPatterns = { '0': { pattern: new RegExp('\\d') } };

  public years: IYear[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.getYears();
    this.initForm();
  }

  private getYears() {
    let year = new Date().getFullYear();
    for (let i = year; i <= year + 3; i++) {
      const year = <IYear>{};
      year.text = i.toString();
      year.value = i.toString();
      this.years.push(year);
    }
  }

  private initForm() {
    this.form = this.fb.group({
      cardNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(16),
        ],
      ],
      name: ['', [Validators.required, regexValidator(/^[a-zA-Z]/)]],
      month: ['', [Validators.required, regexValidator(/^(0?[1-9]|1[012])$/)]],
      year: ['', Validators.required],
      cvv: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(3)],
      ],
    });
  }

  public submit() {
    if (this.form.valid) {
      console.log(this.paymentModel);
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
}
