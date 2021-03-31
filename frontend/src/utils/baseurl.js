export function baseurl(endpoint) {
   const local = 'http://localhost:4000/api/';
/*   const local = '/api/'; */

  return `${local}${endpoint}`;
}

export const CONFIG = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
};