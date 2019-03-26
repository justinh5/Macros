import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { ItemTableComponent } from './meal-detail/item-table/item-table.component';
import { AddItemBttnComponent } from './meal-detail/add-item-bttn/add-item-bttn.component';
import { NewRowComponent } from './meal-detail/new-row/new-row.component';
import { SearchModalComponent } from './meal-detail/search-modal/search-modal.component';
import { MacroTableComponent } from './meal-detail/macro-table/macro-table.component';


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
    ItemTableComponent,
    AddItemBttnComponent,
    NewRowComponent,
    SearchModalComponent,
    MacroTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SearchModalComponent]
})
export class AppModule { }
