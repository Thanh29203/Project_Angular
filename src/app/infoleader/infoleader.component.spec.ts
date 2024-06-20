import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoleaderComponent } from './infoleader.component';

describe('InfoleaderComponent', () => {
  let component: InfoleaderComponent;
  let fixture: ComponentFixture<InfoleaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoleaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoleaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
