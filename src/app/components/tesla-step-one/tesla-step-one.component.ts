import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { ICarSelected, IColor, IModel } from "../../models/tesla.model";
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

  subscription: Subscription[] = [];
  colors: IColor[] = [];
  models: IModel[] = [];
  selectedTesla: ICarSelected = {
    model: undefined,
    color: undefined,
  };

  selectedModel: string = '';
  selectedColor: string = '';
  selectedModelForDisplayPhoto: string = '';

  selectForm: FormGroup = this.fb.group({
    model: ['', [Validators.required]],
    color: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loadModels();
  }

  loadModels() {
    this.subscription.push(this.activatedRoute.data.subscribe(data => {
      this.models = data['models'];
    }));
  }

  onModelChange(model: string) {
    this.selectedModel = model;
    this.colors = this.getColorsForSelectedModel();
    this.selectedTesla.model = this.getSelectedModelObject(this.selectedModel);
    this.sharedService.setSelectedTesla(this.selectedTesla);
    this.selectedModelForDisplayPhoto = model.toLowerCase();
  }

  getSelectedModelObject(modelCode: string): IModel | undefined {
    return this.models.find(model => model.code === modelCode);
  }

  onColorChange(color: string) {
    this.selectedColor = color;
    const selectedModelWithColor = this.models.find((model) => {
      return model.code === this.selectedModel && model.colors.some(c => c.code === color);
    });

    if (selectedModelWithColor) {
      this.selectedTesla.color = selectedModelWithColor.colors.find(c => c.code === color);
      this.sharedService.setSelectedTesla(this.selectedTesla);
    }
  }

  getColorsForSelectedModel(): IColor[] {
    if (this.selectedModel) {
      const selectedModel = this.models.find(model => model.code === this.selectedModel);
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
