import { Component, linkedSignal, model } from '@angular/core';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarFull } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css',
  imports: [FaIconComponent]
})
export class StarRatingComponent {
  rating = model.required<number>();
  auxRating = linkedSignal(() => this.rating());

  starEmpty = faStarEmpty;
  starFull = faStarFull;

}
