import grpcWeb from '../proto/root_grpc_web_pb';
const {RootClient}: any = grpcWeb;
const client = new RootClient(process.env.REACT_APP_REQUEST_URL);

interface RpcResponseType {
  array: any[],
  arrayIndexOffset_: number,
  convertedPrimitiveFields_: any,
  messageId_: number | string | undefined,
  pivot_: number,
  wrappers_: any,
}

function useRequest() {
  async function rpcRequest<T>(params: T, key: string) {
    return new Promise((resolve, reject) => {
      client[key](params, null, (err: any, res: RpcResponseType) => {
        if (err) {
          reject(err);
        }
        if (res) {
          resolve(res);
        }
      });
    }).catch((err:Error) => {
      console.log('【error】',err);
    });
  }

  return {
    grpcWeb,
    rpcRequest,
  };
}

export {
  useRequest
};
export type { RpcResponseType };

