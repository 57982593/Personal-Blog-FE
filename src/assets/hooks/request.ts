import grpcWeb from '../proto/root_grpc_web_pb';
import {message} from "antd";

const {RootClient}: any = grpcWeb;
const client = new RootClient(process.env.REACT_APP_REQUEST_URL);

export function useRequest() {
  async function rpcRequest<T>(params: T, key: string) {
    return new Promise((resolve, reject) => {
      client[key](params, null, (err: any, res: any) => {
        if (err) {
          reject(err);
        }
        if (res) {
          resolve(res);
        }
      });
    }).catch((err:Error) => {
      message.error(err);
    });
  }

  return {
    grpcWeb,
    rpcRequest,
  };
}
