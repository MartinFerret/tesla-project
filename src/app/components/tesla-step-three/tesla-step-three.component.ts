import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit, signal
} from '@angular/core';
import { Subscription } from "rxjs";
import { SharedService } from "../../services/shared.service";
import { FormsModule } from "@angular/forms";
import { CarSelected } from "../../models/tesla.model";
import {AsyncPipe, CurrencyPipe, NgIf, UpperCasePipe} from "@angular/common";
import { DividerModule } from "primeng/divider";
import {ImageTeslaComponent} from "../../shared/components/image-tesla/image-tesla.component";

@Component({
  selector: 'app-tesla-step-three',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    CurrencyPipe,
    NgIf,
    DividerModule,
    ImageTeslaComponent,
    UpperCasePipe,
    AsyncPipe
  ],
  templateUrl: './tesla-step-three.component.html',
  styleUrl: './tesla-step-three.component.scss'
})
export class TeslaStepThreeComponent implements OnInit, OnDestroy {
  selectedModelForDisplayPhoto = signal<string | undefined>('');
  totalPrice = signal(0);

  selectedTesla!: CarSelected;
  subscription: Subscription[] = [];

  private sharedService = inject(SharedService);

  ngOnInit() {
    this.initializeSelectedCar();
    this.getTotalPrice();
  }

  getTotalPrice() {
    if (this.selectedTesla.config) {
      this.totalPrice.update((oldValue => oldValue + this.selectedTesla.config!.price!));
    }
    if (this.selectedTesla.color && this.selectedTesla?.color?.price > 0) {
      this.totalPrice.update((oldValue) => oldValue + this.selectedTesla.color!.price);
    }
    if (this.selectedTesla.tow) {
      this.totalPrice.update((oldValue) => oldValue + 1000);
    }
    if (this.selectedTesla.yoke) {
      this.totalPrice.update((oldValue) => oldValue + 1000);
    }
  }

  initializeSelectedCar() {
    this.subscription.push(this.sharedService.selectedTeslaObservable$.subscribe((selectedCar) => {
      this.selectedTesla = selectedCar;
      this.selectedModelForDisplayPhoto.set(selectedCar.model?.code.toLowerCase());
    }));
  }

  ngOnDestroy() {
    this.subscription.forEach((u) => u.unsubscribe());
  }
}
