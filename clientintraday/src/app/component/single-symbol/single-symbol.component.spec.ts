import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSymbolComponent } from './single-symbol.component';

describe('SingleSymbolComponent', () => {
  let component: SingleSymbolComponent;
  let fixture: ComponentFixture<SingleSymbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleSymbolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleSymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
