import grpcWeb from '../proto/root_grpc_web_pb';

const { RootClient }: any = grpcWeb;
const client = new RootClient(process.env.REACT_APP_REQUEST_URL);
export function useRequest() {
  function rpcRequest(params: any, key: string) {
      return client[key](params, null, (err: any, res: any) => {
       return err || res;
      });
  }
  return {
    grpcWeb,
    rpcRequest,
  };
}
