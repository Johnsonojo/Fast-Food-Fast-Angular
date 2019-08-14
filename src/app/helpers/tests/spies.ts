export const resetSpies = (spies: any[]) => {
  spies.forEach(spyObj => {
    Object.keys(spyObj).forEach(prop => {
      if (typeof spyObj[prop] === 'function') {
        spyObj[prop].calls.reset();
      }
      return;
    });
  });
};

const createSpyObj = (name: string, methods: string[]) => {
  return jasmine.createSpyObj(name, methods);
};

export const authServiceSpy = createSpyObj('AuthService', ['onLogin']);

export const httpClientSpy = createSpyObj('HttpClient', [
  'post',
  'get',
  'put',
  'delete',
]);

export const httpServiceSpy = createSpyObj('HttpService', [
  'makeRequestWithData',
  'getRequest',
]);

export const toasterServiceSpy = createSpyObj('ToasterService', [
  'successToastr',
  'errorToastr',
  'warningToastr',
]);
