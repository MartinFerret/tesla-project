import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-image-tesla',
  standalone: true,
  imports: [],
  templateUrl: './image-tesla.component.html',
  styleUrl: './image-tesla.component.scss'
})
export class ImageTeslaComponent {
  @Input() model: string | undefined;
  @Input() color: string | undefined;
}
