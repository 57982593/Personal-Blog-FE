import {useRequest} from '../../assets/hooks/request';

export function useHomeRequest() {
  const { rpcRequest, grpcWeb }: any = useRequest();
  function getUserList () {
    const params = new grpcWeb.getUserListRequest();
    params.setOffset(1);
    params.setLimit(10);
    rpcRequest(params, 'getUserList')
  }
  return {
    getUserList,
  };
}
