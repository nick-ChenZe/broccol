const repo = 'broccol';
const owner = 'nick-ChenZe';
const host = 'https://api.github.com/repos';
const root = '/src';

export const ROOT = root;
export const REPOSITORY = 'REPOSITORY';
export const FETCH_DIR_PATH = `${host}/${owner}/${repo}/contents%s`;
export const FETCH_BLOB_PATH = `${host}/${owner}/${repo}/git/blobs/%s`;
