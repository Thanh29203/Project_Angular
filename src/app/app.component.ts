import { Component, importProvidersFrom } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProjectsComponent } from './projects/projects.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';
import {
  faCoffee,
  faSort,
  faHouse,
  faMagnifyingGlass,
  faFilter,
  faBell,
  faChevronDown,
  faMugHot,
  faUser,
  faGhost,
} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    FontAwesomeModule,
    SidebarComponent,
    ProjectsComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  faUser = faUser;
  faGhost = faGhost;
  faMugHot = faMugHot;
  faCoffee = faCoffee;
  faSort = faSort;
  faHouse = faHouse;
  faMagnifyingGlass = faMagnifyingGlass;
  faFilter = faFilter;
  faBell = faBell;
  faChevronDown = faChevronDown;
  productInfo = {};
  constructor(private router: Router) {}

  isLoginPage(): boolean {
    return this.router.url.includes('/login') || this.router.url.includes('/register');
  }

  getProductItem(item: any) {
    this.productInfo = item;
  }
}
