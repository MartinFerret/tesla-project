import {Component} from '@angular/core';
import {AsyncPipe, JsonPipe} from '@angular/common';
import { RouterOutlet} from "@angular/router";
import {TabViewModule} from "primeng/tabview";
import {TeslaStepOneComponent} from "./components/tesla-step-one/tesla-step-one.component";
import {StepsComponent} from "./components/steps/steps.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, RouterOutlet, TabViewModule, TeslaStepOneComponent, StepsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

}
