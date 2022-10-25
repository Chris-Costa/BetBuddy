import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-completion',
  templateUrl: './first-completion.component.html',
  styleUrls: ['./first-completion.component.css']
})
export class FirstCompletionComponent {

  constructor(private router: Router) { }

  back(){
    this.router.navigate(['/value-bet'])
  }
}
