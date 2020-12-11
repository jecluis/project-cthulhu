import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeInOutAnimation, slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation,
    fadeInOutAnimation
  ]
})
export class AppComponent {
  title = 'cthulhu';


  public prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData &&
           outlet.activatedRouteData.animation;
  }
}
