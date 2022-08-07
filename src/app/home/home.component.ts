import { Component, OnInit } from '@angular/core';

import { ContentOverviewService, Features} from '../content-overview.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
overview : Features[] = [];
  constructor( private contentOverviewService : ContentOverviewService ) { }

  ngOnInit(): void {

    this.overview = this.contentOverviewService.getOverview();
    console.log("Fetched Overview: " + JSON.stringify(this.overview) );
  }

}
