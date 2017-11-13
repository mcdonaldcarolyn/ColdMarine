import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { Routes, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/observable/of';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  fakeSomething: number;
}
