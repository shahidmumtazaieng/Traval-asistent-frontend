import type { AppConfig } from './lib/types';

export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'James\' Appointment Scheduler',
  pageTitle: 'James\' AI Appointment Scheduler',
  pageDescription: 'Book an appointment with James using our AI scheduler',

  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,

  logo: '/lk-logo.svg',
  accent: '#002cf2',
  logoDark: '/lk-logo-dark.svg',
  accentDark: '#1fd5f9',
  startButtonText: 'Book Appointment',

  agentName: undefined,
};
