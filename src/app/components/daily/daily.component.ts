import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { Routes, ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {
  date: Date;
  temperature: number;
  pumps: number;
  backwash: boolean;
  skimmer: boolean;

  constructor(private router: Router, private afDb: AngularFireDatabase) { }

  ngOnInit() {
  }
addDailyData() {
  let daily = {
    date: Date,
    temperature: this.temperature,
    pumps: this.pumps,
    backwash: this.backwash,
    skimmer: this.skimmer,
   }
   this.afDb.addDailyData(daily);

   this.router.navigate(['logs']);
  }
}
