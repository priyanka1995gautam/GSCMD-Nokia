import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNEInstancesComponent } from './manage-ne-instances.component';

describe('ManageNEInstancesComponent', () => {
  let component: ManageNEInstancesComponent;
  let fixture: ComponentFixture<ManageNEInstancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageNEInstancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageNEInstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
