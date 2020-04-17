import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieDelDialogComponent } from './cookie-del-dialog.component';

describe('CookieDelDialogComponent', () => {
  let component: CookieDelDialogComponent;
  let fixture: ComponentFixture<CookieDelDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookieDelDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieDelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
