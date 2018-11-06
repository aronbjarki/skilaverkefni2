import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { TransferListComponent } from './transfer-list/transfer-list.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { SquadListComponent } from './squad-list/squad-list.component';
import { ManagerDetailsComponent } from './manager-details/manager-details.component';
import { AppRoutingModule } from './app-routing.module';
import { PlayerDetailFullComponent } from './player-detail-full/player-detail-full.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { SimpleDialogComponent } from "./simple-dialog/simple-dialog.component";
import { MessageService1 } from "./_shared/message.service";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonModule} from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule} from "@angular/material/dialog";
import { MatRadioModule } from "@angular/material/radio";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatDialog } from "@angular/material/dialog";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogRef } from "@angular/material/dialog";
import { WizardComponent } from './wizard/wizard.component'
import { MessageService } from './message-service'


@NgModule({
  declarations: [
    AppComponent,
    TransferListComponent,
    PlayerDetailsComponent,
    SquadListComponent,
    ManagerDetailsComponent,
    PlayerDetailFullComponent,
    AddPlayerComponent,
    SimpleDialogComponent,
    WizardComponent
  ],
    entryComponents: [
      SimpleDialogComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatRadioModule,
    MatToolbarModule
  ],
  providers: [
    {provide: MAT_DIALOG_DATA, useValue: {}},
    MessageService,
    ManagerDetailsComponent,
    SimpleDialogComponent,
    ManagerDetailsComponent,
    PlayerDetailsComponent,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
