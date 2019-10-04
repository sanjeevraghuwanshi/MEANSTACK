import { Component, OnInit } from '@angular/core';
import { IModalContent, ModalService } from './modal.servcie';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  modalVisible = false;
  modalVisibleAnimate = false;
  modalContent: IModalContent = {};
  ok: () => void;
  cancel: () => void;
  defaultModalContent: IModalContent = {
    header: 'Please confirm',
    body: 'Are you sure you want to continue?',
    cancelButtonText: 'Cancel',
    OKButtonText: 'Ok',
    cancelButtonVisible: true
  };
  constructor(private modalService: ModalService) {
    modalService.show = this.show.bind(this);
    modalService.hide = this.hide.bind(this);
  }

  ngOnInit() {}
  show(modalContent: IModalContent) {
    this.modalContent = Object.assign(this.defaultModalContent, modalContent);
    this.modalVisible = true;
    setTimeout(() => {
      this.modalVisibleAnimate = true;
    });
    const promise = new Promise((resolve, reject) => {
      this.ok = () => {
        this.hide();
        resolve(true);
      };
      this.cancel = () => {
        this.hide();
        resolve(false);
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
