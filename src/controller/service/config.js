/*
 * @Author: liang.zhenquan
 * @Date: 2019-11-17 18:12:17
 * @Last Modified by: liang.zhenquan
 * @Last Modified time: 2019-11-24 00:12:29
 */
import axios from 'axios';
import {env, apiUrl,} from '../../app.json';
import message from '@/utils/message';
// 创建实例
const instance = axios.create({
  baseURL: apiUrl[env],
  timeout: 10000,
});
// 请求列表
const requestList = [];
// 取消列表
const {CancelToken,} = axios;
const sources = {};

// 请求拦截处理
instance.interceptors.request.use(
  config => {
    //3.从Storage中获取token并添加到请求头供后端作权限校验
    const token = null;
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

//响应拦截处理
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // 4.处理取消请求
    if (axios.isCancel(error)) {
      requestList.length = 0;
      throw new axios.Cancel('请求关闭！');
    }
    // 5.处理网络请求失败
    if (error.response) {
      switch (error.response.status) {
      case 404:
        message.info('页面丢啦！');
        break;
      case 500:
        message.info('服务器故障！');
        break;
      case 503:
        message.info('服务器繁忙！');
        break;
      default:
        message.info('系统繁忙！');
      }
    } else {
      message.info('系统繁忙！');
    }
    Promise.reject(error);
  });
export const axiosGet = (url, params) => {
  console.log(params);
  new Promise((resolve, reject) => {
    instance
      .get(url, {params,})
      .then(response=> {
        resolve(response);
      })
      .catch(error => {
        console.log('err', error);
        reject(error);
      });
  });
};

export const axiosPost = (url, params) =>
  new Promise((resolve, reject) => {
    instance
      .post(url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });