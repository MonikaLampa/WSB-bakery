import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeDelDialogComponent } from './cake-del-dialog.component';

describe('CakeDelDialogComponent', () => {
  let component: CakeDelDialogComponent;
  let fixture: ComponentFixture<CakeDelDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeDelDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeDelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
