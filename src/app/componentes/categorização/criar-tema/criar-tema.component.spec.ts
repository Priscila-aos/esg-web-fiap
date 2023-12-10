import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarTemaComponent } from './criar-tema.component';

describe('CriarTemaComponent', () => {
  let component: CriarTemaComponent;
  let fixture: ComponentFixture<CriarTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarTemaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
