import { Component, OnInit } from '@angular/core';
import { ActionButtonType, IActionButton } from '@project-sunbird/common-consumption';

@Component({
  selector: 'app-player-action',
  templateUrl: './player-action.component.html',
  styleUrls: ['./player-action.component.scss']
})
export class PlayerActionComponent implements OnInit {

  actionButtons: IActionButton[] = [
    {
      name: ActionButtonType.UPDATE,
      label: 'Update',
      disabled: false
    },
    {
      name: ActionButtonType.DELETE,
      label: 'Delete',
      disabled: true
    },
    {
      name: ActionButtonType.DOWNLOAD,
      label: 'Download',
      disabled: false
    },
    {
      name: ActionButtonType.PRINT,
      label: 'Print',
      disabled: false
    },
    {
      name: ActionButtonType.RATE,
      label: 'Rate',
      disabled: true
    },
    {
      name: ActionButtonType.FULL_SCREEN,
      label: 'Full Screen',
      disabled: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onActionButtonClick(event) {
    console.log('Event', event);
  }
}
