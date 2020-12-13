import { animate, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    trigger("fadeAnimation", [
      transition(":enter", [
        style({opacity: 0}),
        animate("2.5s", style({opacity: 1})),
        animate("2.5s", style({opacity: 0}))
      ])
    ]),
    trigger("fadeStartButton", [
      transition(":enter", [
        style({opacity: 0}),
        animate("2.5s", style({opacity: 1}))
      ])
    ])
  ]
})
export class WelcomeComponent implements OnInit, AfterViewInit {

  public animation_state: string = "";
  constructor() { }

  public welcome_text: string[] = [
    "Welcome",
    "We are going to set you up with your new storage",
    "Are you ready?"
  ];
  public cur_msg_idx: number = -1;
  // public cur_msg_idx: BehaviorSubject<number> =
    // new BehaviorSubject<number>(-1);

  public ngOnInit(): void { }

  public ngAfterViewInit(): void {
    interval(100).pipe(take(1)).subscribe(() => this.cur_msg_idx = 0);
    interval(5000).pipe(take(this.welcome_text.length))
    .subscribe({
      next: (idx: number) => {
        console.log(`change idx from ${this.cur_msg_idx} to ${idx + 1}`);
        this.cur_msg_idx = idx + 1;
      }
    });
  }

  public showStartButton(): boolean {
    return this.cur_msg_idx === this.welcome_text.length;
  }

}
