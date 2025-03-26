import { JsonPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import {
  Barcode,
  BarcodeFormat,
  BarcodeScanner,
} from '@capacitor-mlkit/barcode-scanning';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.page.html',
  styleUrls: ['./barcode-scanner.page.scss'],
  standalone: true,
  imports: [
    JsonPipe,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonTitle,
    IonToolbar,
  ],
})
export class BarcodeScannerPage {
  data = signal<Barcode | null>(null);
  installed = signal(false);

  constructor() {
    this.isBarcodeScannerAvailable();
  }

  async isBarcodeScannerAvailable() {
    const resp = await BarcodeScanner.isGoogleBarcodeScannerModuleAvailable();
    if(!resp.available) {
      await BarcodeScanner.installGoogleBarcodeScannerModule();
    }
    this.installed.set(true);
  }

  async scan() {
    const { barcodes } = await BarcodeScanner.scan({
      formats: [
        BarcodeFormat.QrCode,
        BarcodeFormat.Codabar,
        BarcodeFormat.Code39,
        BarcodeFormat.Code93,
        BarcodeFormat.Code128,
        BarcodeFormat.Ean8,
        BarcodeFormat.Ean13,
        BarcodeFormat.UpcA,
        BarcodeFormat.UpcE,
        BarcodeFormat.Itf,
      ],
    });
    this.data.set(barcodes[0]);
  }
}
