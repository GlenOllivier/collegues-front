import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegueRechercheParNomComponent } from './collegue-recherche-par-nom.component';

describe('CollegueRechercheParNomComponent', () => {
  let component: CollegueRechercheParNomComponent;
  let fixture: ComponentFixture<CollegueRechercheParNomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegueRechercheParNomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegueRechercheParNomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
