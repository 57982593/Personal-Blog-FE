import grpcWeb from '../proto/root_grpc_web_pb';

const { RootClient }: any = grpcWeb;
const client = new RootClient(process.env.REACT_APP_REQUEST_URL);
export function useRequest() {
  function rpcRequest(params: any, key: string) {
    return new Promise((resolve, reject) => {
      client[key](params, null, (err: any, res: any) => {
        if (err) {
          console.error('请求出错：', err)
          reject(err)
        }
        if (res) {
          resolve(res.array)
        }
      });
    })
  }
  return {
    grpcWeb,
    rpcRequest,
  };
}
