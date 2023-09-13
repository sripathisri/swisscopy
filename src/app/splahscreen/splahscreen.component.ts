import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splahscreen',
  templateUrl: './splahscreen.component.html',
  styleUrls: ['./splahscreen.component.css']
})
export class SplahscreenComponent {
  constructor(private router:Router){}
  navigate() {
      this.router.navigate(['login']);
   }
}
