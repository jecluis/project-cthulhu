import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-setup-dependencies',
  templateUrl: './setup-dependencies.component.html',
  styleUrls: ['./setup-dependencies.component.scss']
})
export class SetupDependenciesComponent implements OnInit {

  public num_host_requirements: number = 1337;
  public num_system_requirements: number = 42;
  public cur_host_requirements: number = 0;
  public cur_system_requirements: number = 0;

  public constructor() { }

  public ngOnInit(): void {
    const delay = Math.floor(Math.random() * 5);
    interval(delay * 1000).subscribe( () => {
      if (this.hasFinished()) {
        return;
      }
      if (!this.finishedHostRequirements()) {
        const num_deps = Math.floor(Math.random() * 200);
        this.cur_host_requirements = Math.min(
          this.cur_host_requirements + num_deps,
          this.num_host_requirements
        );
      } else {
        const num_deps = Math.floor(Math.random() * 10);
        this.cur_system_requirements = Math.min(
          this.cur_system_requirements + num_deps,
          this.num_system_requirements
        );
      }
    });
  }

  public finishedHostRequirements(): boolean {
    return this.num_host_requirements === this.cur_host_requirements;
  }

  public finishedSystemRequirements(): boolean {
    return this.num_system_requirements === this.cur_system_requirements;
  }

  public hasFinished(): boolean {
    return this.finishedHostRequirements() && this.finishedSystemRequirements();
  }

  private _getPercent(a: number, b: number): number {
    return Math.floor((a / b) * 100);
  }

  public hostRequirementsPercent(): number {
    return this._getPercent(
      this.cur_host_requirements, this.num_host_requirements
    );
  }

  public systemRequirementsPercent(): number {
    return this._getPercent(
      this.cur_system_requirements, this.num_system_requirements
    );
  }


}
