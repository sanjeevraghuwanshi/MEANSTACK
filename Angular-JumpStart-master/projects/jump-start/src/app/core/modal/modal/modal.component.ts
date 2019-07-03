import { Component, OnInit } from '@angular/core';
import { IModalContent } from '../../../shared/interfaces';
import { ModalService } from '../modal.service';

@Component({
  selector: 'cm-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  modalVisible = false;
  modalVisibleAnimate = false;
  modalContent: IModalContent = {};
  cancel: () => void;
  ok: () => void;
  defaultModalContent: IModalContent = {
    header: 'Please Confirm',
    body: 'Are you sure you want to continue?',
    cancelButtonText: 'Cancel',
    OkButtontext: 'OK',
    cancelButtonVisible: true
  };

  constructor(private modalService: ModalService) {
    this.modalService.show = this.show.bind(this);
    this.modalService.hide = this.hide.bind(this);
  }

  ngOnInit() {}

  show(modalContent: IModalContent) {
    this.modalContent = Object.assign(this.defaultModalContent, modalContent);
    this.modalVisible = true;
    setTimeout(() => {
      this.modalVisibleAnimate = true;
    });

    const promise = new Promise<boolean>((resolve, reject) => {
      this.cancel = () => {
        this.hide();
        resolve(false);
      };
      this.ok = () => {
        this.hide();
        resolve(true);
      };
    });
    return promise;
  }

  hide() {
    this.modalVisibleAnimate = false;
    setTimeout(() => {
      this.modalVisible = false;
    }, 300);
  }
}
