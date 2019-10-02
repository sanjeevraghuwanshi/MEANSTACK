import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  pagerTotalItems: number;
  pagerPageSize: number;
  pages: number[] = [];
  totalPages: number;
  currentPage = 1;
  nextEnabled = true;
  previousEnabled = false;
  isVisibile = false;

  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  @Input() get pageSize(): number {
    return this.pagerPageSize;
  }
  set pageSize(size: number) {
    this.pagerPageSize = size;
    this.update();
  }
  @Input() get totalItems(): number {
    return this.pagerTotalItems;
  }
  set totalItems(itemCount: number) {
    this.pagerTotalItems = itemCount;
    this.update();
  }

  constructor() {}

  ngOnInit() {}
  update() {
    if (this.pagerTotalItems && this.pagerPageSize) {
      this.totalPages = Math.ceil(this.pagerTotalItems / this.pageSize);
      this.isVisibile = true;
      if (this.totalItems >= this.pageSize) {
        for (let page = 1; page < this.totalPages; page++) {
          this.pages.push(page);
        }
      }
      return;
    }
    this.isVisibile = false;
  }

  previousNext(direction: number, event?: MouseEvent) {
    let page: number = this.currentPage;
    if (direction === -1) {
      if (page > 1) {
        page--;
      }
    } else {
      if (page < this.totalPages) {
        page++;
      }
    }
    this.changePage(page, event);
  }
  changePage(page: number, event?: MouseEvent) {
    event && event.preventDefault();
    if (this.currentPage === page) {
      return;
    }
    this.currentPage = page;
    this.previousEnabled = this.currentPage > 1;
    this.nextEnabled = this.currentPage < this.totalPages;
    this.pageChanged.emit(page);
  }
}
