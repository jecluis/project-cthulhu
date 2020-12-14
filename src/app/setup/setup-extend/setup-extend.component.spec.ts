import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupExtendComponent } from './setup-extend.component';

describe('SetupExtendComponent', () => {
  let component: SetupExtendComponent;
  let fixture: ComponentFixture<SetupExtendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupExtendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupExtendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
