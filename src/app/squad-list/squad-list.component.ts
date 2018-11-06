import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { SquadService } from '../squad.service';

@Component({
  selector: 'app-squad-list',
  templateUrl: './squad-list.component.html',
  styleUrls: ['./squad-list.component.css']
})
export class SquadListComponent implements OnInit {
  squadPlayers: Player[];
  constructor(private playerService: PlayerService,
              private squadService: SquadService
  ) {
    
   }

  ngOnInit() {
  }

  public selectPlayer(player: Player): void {
    this.playerService.selectedPlayer = player;
  }
}
