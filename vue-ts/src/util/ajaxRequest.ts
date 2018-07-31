/**
 * 基于ajax的封装类
 */
import * as $ from 'jquery';

interface Options {
  url: string;
  method: string;
}

class AjaxRequest {
  public static createAjaxRequest(options: Options) {
    return (payload: any, successCallback ?: any, errorCallBack ?: any) => {
      $.ajax({
        url: options.url,
        type: options.method,
        contentType: 'application/x-www-form-urlencoded',
        data: payload,
        success(data: any) {
          if (typeof successCallback !== undefined) {
            successCallback(data);
          }
        },
        error(err: any) {
            if (typeof errorCallBack !== undefined) {
                errorCallBack(err);
            }
        },
      });
    };
  }
}

export default AjaxRequest;
