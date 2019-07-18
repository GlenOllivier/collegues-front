import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCollegueComponent } from './ajouter-collegue.component';

describe('AjouterCollegueComponent', () => {
  let component: AjouterCollegueComponent;
  let fixture: ComponentFixture<AjouterCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
