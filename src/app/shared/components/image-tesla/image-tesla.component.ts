import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-image-tesla',
  standalone: true,
  imports: [],
  templateUrl: './image-tesla.component.html',
  styleUrl: './image-tesla.component.scss'
})
export class ImageTeslaComponent {
  @Input({ required: true }) model: string | undefined;
  @Input({ required: true }) color: string | undefined;
}
