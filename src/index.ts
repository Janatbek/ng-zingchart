import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZingChartComponent } from './zingchart.component';
import { ZingChartDirective } from './zingchart.directive';
import { ZingChartPipe } from './zingchart.pipe';
import { ZingChartService } from './zingchart.service';

export * from './zingchart.component';
export * from './zingchart.directive';
export * from './zingchart.pipe';
export * from './zingchart.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ZingChartComponent,
    ZingChartDirective,
    ZingChartPipe
  ],
  exports: [
    ZingChartComponent,
    ZingChartDirective,
    ZingChartPipe
  ]
})
export class ZingChartModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ZingChartModule,
      providers: [ZingChartService]
    };
  }
}
