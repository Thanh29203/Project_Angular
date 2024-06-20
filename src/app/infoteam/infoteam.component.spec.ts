import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoteamComponent } from './infoteam.component';

describe('InfoteamComponent', () => {
  let component: InfoteamComponent;
  let fixture: ComponentFixture<InfoteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoteamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
