import {BrowserWindow, Menu} from 'electron';
import fs from 'fs';
import settings from '../shared/settings';
import i18n from '../configs/i18next.config';
import { makeOpenBrowserWindow, makeSetSavedEnv } from '../../gui-common/util';

export function openBrowserWindow (route, opts) {
  const open = makeOpenBrowserWindow({BrowserWindow, Menu, i18n});
  return open(route, opts);
}

export function setSavedEnv () {
  const set = makeSetSavedEnv(settings);
  return set();
}

export function getAppiumFilePath (argv, isPackaged, isDev) {
  if (process.platform === 'darwin' && !isDev) {
    return false;
  }
  let argvIndex = isPackaged ? 1 : 2;
  return argv[argvIndex];
}

