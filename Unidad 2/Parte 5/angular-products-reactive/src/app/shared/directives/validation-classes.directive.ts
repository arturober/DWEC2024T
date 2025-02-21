import { Directive, OnInit, inject, Injector, input, Signal, signal, computed, untracked } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { NgModel, NgControl } from "@angular/forms";
import { EMPTY } from "rxjs";

@Directive({
  selector: '[validationClasses][ngModel],[validationClasses][formControl],[validationClasses][formControlName])',
  standalone: true,
  host: {
    '[class]': 'inputClass()',
    '(blur)': 'touched.set(true)',
  },
})
export class ValidationClassesDirective implements OnInit {
  #ngModel = inject(NgModel, { optional: true }); // Formulario de plantilla
  #ngControl = inject(NgControl, { optional: true }); // Formulario reactivo
  #injector = inject(Injector);
  validationClasses = input<{ valid: string; invalid: string }>();
  valueChanges!: Signal<string>;
  touched = signal(false);

  ngOnInit(): void {
    // La directiva NgControl no está lista hasta este momento del ciclo de vida
    this.valueChanges = toSignal(
      this.#ngModel?.valueChanges ?? this.#ngControl?.valueChanges ?? EMPTY,
      { injector: this.#injector }
    );
  }

  inputClass = computed(() => {
    const touched = this.touched(); // dependencia
    const validationClasses = this.validationClasses(); // dependencia
    this.valueChanges(); // dependencia

    return untracked(() => {
      if (touched) {
        return this.#ngModel?.invalid || this.#ngControl?.invalid
          ? validationClasses?.invalid
          : validationClasses?.valid;
      }
      return '';
    });
  });
}
