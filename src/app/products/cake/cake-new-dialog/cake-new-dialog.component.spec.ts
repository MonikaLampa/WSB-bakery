import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeNewDialogComponent } from './cake-new-dialog.component';

describe('CakeNewDialogComponent', () => {
  let component: CakeNewDialogComponent;
  let fixture: ComponentFixture<CakeNewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeNewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeNewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
