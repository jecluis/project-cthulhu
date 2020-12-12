import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-setup-inventory-item',
  templateUrl: './setup-inventory-item.component.html',
  styleUrls: ['./setup-inventory-item.component.scss']
})
export class SetupInventoryItemComponent implements OnInit {

  @Input() public label: string = "";
  @Output() public onFinished: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  private _is_running: boolean = false;
  private _is_finished: boolean = false;
  private _has_error: boolean = false;
  private _error_msg: string = "";

  private _delay: number = 0;
  private _with_error: boolean = false;

  public constructor() { }

  public ngOnInit(): void {
    this._delay = (Math.floor(Math.random() * 30) * 1000); // millisecs
    this._with_error = (Math.random() > 0.5);

    this._is_running = true;

    interval(this._delay).pipe(take(1)).subscribe({
      next: () => {
        this._is_finished = true;
        this._is_running = false;
        this._has_error = this._with_error;
        if (this._has_error) {
          this._error_msg = "unable to obtain inventory";
        }
        this.onFinished.next(!this._has_error);
      }
    })
  }


  public isInventoryFinishedSuccess(): boolean {
    return this._is_finished && !this._has_error;
  }

  public isInventoryFinishedError(): boolean {
    return this._is_finished && this._has_error;
  }

  public getErrorMessage(): string {
    return this._error_msg;
  }

  public isInventoryRunning(): boolean {
    return this._is_running;
  }
}
