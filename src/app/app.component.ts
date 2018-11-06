import { Component, OnInit } from '@angular/core';
import { SquadService } from './squad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'skilaverkefni2';
  public displayAddPlayer;
  constructor(private squadService: SquadService) { }

  ngOnInit() {
  }

  addPlayerbtn(): void {
  this.squadService.addPlayerbtn1 = !this.squadService.addPlayerbtn1;
  this.displayAddPlayer = this.squadService.addPlayerbtn1;
  }

}