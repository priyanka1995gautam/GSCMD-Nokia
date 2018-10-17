import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GSCMComponent } from './gscm.component';

describe('GSCMComponent', () => {
  let component: GSCMComponent;
  let fixture: ComponentFixture<GSCMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GSCMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GSCMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
