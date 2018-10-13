import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountUtilityComponent } from './account-utility.component';

describe('AccountUtilityComponent', () => {
  let component: AccountUtilityComponent;
  let fixture: ComponentFixture<AccountUtilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountUtilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
