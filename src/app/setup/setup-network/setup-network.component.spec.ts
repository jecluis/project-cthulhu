import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupNetworkComponent } from './setup-network.component';

describe('SetupNetworkComponent', () => {
  let component: SetupNetworkComponent;
  let fixture: ComponentFixture<SetupNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
