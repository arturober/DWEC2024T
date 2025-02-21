import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { oneCheckedValidator } from './validators/one-checked.validator';
import { sameValue } from './validators/same-value.validator';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  #fb = inject(NonNullableFormBuilder);
  days = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];

  emailControl = this.#fb.control('', {validators: [Validators.required, Validators.email]});

  myForm = this.#fb.group({
    daysOpen: this.#fb.array(new Array(7).fill(true), {
      validators: [oneCheckedValidator],
    }),
    email: this.emailControl,
    emailConfirm: ['', [sameValue(this.emailControl)]],
  });

  constructor() {
    this.emailControl.valueChanges.pipe(takeUntilDestroyed()).subscribe(v => {
      this.myForm.controls.emailConfirm.updateValueAndValidity();
    });
  }
}
