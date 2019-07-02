import { Component, OnInit, Input } from '@angular/core';
import { ICustomer } from '../../shared/interfaces';
import { TrackbyService } from '../../core/services/trackby.service';

@Component({
  selector: 'cm-customers-card',
  templateUrl: './customers-card.component.html',
  styleUrls: ['./customers-card.component.scss']
})
export class CustomersCardComponent implements OnInit {
  @Input() customers: ICustomer[] = [];
  constructor(public trackByService: TrackbyService) {}

  ngOnInit() {}
}
