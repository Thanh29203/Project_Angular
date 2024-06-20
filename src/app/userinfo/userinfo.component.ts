import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-userinfo',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './userinfo.component.html',
  styleUrl: './userinfo.component.css',
})
export class UserinfoComponent {
  faChevronDown = faChevronDown;
  faBell = faBell;
}
