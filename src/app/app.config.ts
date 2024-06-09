import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({
    "projectId": "clase-1-angular-auth",
    "appId": "1:270409596632:web:a9d42e8b95dc7e940b21ad",
    "storageBucket":
      "clase-1-angular-auth.appspot.com",
    "apiKey": "AIzaSyCO1JxbCSZE4YZA2YphF4HjJzhJX-X-N0Q",
    "authDomain": "clase-1-angular-auth.firebaseapp.com",
    "messagingSenderId": "270409596632"
  })), provideAuth(() => getAuth()), provideDatabase(() => getDatabase()), provideStorage(() => getStorage())]
};
