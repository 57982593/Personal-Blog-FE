import grpcWeb from '../proto/root_grpc_web_pb';

const { RootClient }: any = grpcWeb;
const client = new RootClient('http://127.0.0.1:8089');
export function useRequest() {
  function rpcRequest(params: any, key: string) {
    client[key](params, null, (err: any, res: any) => {
      console.log(err || res);
    });
  }
  return {
    grpcWeb,
    rpcRequest,
  };
}
