import { Component } from '@angular/core';
import { InfoleaderComponent } from '../infoleader/infoleader.component';
import { InfoprojectComponent } from '../infoproject/infoproject.component';
import { InfoteamComponent } from '../infoteam/infoteam.component';

@Component({
  selector: 'app-contentleader',
  standalone: true,
  imports: [
    InfoleaderComponent,
    InfoprojectComponent,
    InfoteamComponent,
  ],
  templateUrl: './contentleader.component.html',
  styleUrl: './contentleader.component.css'
})
export class ContentleaderComponent {

}
