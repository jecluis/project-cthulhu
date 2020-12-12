import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupStorageComponent } from './setup-storage.component';

describe('SetupStorageComponent', () => {
  let component: SetupStorageComponent;
  let fixture: ComponentFixture<SetupStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
