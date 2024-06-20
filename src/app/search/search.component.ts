import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  @Output() searchParams = new EventEmitter<string>();
  faMagnifyingGlass = faMagnifyingGlass;
  q: string = '';
  handleSearch() {
    this.searchParams.emit(this.q);
  }
}
