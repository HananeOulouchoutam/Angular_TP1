import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterEstablishmentComponent } from './affecter-establishment.component';

describe('AffecterEstablishmentComponent', () => {
  let component: AffecterEstablishmentComponent;
  let fixture: ComponentFixture<AffecterEstablishmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AffecterEstablishmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffecterEstablishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
