import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Routes, ActivatedRoute, Params, Router } from '@angular/router';
import { Tank } from '../../state/tank';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tanks: AngularFireList<Tank>;

  constructor(private router: Router, afDb: AngularFireDatabase) {
      this.tanks = afDb.list('tanks');
    }

    goToTank(tank: Tank) {
      this.router.navigate(['/tank']);
    }
  ngOnInit() {
  }

}
