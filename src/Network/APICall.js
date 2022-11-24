import Axios from 'axios';
import {Utility} from '../Helper';

const axiosInstance = Axios.create();

axiosInstance.interceptors.request.use(
  config => {
    if (global.userData && global.userData.token) {
      config.headers.Authorization = global.userData.token;
    }
    console.log('axios request =>', config);
    return config;
  },
  error => {
    console.log('axios request error =>', error.response || error);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  config => {
    console.log('axios response =>', config);
    return config;
  },
  error => {
    console.log('axios response error =>', error.response || error);
    return Promise.reject(error);
  },
);

const getFormData = object => {
  const formData = new FormData();
  Object.keys(object).forEach(key => formData.append(key, object[key]));
  return formData;
};

const APICall = async (
  method = 'post',
  body,
  url = null,
  headers = null,
  formData = false,
) => {
  const config = {
    method: method.toLowerCase(),
    timeout: 1000 * 60 * 2,
  };
  if (url) {
    config.url = url;
  }
  if (
    body &&
    (method.toLowerCase() === 'get' || method.toLowerCase() === 'delete')
  ) {
    config.params = body;
  } else if (body && method.toLowerCase() === 'post' && !formData) {
    config.data = body;
  } else if (body && method.toLowerCase() === 'post' && formData) {
    config.data = getFormData(body);
  } else {
    config.data = body;
  }
  if (headers) {
    config.headers = headers;
  }

  return new Promise(resolve => {
    axiosInstance(config)
      .then(res => resolve({statusCode: res.status, data: res.data}))
      .catch(error => {
        if (!global.isInternet) {
          Utility.showToast('No Internet Connection.');
          resolve({statusCode: 400});
          return;
        }
        if (error.response) {
          if (error.response.status === 502 || error.response.status === 404) {
            Utility.showToast('Something went wrong, Please try again later.');
          }
          if (error.response.data?.message) {
            // Utility.showToast(error.response.data.message)
          }

          resolve({
            statusCode: error.response.status,
            data: error.response.data,
          });
          return;
        }
        if (error.code === 'ECONNABORTED') {
          Utility.showToast(
            'Request timeout. Please check your internet connection',
          );
          resolve({statusCode: 400});
          return;
        }
        Utility.showToast('Something went wrong, Please try again later.');
        resolve({statusCode: 400});
      });
  });
};

export default APICall;
