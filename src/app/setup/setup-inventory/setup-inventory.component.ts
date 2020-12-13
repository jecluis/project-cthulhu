import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup-inventory',
  templateUrl: './setup-inventory.component.html',
  styleUrls: ['./setup-inventory.component.scss']
})
export class SetupInventoryComponent implements OnInit {

  private _obtaining_inventory: boolean = false;
  private _finished_inventory: boolean = false;
  private _has_error_inventory: boolean = false;

  public inventory_items: string[] = [
    'disks', 'network', 'operating system', 'software', 'host'
  ];

  private _obtained_items: string[] = [];


  public constructor() { }

  public ngOnInit(): void {
    this._obtaining_inventory = true;
    this._finished_inventory = false;
  }

  public inventoryFinished(what: string, result: boolean): void {
    if (this._obtained_items.includes(what)) {
      return; // duplicate
    }
    console.log("what: ", what, " result: ", result);
    this._obtained_items.push(what);
    if (this._obtained_items.length === this.inventory_items.length) {
      this._finished_inventory = true;
      this._obtaining_inventory = false;
    }
    this._has_error_inventory = (this._has_error_inventory && result);
  }

  public isObtainingInventory(): boolean {
    return this._obtaining_inventory;
  }

  public hasFinishedInventory(): boolean {
    return this._finished_inventory;
  }

  public hasSuccessInventory(): boolean {
    return this.hasFinishedInventory() && !this._has_error_inventory;
  }

  public hasErrorInventory(): boolean {
    return this.hasFinishedInventory() && this._has_error_inventory;
  }
}
