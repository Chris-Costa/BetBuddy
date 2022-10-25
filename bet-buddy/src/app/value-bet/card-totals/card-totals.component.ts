import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-totals',
  templateUrl: './card-totals.component.html',
  styleUrls: ['./card-totals.component.css']
})
export class CardTotalsComponent {

  constructor(private router: Router) { }

  back(){
    this.router.navigate(['/value-bet'])
  }
}
