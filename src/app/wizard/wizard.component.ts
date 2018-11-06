import { Component, OnInit, NgModule } from '@angular/core';
import { MatStepperModule, MatButtonModule, MatIconModule, MatDialogModule } from '@angular/material';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})

@NgModule({
  imports: [MatStepperModule, MatButtonModule, MatIconModule, MatDialogModule,],
  declarations: [WizardComponent],
  entryComponents: [
    WizardComponent
  ],
  exports: [WizardComponent]
})

export class WizardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
