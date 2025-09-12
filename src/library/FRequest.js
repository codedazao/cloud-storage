export default class FRequest {
  constructor() {}
  config = {
    baseUrl: '',
    isJson: false,
    headers: {},
  };
  interceptor = {
    request: (init) => init,
    response: {
      convert(res) {
        return res;
      },
      next(res) {
        return res;
      },
    },
  };

  getReadyUrl(url) {
    if (url.startsWith('/')) {
      url = url.slice(1);
    }
    this.config.baseUrl = this.config.baseUrl ?? '';

    if (this.config.baseUrl.endsWith('/')) {
      this.config.baseUrl = this.config.baseUrl.slice(0, -1);
    }
    url = this.config.baseUrl + '/' + url;
    return url;
  }
  post(url, params = {}, headers = {}) {
    url = this.getReadyUrl(url);
    if (this.config.isJson === true && !(params instanceof FormData)) {
      params = JSON.stringify(params);
    }
    //合并两个headers后面的覆盖前面的
    headers = Object.assign({}, this.config.headers, headers);
    return this.request(url, {
      method: 'POST',
      headers,
      body: params,
    });
  }

  httpBuildQuery(params) {
    let strArray = [];
    for (let key in params) {
      strArray.push(`${key}=${params[key]}`);
    }
    return strArray.join('&');
  }
  request(url, init) {
    return new Promise((resolve, reject) => {
      init = this.interceptor.request(init);
      fetch(url, init)
        .then((res) => {
          const response = this.interceptor.response.convert(res);
          return response;
        })
        .then((res) => {
          this.interceptor.response.next(res);
          resolve(res);
        })
        .catch(() => {
          reject();
        });
    });
  }

  get(url, params = {}, headers = {}) {
    url = this.getReadyUrl(url);
    const queryString = this.httpBuildQuery(params);
    let symbol = '?';
    if (url.endsWith('?') || url.endsWith('&')) {
      symbol = '';
    } else if (url.includes('?')) {
      symbol = '&';
    }
    url = url + symbol + queryString;
    //这里要这么写，不然会导致this.config.headers被修改
    headers = Object.assign({}, this.config.headers, headers);
    return this.request(url, {
      method: 'GET',
      headers,
    });
  }
}
