import { Component } from '@angular/core';
import { ButtonPrimaryComponent } from '../shared/button-primary/button-primary.component';
import { ButtonSocialComponent } from '../shared/button-social/button-social.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonPrimaryComponent, ButtonSocialComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {}
