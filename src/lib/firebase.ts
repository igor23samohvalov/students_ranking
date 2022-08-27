import { initializeApp, getApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import {
  getFirestore,
  collection,
  where,
  getDocs,
  query,
  limit,
  connectFirestoreEmulator,
} from "firebase/firestore";
import IConfig from "../Types/IConfig";

const firebaseConfig = {
  apiKey: "AIzaSyCBsrgKubZ6XliWSo8FezikUmpF0pMRjsM",
  authDomain: "students-ranking-dc974.firebaseapp.com",
  projectId: "students-ranking-dc974",
  storageBucket: "students-ranking-dc974.appspot.com",
  messagingSenderId: "417403830041",
  appId: "1:417403830041:web:38a3f83a68d54faa9f8f88",
  measurementId: "G-4DCS2KWYM0",
};

function createFirebaseApp(config: IConfig) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

export const firestore = getFirestore();
// export const storage = getStorage(firebaseApp);

// eslint-disable-next-line no-restricted-globals
if (location.hostname === "localhost") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(firestore, "localhost", 8080);
}

export const STATE_CHANGED = "state_changed";

export async function getUserWithUsername(username: string) {
  const q = query(
    collection(firestore, "users"),
    where("username", "==", username),
    limit(1),
  );
  const userDoc = (await getDocs(q)).docs[0];

  return userDoc;
}

export function postToJSON(doc: any) {
  const data = doc.data();

  return {
    ...data,
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0,
  };
}
