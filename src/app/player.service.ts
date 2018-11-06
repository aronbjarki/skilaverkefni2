import { Injectable } from '@angular/core';
import { Player } from './player';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerListPS: Player[];
  selectedPlayer: Player;
  public test1: boolean;

  ngOnInit() {
    
  }

  public getPlayers(): Player[] {
    return this.playerListPS;
  }

  public buyPlayer(player: Player): Player {
    let placeInList = this.playerListPS.indexOf(player);
    const playerToAdd = this.playerListPS[placeInList];
    this.playerListPS.splice(placeInList, 1);
    return playerToAdd;
  }

public deletePlayer(player: Player): void {
    let placeInList = this.playerListPS.indexOf(player);
    this.playerListPS.splice(placeInList, 1);
  }
  
}
