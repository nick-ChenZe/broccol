import nano from 'nanoajax';

export { fetch, format };
/**
 *
 *
 * @export
 * @param {string} url
 * @param {object} [params]
 * @returns {Promise<any>}
 */
function fetch(url: string, params?: object): Promise<any> {
  let body = params && decodeURIComponent(JSON.stringify({ params }));
  let method = 'GET';
  return new Promise((resolve, reject) => {
    nano.ajax({ url, method, body }, (code, responseText) => {
      if (code === 200) {
        resolve(responseText);
      } else {
        reject({ code, responseText });
      }
    });
  });
}

/**
 *
 *
 * @param {string} str
 * @param {...string[]} candidate
 * eg: format('number: %s%s', '$', '200') => number: $200
 */
function format(str: string, ...candidate: string[]) {
  return str.replace(/\%s/g, () => candidate.shift());
}
