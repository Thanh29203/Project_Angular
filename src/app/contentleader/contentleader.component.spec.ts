import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentleaderComponent } from './ContentleaderComponent';

describe('ContentleaderComponent', () => {
  let component: ContentleaderComponent;
  let fixture: ComponentFixture<ContentleaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentleaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentleaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
