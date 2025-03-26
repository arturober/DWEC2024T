import { Component, OnInit, signal } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { BatteryInfo, Device, DeviceInfo } from '@capacitor/device';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
  standalone: true,
  imports: [
    JsonPipe,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
  ],
})
export class DevicePage implements OnInit {
  info = signal<DeviceInfo | null>(null);
  battery = signal<BatteryInfo | null>(null);

  async ngOnInit() {
    this.info.set(await Device.getInfo());
    this.battery.set(await Device.getBatteryInfo());
  }
}
