import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCertificationsComponent } from './list-certifications.component';

describe('ListCertificationsComponent', () => {
  let component: ListCertificationsComponent;
  let fixture: ComponentFixture<ListCertificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCertificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
