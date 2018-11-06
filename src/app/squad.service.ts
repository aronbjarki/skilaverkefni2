import { Injectable } from '@angular/core';
import { Player } from './player';
import { PlayerService } from './player.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { playerList } from './mock-player-list';
import { MessageService } from './message-service';



@Injectable({
  providedIn: 'root'
})
export class SquadService {
  public addPlayerbtn1: boolean = false;
  public values: any;


    manager: string;
    teamName: string;
    squadList: Player[];
    apiUrl = 'https://ntv-fm.azurewebsites.net/api';

    

  constructor(private http: HttpClient, private playerService: PlayerService, private messageService: MessageService ) {
    this.squadList = [];
   }

  isPlayerInSquad(player: Player): boolean {
    if(this.squadList.indexOf(player) < 0){
      return false;
    }
    return true; 
  }

  sellPlayer(player: Player): void {
    const playerInList = this.squadList.indexOf(player);
    this.squadList.splice(playerInList, 1);
    this.playerService.playerListPS.push(player);
  }

  addPlayer(player: Player): void {
    this.playerService.playerListPS.push(player);
  }

  getPlayersFromWeb(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiUrl+'/player/fms');
  }

  getPlayer(id: number): Observable<Player> {
    // Todo: send the message _after_ fetching player
    this.messageService.add(`PlayerService: fetched player id=${id}`);
    return of(playerList.find(player => player.id === id));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

