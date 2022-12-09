import { TIMEOUT_SEC } from './config';

const timeout = (s) => {
  return new Promise((_, reject) => {
    return setTimeout(() => {
      return reject(
        new Error(`Request took too long! Timeout after ${s} second`)
      );
    }, s * 1000);
  });
};

export const getJSON = async (url, errMsg = 'Something went wrong!') => {
  try {
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export const sendJSON = async (url, uploadData) => {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
