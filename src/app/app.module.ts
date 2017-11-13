import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatTableModule, MatMenuModule, MatToolbarModule, MatIconModule} from '@angular/material';
import { MatFormFieldModule, MatSliderModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { TankComponent } from './components/tank/tank.component';
import { DailyComponent } from './components/daily/daily.component';
import { MainComponent } from './components/main/main.component';
import 'hammerjs';

const appRoutes: Routes = [
  {path: '', component: MainComponent },
  {path: 'Tank', component: TankComponent },
  {path: 'Daily', component: DailyComponent},
];

const config = {
  apiKey: 'AIzaSyDhFVMu_el1j7eOPuVhfl9HyRhfd4WOKeE',
  authDomain: 'coldmarine-app.firebaseapp.com',
  databaseURL: 'https://coldmarine-app.firebaseio.com',
  projectId: 'coldmarine-app',
  storageBucket: 'coldmarine-app.appspot.com',
  messagingSenderId: '234569419355'
};

@NgModule({
  declarations: [
    AppComponent,
    TankComponent,
    DailyComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatSliderModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
