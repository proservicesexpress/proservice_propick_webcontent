// ui/constants/endpoints.js
// const API_ROOT = '/api/v1'

// มีค่าเป็น /api/v1/pages
export const DATA_ENDPOINT = `${API_ROOT}/data`

let backendHost;
const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

if(hostname === 'vivachemistry.firebaseapp.com') {
  backendHost = 'vivachemistry.firebaseapp.com';
} else if(hostname === 'staging.realsite.com') {
  backendHost = 'https://staging.api.realsite.com';
} else if(/^qa/.test(hostname)) {
  backendHost = `https://api.${hostname}`;
} else {
  backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://127.0.0.1:5001';
}

export const API_ROOT = `${backendHost}/api/${apiVersion}/data`;