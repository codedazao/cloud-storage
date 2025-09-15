import XRequest from '@/library/XRequest';

export const $request = new XRequest();

$request.config.baseUrl = 'http://localhost:3000';
$request.config.headers = {
  'content-type': 'application/json',
};
$request.config.isJson = true;
$request.interceptor.response.convert = (xhr) => {
  const contentType = xhr.getResponseHeader('content-type');
  if (contentType.includes('application/json')) {
    return JSON.parse(xhr.responseText);
  }
  return xhr.response;
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
  console.log('执行xhr');
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
