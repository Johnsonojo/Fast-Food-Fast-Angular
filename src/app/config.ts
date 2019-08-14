function makeAppConfig() {
  return {
    base_url: 'https://fast-food-fast-20188.herokuapp.com/api/v1/',
  };
}

export enum HttpMethods {
  GET = 'get',
  PUT = 'put',
  POST = 'post',
  DELETE = 'delete',
}

export const appConfig = makeAppConfig();
