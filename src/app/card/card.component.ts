import { Component } from '@angular/core';
import { ButtonPrimaryComponent } from '../shared/button-primary/button-primary.component';
import { ButtonSocialComponent } from '../shared/button-social/button-social.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonPrimaryComponent, ButtonSocialComponent, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  constructor() {}

  onSubmit() {}
}
