import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

/* Components */
import { AppComponent } from './app.component';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { AboutComponent } from './shared/about/about.component';
import { MealsComponent } from './meals/meals.component';
import { MealDetailComponent } from './meal-detail/meal-detail.component';
import { EditMealComponent } from './edit-meal/edit-meal.component';
import { BackBttnComponent } from './meal-detail/back-bttn/back-bttn.component';
import { SearchFieldComponent } from './meal-detail/search-field/search-field.component';
import { ItemTableComponent } from './meal-detail/item-table/item-table.component';
import { AddItemBttnComponent } from './meal-detail/add-item-bttn/add-item-bttn.component';
import { NewRowComponent } from './meal-detail/new-row/new-row.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    AboutComponent,
    MealsComponent,
    EditMealComponent,
    MealDetailComponent,
    BackBttnComponent,
    SearchFieldComponent,
    ItemTableComponent,
    AddItemBttnComponent,
    NewRowComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
