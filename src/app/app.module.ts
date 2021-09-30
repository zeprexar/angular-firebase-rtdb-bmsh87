import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';

const config = {
  authDomain: 'mayo-hf.firebaseapp.com',
  apiKey: 'AIzaSyAuWy8g6dJVX_QkKWpcIYdQLFqKCid5rdE',
  databaseURL: 'https://mayo-hf-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'mayo-hf',
  storageBucket: 'mayo-hf.appspot.com',
  messagingSenderId: '249319595664',
  appId: '1:249319595664:web:d74a709135fdea2c2f8215',
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
