import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-value-bet',
  templateUrl: './value-bet.component.html',
  styleUrls: ['./value-bet.component.css']
})
export class ValueBetComponent{

  constructor(private router: Router) { }

  completions(){
    this.router.navigate(['/first-completion']);
  }
  cards(){
    this.router.navigate(['/card-totals']);
  }
  basketball(){
    this.router.navigate(['/basketball-player-props']);
  }
  football(){
    this.router.navigate(['/football-player-props']);
  }
}