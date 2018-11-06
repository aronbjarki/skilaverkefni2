import { Component, OnInit } from '@angular/core';
import { SquadService } from '../squad.service';
import { PlayerDetailsComponent } from '../player-details/player-details.component';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.css']
})
export class ManagerDetailsComponent implements OnInit {
  public isManagerInfoSubmitted: boolean = true;
  constructor(private squadService: SquadService, public playerService: PlayerService) { }

  ngOnInit() {
  }

  updateManagerInfo(): void {
    this.isManagerInfoSubmitted = false;
    this.playerService.test1 = this.isManagerInfoSubmitted;
  }

}
