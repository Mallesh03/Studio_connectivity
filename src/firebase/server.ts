// src/firebase/server.ts
// This file provides admin access to Firestore for server-side operations.

import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// You may want to use environment variables for credentials in production
// For local development, applicationDefault() will use GOOGLE_APPLICATION_CREDENTIALS if set
const firebaseAdminApp = initializeApp({
  credential: applicationDefault(),
});

export const adminFirestore = getFirestore(firebaseAdminApp);
