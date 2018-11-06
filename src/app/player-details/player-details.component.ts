import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';
import { SquadService } from '../squad.service';
import { ManagerDetailsComponent } from '../manager-details/manager-details.component'

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  player: Player;
  public triggerMessage: boolean = false;
  public managerNotSubmitted: boolean;

  constructor(private playerService: PlayerService,
              private squadService: SquadService
        ) { }

  ngOnInit() {
    this.player = this.playerService.selectedPlayer;
    
  }
  
  buyPlayer (player: Player): void {
    this.managerNotSubmitted = this.playerService.test1;
    if(this.managerNotSubmitted == false){
    console.log(player, !this.squadService.isPlayerInSquad(player));
    if(!this.squadService.isPlayerInSquad(player)){
      this.squadService.squadList.push(this.playerService.buyPlayer(player));
    }}
    else{
      this.triggerMessage = true;
    }
  }

  sellPlayer(player: Player): void {
    if(this.squadService.isPlayerInSquad(player)){
      this.squadService.sellPlayer(player);
    }
  }

  public deletePlayer(player: Player): void {
    let placeInList = this.playerService.playerListPS.indexOf(player);
    this.playerService.playerListPS.splice(placeInList, 1);
  }
}
