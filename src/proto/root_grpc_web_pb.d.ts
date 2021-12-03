import * as grpcWeb from 'grpc-web';

import * as root_pb from './root_pb';


export class RootClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createUser(
    request: root_pb.CreateUserReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: root_pb.CreateUserRes) => void
  ): grpcWeb.ClientReadableStream<root_pb.CreateUserRes>;

}

export class RootPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createUser(
    request: root_pb.CreateUserReq,
    metadata?: grpcWeb.Metadata
  ): Promise<root_pb.CreateUserRes>;

}

