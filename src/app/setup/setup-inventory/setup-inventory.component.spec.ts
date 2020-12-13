import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupInventoryComponent } from './setup-inventory.component';

describe('SetupInventoryComponent', () => {
  let component: SetupInventoryComponent;
  let fixture: ComponentFixture<SetupInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
