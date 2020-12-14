import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-setup-extend',
  templateUrl: './setup-extend.component.html',
  styleUrls: ['./setup-extend.component.scss'],
  animations: [
    trigger("fadeInOutAnimation", [
      state("in", style({opacity: 1})),
      state("out", style({opacity: 0})),
      transition("* => in", [
        animate("1s")
      ]),
      transition("* => out", [
        animate("1s")
      ])
    ])
  ]
})
export class SetupExtendComponent implements OnInit {

  public search_animation_state = "in";

  private _found_network_deployment: boolean = false;

  public constructor() { }

  public ngOnInit(): void {
    interval(1000).subscribe( () => {
      this.search_animation_state = (
        this.search_animation_state === "in" ? "out" : "in"
      );
    });

    const delay: number = Math.floor(Math.random() * 15);
    interval(delay * 1000).pipe(take(1)).subscribe({
      next: () => {
        this._found_network_deployment = true;
      }
    });
  }

  public foundNetworkDeployment(): boolean {
    return this._found_network_deployment;
  }

}
