import { Routes } from '@angular/router';
import { SingleSymbolComponent } from './component/single-symbol/single-symbol.component';
import { StockTableComponent } from './component/stock-table/stock-table.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';

export const routes: Routes = [
    { path: '', component: StockTableComponent, pathMatch: 'full' }, // Default route to display symbols
    { path: 'symbol/:id', component: SingleSymbolComponent }, // Route to display details of a single symbol
    { path: '**', component: PagenotfoundComponent } // Route for handling page not found
];
