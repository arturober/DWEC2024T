import { Component, contentChild, effect, ElementRef, input, untracked } from '@angular/core';

@Component({
  selector: 'load-button',
  imports: [],
  templateUrl: './load-button.component.html',
  styleUrl: './load-button.component.css'
})
export class LoadButtonComponent {
  colorClass = input('btn-primary');
  loading = input(false);

  icon = contentChild<ElementRef<HTMLElement>>('icon');
  iconClasses = "";

  constructor() {
    effect(() => {
      const loading = this.loading(); // Dependencia
      const icon = this.icon()?.nativeElement; // Dependencia
      untracked(() => {
        if(loading && icon && !icon?.classList.contains("fa-spinner")){
          this.iconClasses = icon.className;
          icon.className = "fa-solid fa-spinner fa-spin";
        } else if(!loading && icon?.classList.contains("fa-spinner")) {
          icon.className = this.iconClasses;
        }
      });
    });
  }
}
