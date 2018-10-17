import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareConfigurationComponent } from './compare-configuration.component';

describe('CompareConfigurationComponent', () => {
  let component: CompareConfigurationComponent;
  let fixture: ComponentFixture<CompareConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
