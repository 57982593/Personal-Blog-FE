import grpcWeb from '../proto/root_grpc_web_pb.js';
const { RootClient }: any = grpcWeb;
const client = new RootClient('http://127.0.0.1:50051');
export function useRequest() {
  function rpcRequest(send:any,key:string) {
    client[key](send,(err: any,res: any) => {
      console.log(err||res);
    });
  }
  return {
    grpcWeb,
    rpcRequest,
  };
}
