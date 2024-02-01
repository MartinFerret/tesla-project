import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { TeslaStepTwoComponent } from "../tesla-step-two/tesla-step-two.component";
import { TeslaStepOneComponent } from "../tesla-step-one/tesla-step-one.component";
import { TeslaStepThreeComponent } from "../tesla-step-three/tesla-step-three.component";
import { SharedService } from "../../services/shared.service";
import { CarSelected } from "../../models/tesla.model";
import { Subscription } from "rxjs";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [
    TeslaStepTwoComponent,
    TeslaStepOneComponent,
    TeslaStepThreeComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss'
})
export class StepsComponent implements OnInit, OnDestroy {
  selectedModel: string = '';
  selectedTesla! : CarSelected;

  subscription : Subscription[] = [];

  private sharedService = inject(SharedService);

  ngOnInit() {
    this.valueInitialization();
  }

  valueInitialization() {
    this.subscription.push(this.sharedService.selectedTeslaObservable$.subscribe((carSelected) => {
      this.selectedModel = carSelected.model?.code.toLowerCase() ?? '';
      this.selectedTesla = carSelected ?? {};
    }));
  }

  ngOnDestroy() {
    this.subscription.forEach((u) => u.unsubscribe());
  }
}
