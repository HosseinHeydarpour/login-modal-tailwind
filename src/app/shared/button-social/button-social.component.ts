import { Component } from '@angular/core';

@Component({
  selector: 'button[appButtonSocial]',
  standalone: true,
  imports: [],
  templateUrl: './button-social.component.html',
  styleUrl: './button-social.component.scss',
  host: {
    class: 'btn-social',
  },
})
export class ButtonSocialComponent {}
