import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { ICustomer } from 'src/app/shared/interfaces';
import { TrackbyService } from 'src/app/core/services/trackby.service';

@Component({
  selector: 'app-customers-card',
  templateUrl: './customers-card.component.html',
  styleUrls: ['./customers-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomersCardComponent implements OnInit {
  @Input() customers: ICustomer[] = [];
  constructor(public trackByService: TrackbyService) {}

  ngOnInit() {}
}
