import {useRequest} from '../../../assets/hooks/request';

export function useHomeRequest() {
  const { rpcRequest, grpcWeb }: any = useRequest();
  function RpcGetUserList (offset: number, limit: number) {
    const offset2 = (offset - 1) * 10;
    const params = new grpcWeb.GetUserListRequest();
    params.setOffset(offset2);
    params.setLimit(limit);
    return rpcRequest(params, 'getUserList')
  }
  function RpcGetUser(id: number) {
    const params = new grpcWeb.GetUserRequest();
    params.setId(id);
    return rpcRequest(params, 'getUser');
  }
  function RpcDeleteUser(id: number) {
    const params = new grpcWeb.DeleteUserRequest();
    params.setUserId(id);
    return rpcRequest(params, 'deleteUser');
  }
  return {
    RpcGetUserList,
    RpcGetUser,
    RpcDeleteUser,
  };
}
