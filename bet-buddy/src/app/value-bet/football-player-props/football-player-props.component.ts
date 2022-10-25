import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-football-player-props',
  templateUrl: './football-player-props.component.html',
  styleUrls: ['./football-player-props.component.css']
})
export class FootballPlayerPropsComponent  {

  constructor(private router: Router) { }

  back(){
    this.router.navigate(['/value-bet'])
  }

}
