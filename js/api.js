const Method = {
  GET: 'GET',
  POST: 'POST'
};

const URL_GET_DATA = 'https://31.javascript.htmlacademy.pro/kekstagram/data';
const URL_SEND_DATA = 'https://31.javascript.htmlacademy.pro/kekstagram/';

const ErrorText = {
  GET: 'Не удалось загрузить данные. Попробуйте еще раз',
  POST: 'Не удалось отправить данные формы',
};

const load = async (errorText = null, BASE_URL = URL_GET_DATA, methodFetch = Method.GET, body = null) => {
  const response = await fetch(BASE_URL, { method: methodFetch, body});
  return response.ok ? await response.json() : Promise.reject({message: errorText, status: response.status});
};

const getData = async () => await load (ErrorText.GET);
const sendData = async (body) => await load(ErrorText.POST, URL_SEND_DATA, Method.POST, body);

export {getData, sendData};

// credentials: "same-origin"
