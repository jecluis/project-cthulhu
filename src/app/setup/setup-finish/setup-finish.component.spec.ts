import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupFinishComponent } from './setup-finish.component';

describe('SetupFinishComponent', () => {
  let component: SetupFinishComponent;
  let fixture: ComponentFixture<SetupFinishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupFinishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
