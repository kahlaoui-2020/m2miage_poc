import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSkillsComponent } from './dialog-skills.component';

describe('DialogSkillsComponent', () => {
  let component: DialogSkillsComponent;
  let fixture: ComponentFixture<DialogSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
