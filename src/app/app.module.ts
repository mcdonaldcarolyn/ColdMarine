import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatTableModule, MatMenuModule, MatToolbarModule, MatIconModule} from '@angular/material';
import { MatFormFieldModule, MatSliderModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewdataComponent } from './components/newdata/newdata.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import 'hammerjs';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'newdata', component: NewdataComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewdataComponent,
    NavbarComponent
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
