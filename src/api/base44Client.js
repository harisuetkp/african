import { createClient } from '@base44/sdk';
import { appParams } from '@/lib/app-params';

const { appId, serverUrl, token, functionsVersion } = appParams;

// Create a client with authentication required
export const base44 = createClient({
  appId,
  serverUrl: 'https://api.base44.io', // Force correct backend URL
  appBaseUrl: window.location.origin, // Tell SDK where we are
  token,
  functionsVersion,
  requiresAuth: false
});
