import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeNewFormComponent } from './cake-new-form.component';

describe('CakeNewFormComponent', () => {
  let component: CakeNewFormComponent;
  let fixture: ComponentFixture<CakeNewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeNewFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
