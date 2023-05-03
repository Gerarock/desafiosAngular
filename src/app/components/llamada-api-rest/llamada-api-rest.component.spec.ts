import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlamadaApiRestComponent } from './llamada-api-rest.component';

describe('LlamadaApiRestComponent', () => {
  let component: LlamadaApiRestComponent;
  let fixture: ComponentFixture<LlamadaApiRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlamadaApiRestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlamadaApiRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
