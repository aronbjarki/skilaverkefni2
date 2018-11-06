import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';
import { SquadService } from '../squad.service';

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.css']
})
export class TransferListComponent implements OnInit {
  public playerList: Player[];
  constructor(private playerService: PlayerService, private squadService: SquadService) { }

  ngOnInit() {
    this.playerList = this.playerService.getPlayers();
    this.squadService.getPlayersFromWeb().subscribe(x => {
      console.log(x);
    this.playerList = x;
    this.playerService.playerListPS = x;
    
    })
  }

  selectPlayer(player: Player): void {
    console.log('Player is selected', player);
    this.playerService.selectedPlayer = player;
  }

}
