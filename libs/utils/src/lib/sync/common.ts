import { AngularFireAction, DatabaseSnapshot } from '@angular/fire/database';

export enum SyncStatus {
  OFF = 'off',
  VIEWING = 'viewing',
  PRESENTING = 'presenting',
  ADMIN = 'admin',
}

export interface SyncMeta<T> {
  time: number;
  uid: string;
  displayName: string;
  presenter: Partial<T>;
  users: Record<string, any>;
}

export const canWritePresenterData = status => status === SyncStatus.PRESENTING || status === SyncStatus.ADMIN;

export interface SyncSessionConfig {
  autojoin: boolean;
  active: boolean;
  admins: string[];
  owner: string;
}

export interface SyncSession {
  config: SyncSessionConfig;
}

export function firebaseToValuesWithKey<T>(list: AngularFireAction<DatabaseSnapshot<T>>[]) {
  return list.map(action => ({key: action.key, ...action.payload.val()}));
}

export function toValuesAndKeys<T>(object: { [k: string]: T }): Array<{key: string, value: T}> {
  return Object.entries(object).map(([key, value]) => ({key, value}));
}


export function sum(array) {
  return array.reduce((a, b) => a + b, 0);
}
