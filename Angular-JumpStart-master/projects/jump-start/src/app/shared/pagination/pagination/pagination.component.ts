import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cm-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  private pagerTotalItems: number;
  private pagerPageSize: number;

  totalPages: number;
  pages: number[] = [];
  currentPage = 1;
  isVisible = false;
  previousEnabled = false;
  nextEnabled = true;

  @Input()
  get pageSize(): number {
    return this.pagerPageSize;
  }

  public set pageSize(v: number) {
    this.pagerPageSize = v;
    this.update();
  }

  @Input()
  get totalItems(): number {
    return this.pagerTotalItems;
  }

  set totalitems(v: number) {
    this.pagerTotalItems = v;
    this.update();
  }

  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  update() {
    if (this.pagerTotalItems && this.pagerPageSize) {
      this.totalPages = Math.ceil(this.pagerTotalItems / this.pageSize);
      this.isVisible = true;
      if (this.totalItems >= this.pageSize) {
        for (let index = 0; index < this.totalPages + 1; index++) {
          this.pages.push(i);
        }
      }
      return;
    }
    this.isVisible = false;
  }
}
