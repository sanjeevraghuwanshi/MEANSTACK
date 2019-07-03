import { Injectable } from '@angular/core';
import { IModalContent } from '../../shared/interfaces';

@Injectable()
export class ModalService {
  constructor() {}
  show: (modalContent: IModalContent) => Promise<boolean>;
  hide: () => void;
}
