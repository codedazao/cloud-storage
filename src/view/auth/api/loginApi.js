import FRequest from '@/library/FRequest';

export const $request = new FRequest();
$request.config.baseUrl = 'http://localhost:3000';
$request.config.headers = {
  'content-type': 'application/json',
};
$request.config.isJson = true;

$request.interceptor.response.convert = (res) => {
  const contentType = res.headers.get('content-type');
  if (contentType.includes('application/json')) {
    return res.json();
  }
  return res.text();
};
$request.interceptor.response.next = (res) => {
  //转换后的res
  switch (res.code) {
    case 300:
      break;
    case 200:
      break;
  }
};

export const login = async (username, password) => {
  const jsmd5 = await import('js-md5');
  $request.interceptor.request = (init) => {
    init.headers = $request.config.headers;
    return init;
  };
  const response = await $request.post('/login', {
    username,
    password: jsmd5.md5(password),
  });
  return response;
};

export const getUserDeatil = async (uid, appendHeaders) => {
  //还原初始的请求头，不然请求头会带一些不该带进去的东西
  $request.interceptor.request = (init) => {
    let headers = init.headers ?? {};
    headers = Object.assign(headers, appendHeaders);
    init.headers = headers;
    return init;
  };
  const response = await $request.get('/getUserDetail', { id: uid });
  return response;
};
