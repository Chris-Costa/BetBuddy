import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basketball-play-props',
  templateUrl: './basketball-play-props.component.html',
  styleUrls: ['./basketball-play-props.component.css']
})
export class BasketballPlayPropsComponent {

  constructor(private router: Router) { }

  back(){
    this.router.navigate(['/value-bet'])
  }
}
