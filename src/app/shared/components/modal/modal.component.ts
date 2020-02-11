import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  message: string;

  constructor() { }

  ngOnInit() {
    document.addEventListener('alertaEmitida', (event: CustomEvent) => {
      this.message = event.detail.message;
      this.openModal();
    });
  }

  openModal() {
    document.getElementById('alertModal').style.display = 'flex';
  }

  closeModal() {
    document.getElementById('alertModal').style.display = 'none';
  }

}
