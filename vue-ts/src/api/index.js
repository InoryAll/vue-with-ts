/**
 * 主要接口
 */
import ajaxRequest from '../util/ajaxRequest';

export const getDataListApi = ajaxRequest.createAjaxRequest({
  url: 'http://localhost:8080/static/data/dataList.json',
  method: 'get',
});

export const getConfigApi = ajaxRequest.createAjaxRequest({
  url: 'http://localhost:8080/data/dataList.json',
  method: 'get',
});
