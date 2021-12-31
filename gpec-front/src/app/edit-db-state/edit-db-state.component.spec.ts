import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDbStateComponent } from './edit-db-state.component';

describe('EditDbStateComponent', () => {
  let component: EditDbStateComponent;
  let fixture: ComponentFixture<EditDbStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDbStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDbStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
