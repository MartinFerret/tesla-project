import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit, signal,
} from '@angular/core';
import { Subscription} from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { CarSelected } from "../../models/tesla.model";
import { SharedService } from "../../services/shared.service";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { DropdownModule } from "primeng/dropdown";
import { CurrencyPipe } from "@angular/common";
import { CarConfig, Config } from "../../models/config.model";
import {ImageTeslaComponent} from "../../shared/components/image-tesla/image-tesla.component";

@Component({
  selector: 'app-tesla-step-two',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    DropdownModule,
    CurrencyPipe,
    ImageTeslaComponent
  ],
  templateUrl: './tesla-step-two.component.html',
  styleUrl: './tesla-step-two.component.scss'
})
export class TeslaStepTwoComponent implements OnInit, OnDestroy {
  subscription: Subscription[] = [];
  config!: CarConfig;
  selectedTesla = signal<CarSelected | undefined>(undefined);

  activatedRoute = inject(ActivatedRoute);
  fb = inject(FormBuilder);
  private sharedService = inject(SharedService);

  selectedModelForDisplayPhoto =  signal<string | undefined>('');
  range = signal<number>(0);
  speed= signal<number>(0);
  price= signal<number>(0);
  yokeActive = signal(false);
  towActive = signal(false);

  selectForm: FormGroup = this.fb.group({
    config: [undefined, [Validators.required]],
    tHitch: [false],
    yoke: [false],
  });

  ngOnInit() {
    this.activatedRoute.data.subscribe((value) => this.config = value['configs']);
    this.loadSelectedCar();
    this.checkInputValues();
    this.checkOptionsDisplayed();
  }

  checkInputValues() {
    const tHitchControl = this.selectForm.get('tHitch');
    const yokeControl = this.selectForm.get('yoke');

    if (tHitchControl && yokeControl) {
      this.subscription.push(
        tHitchControl.valueChanges.subscribe((value) => {
          this.towActive.set(value);
          this.updateSelectedCar();
        })
      );

      this.subscription.push(
        yokeControl.valueChanges.subscribe((value) => {
          this.yokeActive.set(value);
          this.updateSelectedCar();
        })
      );
    }
  }

  checkOptionsDisplayed () {
    if (this.selectedTesla()?.yoke) {
      this.yokeActive.set(true);
    }
    if (this.selectedTesla()?.tow) {
      this.towActive.set(true);
    }
    this.selectForm.patchValue({
      tHitch: this.towActive(),
      yoke: this.yokeActive(),
    });
    this.selectForm.updateValueAndValidity();
  }

  loadSelectedCar() {
    this.sharedService.getSelectedTesla().subscribe((selectedTesla) => {
      this.selectedTesla.set(selectedTesla);
      this.selectedModelForDisplayPhoto.set(selectedTesla.model?.code.toLowerCase());
    });
  }

  onConfigChange(config: Config) {
    this.range.set(config.range);
    this.price.set(config.price);
    this.speed.set(config.speed);
    this.updateSelectedCar();
  }

  updateSelectedCar() {
    const selectedCar: CarSelected = {
      model: this.selectedTesla()?.model ?? undefined,
      color: this.selectedTesla()?.color ?? undefined,
      config: this.selectForm.get('config')?.value,
      tow: this.selectForm.get('tHitch')?.value,
      yoke: this.selectForm.get('yoke')?.value
    };
    this.sharedService.setSelectedTesla(selectedCar);
  }

  ngOnDestroy() {
    this.subscription.forEach((u) => u.unsubscribe());
  }
}
