import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logs: any;
  cost: any;
  lat: number;
  lng: number;
  constructor(af: AngularFire) {
    let sub = af.database.list('/trips').subscribe(data => {
      for (var trip of data) {
        if (trip.state == 'started' && trip.logs) {
          this.logs = af.database.list('/trips/'+trip.$key+'/logs');
          af.database.list('/trips/'+trip.$key+'/logs').subscribe(data => {
            if (data.length > 0) {
              this.lat = data[data.length - 1].point.lat;
              this.lng = data[data.length - 1].point.lng;
            }
          })
          af.database.object('/trips/'+trip.$key+'/cost').subscribe(data => {
            if (data.$value) {
              this.cost = data.$value;
            }
          })
          sub.unsubscribe();
        }
      }
    });
  }
}
