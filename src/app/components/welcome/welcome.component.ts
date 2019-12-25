import { Component, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  public fullName: string;

  constructor(private router: Router){}

  onSubmit() {
    this.router.navigate(['/search'], { state: { example: this.fullName } });
}

}
