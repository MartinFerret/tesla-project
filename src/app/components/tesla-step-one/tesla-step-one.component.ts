import {ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { CarSelected, Color, Model } from "../../models/tesla.model";
import { DropdownModule } from "primeng/dropdown";
import { CommonModule } from "@angular/common";
import { SharedService } from "../../services/shared.service";

@Component({
  selector: 'app-tesla-step-one',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './tesla-step-one.component.html',
  styleUrl: './tesla-step-one.component.scss'
})
export class TeslaStepOneComponent implements OnInit, OnDestroy {
  activatedRoute = inject(ActivatedRoute);
  sharedService = inject(SharedService);
  fb = inject(FormBuilder);

  subscription: Subscription[] = [];
  colors = signal<Color[]>([]);
  models = signal<Model[]>([]);
  selectedTesla = signal<CarSelected>({
    model: undefined,
    color: undefined,
  });

  selectedModel = signal('');
  selectedColor = signal('');
  selectedModelForDisplayPhoto = signal<string>('');

  selectForm: FormGroup = this.fb.group({
    model: ['', [Validators.required]],
    color: ['', [Validators.required]]
  });

  ngOnInit() {
    this.loadModels();
  }

  loadModels() {
    this.subscription.push(this.activatedRoute.data.subscribe(data => {
      this.models.set(data['models']);
    }));
  }

  onModelChange(model: string) {
    this.selectedModel.set(model);
    this.colors.set(this.getColorsForSelectedModel());
    this.selectedTesla().model = this.getSelectedModelObject(this.selectedModel());
    this.sharedService.setSelectedTesla(this.selectedTesla());
    this.selectedModelForDisplayPhoto.set(model.toLowerCase());
  }

  getSelectedModelObject(modelCode: string): Model | undefined {
    return this.models().find(model => model.code === modelCode);
  }

  onColorChange(color: string) {
    this.selectedColor.set(color);
    const selectedModelWithColor = this.models().find((model) => {
      return model.code === this.selectedModel() && model.colors.some(c => c.code === color);
    });

    if (selectedModelWithColor) {
      this.selectedTesla().color = selectedModelWithColor.colors.find(c => c.code === color);
      this.sharedService.setSelectedTesla(this.selectedTesla());
    }
  }

  getColorsForSelectedModel(): Color[] {
    if (this.selectedModel) {
      const selectedModel = this.models().find(model => model.code === this.selectedModel());
      if (selectedModel && selectedModel.colors) {
        return selectedModel.colors;
      }
    }
    return [];
  }

  ngOnDestroy() {
    this.subscription.forEach((u) => u.unsubscribe());
  }
}
