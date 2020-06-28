import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  test = `To copy content to a pendrive, do the following: 
  * Go to your computer Settings. Check if the USB drive is write-protected. If it is, disable the protection * 
  Check if the pendrive has free space. Delete unwanted files from the pendrive.`
  constructor() { }

  ngOnInit() {
    this.test = `<ul>${this.test}</ul>`;
    this.test = this.test.replace(/\*/g, '<li>');
  }

}
