/**
 * 主要接口
 */
import AjaxRequest from '@/util/AjaxRequest';

export const getDataListApi = AjaxRequest.createAjaxRequest({
  url: 'http://localhost:8080/static/data/dataList.json',
  method: 'get',
});

export const getConfigApi = AjaxRequest.createAjaxRequest({
  url: 'http://localhost:8080/data/dataList.json',
  method: 'get',
});
