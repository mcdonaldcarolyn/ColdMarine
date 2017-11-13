import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatebase } from 'angularfire2/database';
import { Routes, ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, afDb: AngularFireDatabase) {
      this.tanks = afDb.list('items');
    }

    goToTank(tank:Tank){
      this.router.navigate('/tank')
    }
  ngOnInit() {
  }

}
