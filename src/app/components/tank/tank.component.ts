import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { Routes, ActivatedRoute, Params, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/first';
import { Http } from '@angular/http';
import { DailyComponent } from '../daily/daily.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Tank } from '../../state/tank';
import { Log } from '../../state/log';
@Component({
  selector: 'app-tank',
  templateUrl: './tank.component.html',
  styleUrls: ['./tank.component.css']
})
export class TankComponent {
  displayedColumns = ['date', 'temp', 'pumps'];
  // displayedColumns = ['date', 'temp', 'pumps', 'BW', 'Skimmer', 'Notes'];
  date = new Date (11, 6);
  tanks: Observable<Tank>;
  dataSource: LogDataSource;
  tankNumber: number;

  constructor(private route: ActivatedRoute, private router: Router, afDb: AngularFireDatabase) {
      this.route.queryParams.subscribe(params => {
      const logs$: Observable<Log[]> = afDb.list('tanks/tank' + params['tankNumber'] + '/logs').valueChanges();
      this.dataSource = new LogDataSource(logs$);
      this.tankNumber = params['tankNumber'];
    });
  }

  newDataInfo() {
    this.router.navigate(['/daily'], {
      queryParams: {
        tankNumber: this.tankNumber
      }
    });
  }
}

class LogDataSource extends DataSource<Log> {
  constructor(private logs$: Observable<Log[]>) {
    super();
  }
  connect(): Observable<Log[]> {
    return this.logs$;
  }
  disconnect() {}
}

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */



