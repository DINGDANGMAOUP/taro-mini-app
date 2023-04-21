/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！

declare namespace API_TYPE {

  /**
   *   private boolean success;
   *   private String errCode;
   *   private String errMessage;
   */
  interface Response {
    success: boolean;
    errCode: string;
    errMessage: string;
  }
  interface SingleResponse<T> extends Response {
    data: T;
  }
  interface MultiResponse<T> extends Response {
    data: T[];
  }
}
