// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyACKG3lfR0Ja_QE3eseLHuYKNzRIEya2JU",
    authDomain: "angularlogin-8b79b.firebaseapp.com",
    databaseURL: "https://angularlogin-8b79b.firebaseio.com",
    projectId: "angularlogin-8b79b",
    storageBucket: "angularlogin-8b79b.appspot.com",
    messagingSenderId: "553096299518",
    appId: "1:553096299518:web:d0a4aec0e50dc904"
  },
  database: 'firebase',
  socialAuthEnabled: true
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
