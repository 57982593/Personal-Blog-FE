import {useRequest} from '../assets/hooks/request';

export function useHomeRequest() {
  const { rpcRequest, grpcWeb }: any = useRequest();
  function getUserList () {
    const params = new grpcWeb.getUserListRequest();
    params.setOffset(1);
    params.setLimit(10);
    return rpcRequest(params, 'getUserList')
  }
  function getUser(id: number) {
    const params = new grpcWeb.getUserRequest();
    params.setId(id);
    return rpcRequest(params, 'getUser');
  }
  function sayHello() {
    const params = new grpcWeb.HelloRequest();
    params.setName('test');
    return rpcRequest(params, 'sayHello');
  }
  return {
    getUserList,
    getUser,
    sayHello,
  };
}
