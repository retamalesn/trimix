import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersonaComponent } from './list-persona.component';

describe('ListPersonaComponent', () => {
  let component: ListPersonaComponent;
  let fixture: ComponentFixture<ListPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
