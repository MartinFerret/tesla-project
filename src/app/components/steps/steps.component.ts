import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {TabMenuModule} from "primeng/tabmenu";
import {TabViewModule} from "primeng/tabview";
import {TeslaStepTwoComponent} from "../tesla-step-two/tesla-step-two.component";
import {TeslaStepOneComponent} from "../tesla-step-one/tesla-step-one.component";
import {TeslaStepThreeComponent} from "../tesla-step-three/tesla-step-three.component";
import {SharedService} from "../../services/shared.service";
import {ICarSelected} from "../../models/tesla.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [
    TabMenuModule,
    TabViewModule,
    TeslaStepTwoComponent,
    TeslaStepOneComponent,
    TeslaStepThreeComponent
  ],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss'
})
export class StepsComponent implements OnInit, OnDestroy {
  selectedModel: string = '';
  selectedColor: string = '';
  selectedObject! : ICarSelected;

  subscription : Subscription[] = [];

  private sharedService = inject(SharedService);

  ngOnInit() {
    this.valueInitialization();
  }

  valueInitialization() {
    this.subscription.push(this.sharedService.selectedTeslaSubject$.subscribe((model) => {
      this.selectedModel = model.model?.code.toLowerCase() ?? '';
    }));

    this.subscription.push(this.sharedService.selectedTeslaSubject$.subscribe((colorCode) => {
      this.selectedColor = colorCode.color?.code ?? '';
    }));

    this.subscription.push(this.sharedService.selectedTeslaSubject$.subscribe((object) => {
      this.selectedObject = object ?? {};
    }));
  }

  ngOnDestroy() {
    this.subscription.forEach((u) => u.unsubscribe());
  }
}
