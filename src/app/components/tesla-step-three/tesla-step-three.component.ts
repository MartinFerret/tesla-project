import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Subscription } from "rxjs";
import { SharedService } from "../../services/shared.service";
import { FormsModule } from "@angular/forms";
import { ICarSelected } from "../../models/tesla.model";
import { CurrencyPipe, NgIf } from "@angular/common";
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
    ImageTeslaComponent
  ],
  templateUrl: './tesla-step-three.component.html',
  styleUrl: './tesla-step-three.component.scss'
})
export class TeslaStepThreeComponent implements OnInit, OnDestroy {
  selectedModelForDisplayPhoto: string | undefined = '';
  totalPrice: number = 0;

  selectedTesla!: ICarSelected;
  subscription: Subscription[] = [];

  private sharedService = inject(SharedService);

  ngOnInit() {
    this.initializeSelectedCar();
    this.getTotalPrice();
  }

  getTotalPrice() {
    if (this.selectedTesla) {
      this.totalPrice += this.selectedTesla.config?.price ?? 0;
    }
    if (this.selectedTesla.color && this.selectedTesla?.color?.price > 0) {
      this.totalPrice += this.selectedTesla.color.price;
    }
    if (this.selectedTesla.tow) {
      this.totalPrice += 1000;
    }
    if (this.selectedTesla.yoke) {
      this.totalPrice += 1000;
    }
  }

  initializeSelectedCar() {
    this.sharedService.selectedTeslaSubject$.subscribe((selectedCar) => {
      this.selectedTesla = selectedCar;
      this.selectedModelForDisplayPhoto = selectedCar.model?.code.toLowerCase();
    });
  }

  ngOnDestroy() {
    this.subscription.forEach((u) => u.unsubscribe());
  }
}
