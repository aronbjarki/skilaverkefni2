import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';
import { SquadService } from '../squad.service';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  public playerAdded = true;
  @Input() player: Player;

  constructor( 
    private playerService: PlayerService,
    private squadService: SquadService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.getPlayer();
  }

addPlayer(player: Player): void {
  
    console.log(player, !this.squadService.isPlayerInSquad(player));

    this.squadService.squadList.push(this.playerService.buyPlayer(player));
    
    
    this.squadService.addPlayerbtn1 = !this.squadService.addPlayerbtn1;
    this.playerAdded = this.squadService.addPlayerbtn1;  
  }

  getPlayer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.squadService.getPlayer(id)
      .subscribe(player => this.player = player);
  }
}

