import { Component, OnInit } from '@angular/core';
import { tocData1 } from './data';
import { TocCardType } from '@project-sunbird/common-consumption';

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.scss']
})
export class ContentDetailsComponent implements OnInit {

  activeContent;
  tocData = tocData1;
  cardType: TocCardType = TocCardType.COURSE;
  public activeMimeTypeFilter = ['all'];
  mimeTypeFilters = ['all', 'video', 'interaction', 'docs'];
  activeCourse;

  constructor() { }

  ngOnInit() {
  }

  selectedFilter(event) {
    console.log('mimetype filter output : ', event);
    this.activeMimeTypeFilter = event.data.value;
  }

  tocCardClickHandler(event) {
    console.log('tocCardClickHandler', event);
    this.activeContent = event.data;
  }

  onNoContentAvailable(event) {
    console.log("event no content available", event);
  }

  onCurriculumCardClick(event) {
    // this.expandIndex = event;
    this.activeCourse = this.tocData[event];
  }




}
