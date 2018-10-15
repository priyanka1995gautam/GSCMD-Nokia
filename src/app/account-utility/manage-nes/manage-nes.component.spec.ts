import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNEsComponent } from './manage-nes.component';

describe('ManageNEsComponent', () => {
  let component: ManageNEsComponent;
  let fixture: ComponentFixture<ManageNEsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageNEsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageNEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
