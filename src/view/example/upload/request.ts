import {useRpcRequest} from "../../../assets/hooks/requestConfig";

export function useUploadRequest() {
  const { rpcRequest, grpcWeb }: any = useRpcRequest();
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
