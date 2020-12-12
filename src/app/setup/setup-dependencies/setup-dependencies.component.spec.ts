import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupDependenciesComponent } from './setup-dependencies.component';

describe('SetupDependenciesComponent', () => {
  let component: SetupDependenciesComponent;
  let fixture: ComponentFixture<SetupDependenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupDependenciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupDependenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
