const {
  NODE_ENV = 'development',
  SENTRY_AUTH_TOKEN = '',
  SENTRY_ORG = '',
  SENTRY_PROJECT = '',
  VUE_APP_API_HOST = '',
  VUE_APP_APPLICATION_ID = null,
  VUE_APP_BASE_URL = '/',
  VUE_APP_GOOGLE_MAPS_API_KEY = '',
  VUE_APP_I18N_FALLBACK_LOCALE = '',
  VUE_APP_I18N_LOCALE = '',
  VUE_APP_NOTIFICATION_DURATION = '',
  VUE_APP_SECURE_COOKIE = false,
  VUE_APP_SECURE_HOST = false,
  VUE_APP_SENTRY_DSN = '',
  VUE_APP_SENTRY_GIT_REPO = '',
  VUE_APP_TENANT_ID = ''
} = process.env

import { version } from '../../../package.json'

const ENVIRONMENT = NODE_ENV
const BASE_URL = VUE_APP_BASE_URL || '/'

const APP_ID = VUE_APP_APPLICATION_ID || null
const API_HOST = VUE_APP_API_HOST || 'api.dev.popai.insure'
const APP_VERSION = version || '0.0.0'
const TENANT_ID = VUE_APP_TENANT_ID || ''

const SECURE_HOST = (VUE_APP_SECURE_HOST && ['1', 'true'].includes(String(VUE_APP_SECURE_HOST))) || false
const SECURE_COOKIE = (VUE_APP_SECURE_COOKIE && ['1', 'true'].includes(String(VUE_APP_SECURE_COOKIE))) || false

const SENTRY_DSN = VUE_APP_SENTRY_DSN
const SENTRY_GIT_REPO = VUE_APP_SENTRY_GIT_REPO || ''

const LOCALE = VUE_APP_I18N_LOCALE || 'en'
const LOCALE_FALLBACK = VUE_APP_I18N_FALLBACK_LOCALE || 'en'

const STORAGE_TYPE = {
  COOKIE: 'COOKIE',
  LOCAL_STORAGE: 'LOCALSTORAGE'
}

const GOOGLE_MAPS_API_KEY = VUE_APP_GOOGLE_MAPS_API_KEY || ''

const DEFAULT_DATETIME = 'yyyy-MM-dd HH:mm'
const APP_NOTIFICATION_DURATION = VUE_APP_NOTIFICATION_DURATION || 5000

export {
  API_HOST,
  APP_ID,
  APP_NOTIFICATION_DURATION,
  APP_VERSION,
  BASE_URL,
  DEFAULT_DATETIME,
  ENVIRONMENT,
  GOOGLE_MAPS_API_KEY,
  LOCALE,
  LOCALE_FALLBACK,
  SECURE_COOKIE,
  SECURE_HOST,
  SENTRY_AUTH_TOKEN,
  SENTRY_DSN,
  SENTRY_GIT_REPO,
  SENTRY_ORG,
  SENTRY_PROJECT,
  STORAGE_TYPE,
  TENANT_ID
}
