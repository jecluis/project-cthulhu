import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-setup-finish',
  templateUrl: './setup-finish.component.html',
  styleUrls: ['./setup-finish.component.scss'],
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
export class SetupFinishComponent implements OnInit {

  public animation_state: string = "";
  constructor() { }

  public welcome_text: string[] = [
    "We are now finishing setting up",
    "Please wait",
    "Just a little bit longer...",
    "Ready?",
    "Welcome to your new storage!"
  ];
  public cur_msg_idx: number = -1;

  public ngOnInit(): void {
    this.cur_msg_idx = 0;
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
