import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SquadListComponent }      from './squad-list/squad-list.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { AddPlayerComponent } from './add-player/add-player.component';

const routes: Routes = [
  { path: 'home', redirectTo: ""},
  { path: 'squad', component: SquadListComponent },
  { path: 'addplayer', component: AddPlayerComponent },
  { path: 'detail/:id', component: PlayerDetailsComponent },
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  
})
export class AppRoutingModule {}