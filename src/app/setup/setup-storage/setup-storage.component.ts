import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

interface Strategy {
  label: string;
  disks: {
    control: number;
    storage: number;
    replicas: number;
  }
}


@Component({
  selector: 'app-setup-storage',
  templateUrl: './setup-storage.component.html',
  styleUrls: ['./setup-storage.component.scss']
})
export class SetupStorageComponent implements OnInit {

  public checking_strategies: boolean = false;
  public has_strategies: boolean = false;

  public form_group: FormGroup;


  public constructor(
    private _fb: FormBuilder
  ) {
    this.form_group = this._fb.group({
      disks: new FormControl(""),
      redundancy: new FormControl("")
    });
  }

  public ngOnInit(): void {

    this.checking_strategies = true;
    const delay: number = Math.floor(Math.random() * 10);
    console.log("delay: ", delay);
    interval(delay * 1000).pipe(take(1)).subscribe({
      next: () => {
        this._calcStrategies();
        this.has_strategies = true;
        this.checking_strategies = false;
      }
    })
  }

  private _calcStrategies(): void {
    const free_disks: number = 4;
    const os_disk_exists: boolean = true;

  }

  public getDiskStrategy(): string {
    return this.form_group.get("disks").value;
  }

  public getRAID(): string {
    return this.form_group.get("redundancy").value;
  }

  public getStorageForRAID(): number {
    const raid: string = this.getRAID();
    const strategy: string = this.getDiskStrategy();
    if (strategy === "" || raid === "") {
      return -1;
    }
    const numdisks = (strategy === 'msrp' ? 4 : 3);
    if (raid === "raid0") {
      return numdisks * 2;
    } else {
      return numdisks; // * 2TB / 2 disks
    }
  }

}
