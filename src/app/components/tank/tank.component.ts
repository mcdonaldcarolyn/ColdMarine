import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { Routes, ActivatedRoute, Params, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import 'rxjs/add/observable/of';
import { Http } from '@angular/http';
import { DailyComponent } from '../daily/daily.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { Tank } from '../../state/tank';

@Component({
  selector: 'app-tank',
  templateUrl: './tank.component.html',
  styleUrls: ['./tank.component.css']
})
export class TankComponent {
  displayedColumns = ['date', 'temperature', 'pump1', 'pump2'];
  date = new Date (11, 6);
  tank: Tank[];
  
  constructor(private router: Router, afDb: AngularFireDatabase) {
      this.tanks = afDb.list('tanks');
    }


  newDataInfo() {
    this.router.navigate(['/daily']);
  }


}

export interface Checkin {
  temperature: string;
  date: string;
  NumberofPumps: any;
  pump1: string;
  pump2: string;
}

/**const data: Checkin[] = [
  { date: 1, temperature: '52.2', pump1: true, pump2: 'H' },
  { date: 2, temperature: '52.5', pump1: true, pump2: 'He' },
  { date: 3, temperature: '', pump1: 6.941, pump2: 'Li' },
  { date: 4, temperature: '', pump1: 9.0122, pump2: 'Be' },
  { date: 5, temperature: '', pump1: 10.811, pump2: 'B' },
  { date: 6, temperature: '', pump1: 12.0107, pump2: 'C' },
  { date: 7, temperature: '', pump1: 14.0067, pump2: 'N' },
  { date: 8, temperature: '', pump1: 15.9994, pump2: 'O' },
  { date: 9, temperature: '', pump1: 18.9984, pump2: 'F' },
  { date: 10, temperature: '', pump1: 20.1797, pump2: 'Ne' },
  { date: 11, temperature: '', pump1: 22.9897, pump2: 'Na' },
  { date: 12, temperature: '', pump1: 24.305, pump2: 'Mg' },
  { date: 13, temperature: '', pump1: 26.9815, pump2: 'Al' },
  { date: 14, temperature: '', pump1: 28.0855, pump2: 'Si' },
  { date: 15, temperature: '', pump1: 30.9738, pump2: 'P' },
  { date: 16, temperature: '', pump1: 32.065, pump2: 'S' },
  { date: 17, temperature: '', pump1: 35.453, pump2: 'Cl' },
  { date: 18, temperature: '', pump1: 39.948, pump2: 'Ar' },
  { date: 19, temperature: '', pump1: 39.0983, pump2: 'K' },
  { date: 20, temperature: '', pump1: 40.078, pump2: 'Ca' }
];*/

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */



