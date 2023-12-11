import { AtividadeModule } from './../atividade.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAtividadeComponent } from './criar-atividade.component';

describe('CriarAtividadeComponent', () => {
  let component: CriarAtividadeComponent;
  let fixture: ComponentFixture<CriarAtividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule, CommonModule, AtividadeModule ],
      declarations: [ CriarAtividadeComponent ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
