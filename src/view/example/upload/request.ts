import {useRequest} from "../../../assets/hooks/request";

export function useUploadRequest() {
  const { rpcRequest, grpcWeb }: any = useRequest();
  function RpcUploadFile() {
    const params = new grpcWeb.StreamRequest();
    const option = {name: 'test', value: 2020};
    console.log(params);
    params.setPt(option);
    return rpcRequest(params, 'clientUniStream');
  }
  return {
    RpcUploadFile,
  };
}
