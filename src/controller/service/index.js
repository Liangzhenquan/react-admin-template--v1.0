import {axiosGet,axiosPost,} from './config';

export const get = async (api, data, showLoading = false) => {
  try {
    const params = {
      data,
      showLoading,
    };
    const result = await axiosGet(api,{body: params,});
    console.log(result);
    return result;
  }catch(error) {}
  //  return axiosGet(api, {data: params})
  //  .then(result => {
  //    return result;
  //  })
  //  .catch(() => {});
};

export const post = (api, body, showLoading = false) => {
  const params = {
    body,
    showLoading,
  };
  return axiosPost(api, {data: params,})
    .then(result => {
      return result;
    })
    .catch(() => {});
};