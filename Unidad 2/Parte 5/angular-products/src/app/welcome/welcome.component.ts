import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'welcome',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent { }
