import {
  Component,
  computed,
  effect,
  inject,
  input,
  numberAttribute,
  viewChild,
} from '@angular/core';
import { rxResource, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  AlertController,
  IonAvatar,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonRefresher,
  IonRefresherContent,
  IonToolbar,
  Platform } from '@ionic/angular/standalone';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'product-comments',
  templateUrl: './product-comments.page.html',
  styleUrls: ['./product-comments.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonContent,
    IonRefresher,
    IonRefresherContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonList,
    IonItem,
    IonAvatar,
    IonImg,
    IonLabel,
  ],
})
export class ProductCommentsPage {
  #alertCtrl = inject(AlertController);
  #productsService = inject(ProductsService);
  #platform = inject(Platform);

  ionRefresher = viewChild.required(IonRefresher);

  id = input.required({ transform: numberAttribute });
  commentsResource = rxResource({
    request: () => this.id(),
    loader: ({ request: id }) => this.#productsService.getComments(id),
  });
  comments = computed(() => this.commentsResource.value() ?? []);

  constructor() {
    this.#platform.resume.pipe(takeUntilDestroyed()).subscribe(
      () => this.commentsResource.reload() // Recargamos comentarios cuando la aplicación se reactiva (resume)
    );

    effect(() => {
      if (!this.commentsResource.isLoading()) {
        this.ionRefresher().complete(); // Si estaba la animación de carga, una vez tenemos comentarios cargados, se cancela
      }
    });
  }

  loadComments() {
    this.commentsResource.reload();
  }

  async addComment() {
    const alert = await this.#alertCtrl.create({
      header: 'New commment',
      inputs: [
        {
          name: 'comment',
          type: 'text',
          placeholder: 'Enter your comment',
        },
      ],
      buttons: [
        {
          text: 'Add',
          role: 'ok',
        },
        {
          role: 'cancel',
          text: 'Cancel',
        },
      ],
    });

    await alert.present();
    const result = await alert.onDidDismiss();

    if (result.role === 'ok') {
      this.#productsService
        .addComment(this.id(), result.data.values.comment)
        .subscribe((comment) =>
          this.commentsResource.update((comments) => [...comments!, comment])
        );
    }
  }
}
