import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';
import { SquadService } from '../squad.service';

@Component({
  selector: 'app-player-detail-full',
  templateUrl: './player-detail-full.component.html',
  styleUrls: ['./player-detail-full.component.css']
})
export class PlayerDetailFullComponent implements OnInit {
  player: Player;
  constructor(private playerService: PlayerService,
              private squadService: SquadService
        ) { }

  ngOnInit() {
    this.player = this.playerService.selectedPlayer;
  }
};