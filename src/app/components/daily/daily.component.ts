import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { Routes, ActivatedRoute, Params, Router } from '@angular/router';
import { Log } from '../../state/log';
import { Observable } from 'rxjs/observable';
@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent {
  date: Date;
  temperature: number;
  pumps: number;
  backwash: boolean;
  skimmer: boolean;
  logs: Observable<logs>;

  constructor(private route: ActivatedRoute, private router: Router, private afDb: AngularFireDatabase) {
    this.route.queryParams.subscribe(params => {
      this.logs = afDb.list('tanks/tank' + params['tankNUmber'] + '/logs');
    });
   }

  
addDailyData() {
  this.logs.push({
    date: Date,
    temperature: this.temperature,
    pumps: this.pumps,
    backwash: this.backwash,
    skimmer: this.skimmer,
  });
}

}