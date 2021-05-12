// package: root
// file: root.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as root_pb from "./root_pb";

interface IRootService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUser: IRootService_IgetUser;
    getUserList: IRootService_IgetUserList;
}

interface IRootService_IgetUser extends grpc.MethodDefinition<root_pb.getUserRequest, root_pb.getUserReply> {
    path: "/root.Root/getUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<root_pb.getUserRequest>;
    requestDeserialize: grpc.deserialize<root_pb.getUserRequest>;
    responseSerialize: grpc.serialize<root_pb.getUserReply>;
    responseDeserialize: grpc.deserialize<root_pb.getUserReply>;
}
interface IRootService_IgetUserList extends grpc.MethodDefinition<root_pb.getUserListRequest, root_pb.getUserListReply> {
    path: "/root.Root/getUserList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<root_pb.getUserListRequest>;
    requestDeserialize: grpc.deserialize<root_pb.getUserListRequest>;
    responseSerialize: grpc.serialize<root_pb.getUserListReply>;
    responseDeserialize: grpc.deserialize<root_pb.getUserListReply>;
}

export const RootService: IRootService;

export interface IRootServer {
    getUser: grpc.handleUnaryCall<root_pb.getUserRequest, root_pb.getUserReply>;
    getUserList: grpc.handleUnaryCall<root_pb.getUserListRequest, root_pb.getUserListReply>;
}

export interface IRootClient {
    getUser(request: root_pb.getUserRequest, callback: (error: grpc.ServiceError | null, response: root_pb.getUserReply) => void): grpc.ClientUnaryCall;
    getUser(request: root_pb.getUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: root_pb.getUserReply) => void): grpc.ClientUnaryCall;
    getUser(request: root_pb.getUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: root_pb.getUserReply) => void): grpc.ClientUnaryCall;
    getUserList(request: root_pb.getUserListRequest, callback: (error: grpc.ServiceError | null, response: root_pb.getUserListReply) => void): grpc.ClientUnaryCall;
    getUserList(request: root_pb.getUserListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: root_pb.getUserListReply) => void): grpc.ClientUnaryCall;
    getUserList(request: root_pb.getUserListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: root_pb.getUserListReply) => void): grpc.ClientUnaryCall;
}

export class RootClient extends grpc.Client implements IRootClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getUser(request: root_pb.getUserRequest, callback: (error: grpc.ServiceError | null, response: root_pb.getUserReply) => void): grpc.ClientUnaryCall;
    public getUser(request: root_pb.getUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: root_pb.getUserReply) => void): grpc.ClientUnaryCall;
    public getUser(request: root_pb.getUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: root_pb.getUserReply) => void): grpc.ClientUnaryCall;
    public getUserList(request: root_pb.getUserListRequest, callback: (error: grpc.ServiceError | null, response: root_pb.getUserListReply) => void): grpc.ClientUnaryCall;
    public getUserList(request: root_pb.getUserListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: root_pb.getUserListReply) => void): grpc.ClientUnaryCall;
    public getUserList(request: root_pb.getUserListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: root_pb.getUserListReply) => void): grpc.ClientUnaryCall;
}
