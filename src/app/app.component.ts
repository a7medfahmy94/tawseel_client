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
  constructor(af: AngularFire) {
    let sub = af.database.list('/trips').subscribe(data => {
      for (var trip of data) {
        if (trip.state == 'started' && trip.logs) {
          this.logs = af.database.list('/trips/'+trip.$key+'/logs');
          af.database.object('/trips/'+trip.$key+'/cost').subscribe(data => {
            console.log(data);
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
