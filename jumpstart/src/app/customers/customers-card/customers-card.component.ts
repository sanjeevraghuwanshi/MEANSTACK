import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { TrackByService } from 'src/app/core/services/trackby.service';
import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers-card',
  templateUrl: './customers-card.component.html',
  styleUrls: ['./customers-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomersCardComponent implements OnInit {
  @Input() customers: ICustomer[] = [];
  constructor(private trackbyService: TrackByService) {}

  ngOnInit() {}
}
