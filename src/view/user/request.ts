import {useRequest} from '../../assets/hooks/request';

export function useHomeRequest() {
  const { rpcRequest, grpcWeb }: any = useRequest();
  function getUserList (offset: number, limit: number) {
    const offset2 = (offset - 1) * 10;
    const params = new grpcWeb.getUserListRequest();
    params.setOffset(offset2);
    params.setLimit(limit);
    return rpcRequest(params, 'getUserList')
  }
  function getUser(id: number) {
    const params = new grpcWeb.getUserRequest();
    params.setId(id);
    return rpcRequest(params, 'getUser');
  }
  return {
    getUserList,
    getUser,
  };
}
