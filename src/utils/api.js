import axios from 'axios';

export const callRestApiGet = requestData => {
  return axios
    .get(requestData)
    .then(result => {
      // console.info('result data api: ', result.data);
      if (result.status === 200) {
        return result.data;
      } else {
        return null;
      }
    })
    .catch(ex => {
      console.info('exception occured: ', ex);
      return -1;
    });
};
