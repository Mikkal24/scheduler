import { NgModule } from '@angular/core';
import { AdvancedTaskFormDialogueComponent } from './advanced-task-form-dialogue.component';
import { AdvancedTaskFormModule } from 'src/app/components/advanced-task-form/advanced-task-form.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AdvancedTaskFormDialogueComponent],
  imports: [
    AdvancedTaskFormModule,
    MatDialogModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
  ],
  entryComponents: [AdvancedTaskFormDialogueComponent],
  exports: [AdvancedTaskFormDialogueComponent],
})
export class AdvancedTaskFormDialogueModule {}
