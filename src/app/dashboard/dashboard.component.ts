import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  private _is_menu_expanded: boolean = false;

  public isHandset$: Observable<boolean> =
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Small,
      Breakpoints.Medium
  ])
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {}

  public isExpanded(): boolean {
    return this._is_menu_expanded;
  }

  public toggleMenu(): void {
    this._is_menu_expanded = !this._is_menu_expanded;
  }
}
