import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupInventoryItemComponent } from './setup-inventory-item.component';

describe('SetupInventoryItemComponent', () => {
  let component: SetupInventoryItemComponent;
  let fixture: ComponentFixture<SetupInventoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupInventoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupInventoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
