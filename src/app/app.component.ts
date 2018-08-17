import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare const ga: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
   title = 'app works!';

}
