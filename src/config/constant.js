const {
  REACT_APP_API_URL,
  REACT_APP_FireBase_apiKey,
  REACT_APP_FireBase_authDomain,
  REACT_APP_FireBase_projectId,
  REACT_APP_FireBase_storageBucket,
  REACT_APP_FireBase_messagingSenderId,
  REACT_APP_FireBase_appId,
  REACT_APP_FireBase_measurementId,
  REACT_APP_GOOGLE_DRIVE_API_KEY,
  REACT_APP_GOOGLE_DRIVE_CLIENT_ID,
} = process.env;

const API_URL =                    REACT_APP_API_URL;
const FireBase_apiKey =            REACT_APP_FireBase_apiKey;
const FireBase_authDomain =        REACT_APP_FireBase_authDomain;
const FireBase_projectId =         REACT_APP_FireBase_projectId;
const FireBase_storageBucket =     REACT_APP_FireBase_storageBucket;
const FireBase_messagingSenderId = REACT_APP_FireBase_messagingSenderId;
const FireBase_appId =             REACT_APP_FireBase_appId;
const FireBase_measurementId =     REACT_APP_FireBase_measurementId;
const GoogleDrive_apiKEY =         REACT_APP_GOOGLE_DRIVE_API_KEY;
const GoogleDrive_clientID =       REACT_APP_GOOGLE_DRIVE_CLIENT_ID;

export {
  API_URL,
  FireBase_apiKey,
  FireBase_authDomain,
  FireBase_projectId,
  FireBase_storageBucket,
  FireBase_messagingSenderId,
  FireBase_appId,
  FireBase_measurementId,
  GoogleDrive_apiKEY,
  GoogleDrive_clientID
}