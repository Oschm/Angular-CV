import { Injectable } from '@angular/core';


import { Features, features } from '../app/Features';

@Injectable({
  providedIn: 'root'
})
export class ContentOverviewService {
  constructor() { }


  getOverview() {
    console.log("fetching overview: " + JSON.stringify(features));
    return features;
  }

}

export { Features }
