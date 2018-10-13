import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GSConfigurationComponent } from './gs-configuration.component';

describe('GSConfigurationComponent', () => {
  let component: GSConfigurationComponent;
  let fixture: ComponentFixture<GSConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GSConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GSConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
