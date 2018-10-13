import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUtilityComponent } from './admin-utility.component';

describe('AdminUtilityComponent', () => {
  let component: AdminUtilityComponent;
  let fixture: ComponentFixture<AdminUtilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUtilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
