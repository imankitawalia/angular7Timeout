import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-progressbar-modal',
  templateUrl: './progressbar-modal.component.html',
  styleUrls: ['./progressbar-modal.component.css']
})
export class ProgressbarModalComponent {

  @Input() countMinutes: number;
  @Input() countSeconds: number;
  @Input() progressCount: number;

  constructor(public activeModal: NgbActiveModal) {
  }
  continue() {
    this.activeModal.close(null);
  }
  logout() {
    this.activeModal.close('logout');
  }

}
