import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StockTableComponent } from './component/stock-table/stock-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive,RouterOutlet,StockTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clientintraday';
}
