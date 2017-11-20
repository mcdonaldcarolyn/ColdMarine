import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList,  } from 'angularfire2/database';
import { Routes, ActivatedRoute, Params, Router } from '@angular/router';
import { Log } from '../../state/log';
import { Observable } from 'rxjs/observable';
import { Tank } from '../../state/tank';
@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent {
 // date: new Date();
  temperature: number;
  //pumps: number;
  backwash: boolean;
  skimmer: boolean;
  logs: AngularFireList<Log>;


  constructor(private route: ActivatedRoute, private router: Router, private afDb: AngularFireDatabase) {
    this.route.queryParams.subscribe(params => {
      this.logs = afDb.list('tanks/tank' + params['tankNUmber'] + '/logs');
    });
   }

  addDailyData(log: Log) {
    this.logs.push(log);
      this.router.navigate(['/tank']);
    }
  }

