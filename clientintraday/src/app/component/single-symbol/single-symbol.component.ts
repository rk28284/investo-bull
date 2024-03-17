import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-symbol',
  standalone: true,
  imports: [],
  templateUrl: './single-symbol.component.html',
  styleUrl: './single-symbol.component.css'
})
export class SingleSymbolComponent implements OnInit{
  symbol: string=''

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.symbol = this.route.snapshot.paramMap.get('id')||"";
  }
}
