import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Routes, ActivatedRoute, Params, Router } from '@angular/router';
import 'hammerjs';
import { Log } from '../../state/log';
import { Observable } from 'rxjs/observable';
import { Tank } from '../../state/tank';
@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent {
  logs: AngularFireList<Log>;
  tankNumber: number;
  logData: Log = {
    date: new Date(),
    temperature: 0,
    pump1: true,
    pump2: true,
    pump3: true,
    pump4: true
  };

  constructor(private route: ActivatedRoute, private router: Router, private afDb: AngularFireDatabase) {
    this.route.queryParams.subscribe(params => {
      this.tankNumber = params['tankNumber'];
      this.logs = afDb.list('tanks/tank' + params['tankNumber'] + '/logs');
    });
  }

  addDailyData(log: Log) {
    console.log(log);
    let pumpsOn = 0;
    if (log.pump1) {
      pumpsOn++;
    }
    if (log.pump2) {
      pumpsOn++;
    }
    if (log.pump3) {
      pumpsOn++;
    }
    if (log.pump4) {
      pumpsOn++;
    }
    log.pumpsOn = pumpsOn;
    this.logs.push(log);
    this.router.navigate(['/tank'], {
      queryParams: {
        tankNumber: this.tankNumber
      }
    });

  }
}
