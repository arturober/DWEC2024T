import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.page.html',
  styleUrls: ['./virtual-scroll.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class VirtualScrollPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
