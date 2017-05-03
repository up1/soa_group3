import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagermanagmentComponent } from './managermanagment.component';

describe('ManagermanagmentComponent', () => {
  let component: ManagermanagmentComponent;
  let fixture: ComponentFixture<ManagermanagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagermanagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagermanagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
