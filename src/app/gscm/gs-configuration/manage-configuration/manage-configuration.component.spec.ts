import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageConfigurationComponent } from './manage-configuration.component';

describe('ManageConfigurationComponent', () => {
  let component: ManageConfigurationComponent;
  let fixture: ComponentFixture<ManageConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
