import { Component } from '@angular/core';
import { ButtonPrimaryComponent } from '../shared/button-primary/button-primary.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonPrimaryComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {}
