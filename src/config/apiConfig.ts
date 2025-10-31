import apiConfig from './apiConfig.json';

const baseUrl = apiConfig.API_BASE_URL.replace(/\/$/, '');

export const API_BASE_URL = baseUrl;

export const buildApiUrl = (path: string = ''): string => {
  if (!path) {
    return baseUrl;
  }

  return `${baseUrl}${path.startsWith('/') ? '' : '/'}${path}`;
};
