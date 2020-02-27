import { NgModule } from '@angular/core';
import { LoadingComponent } from '../components/loading/loading.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [MaterialModule],
  declarations: [LoadingComponent],
  exports: [LoadingComponent]
})
export class SharedComponentsModule {}
