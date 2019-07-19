import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCollegueComponent } from './details-collegue.component';

describe('DetailsCollegueComponent', () => {
  let component: DetailsCollegueComponent;
  let fixture: ComponentFixture<DetailsCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
