// package: root
// file: root.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as root_pb from "./root_pb";

interface IRootService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUser: IRootService_IgetUser;
    getUserList: IRootService_IgetUserList;
    deleteUser: IRootService_IdeleteUser;
    clientUniStream: IRootService_IclientUniStream;
}

interface IRootService_IgetUser extends grpc.MethodDefinition<root_pb.GetUserRequest, root_pb.GetUserReply> {
    path: "/root.Root/getUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<root_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<root_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<root_pb.GetUserReply>;
    responseDeserialize: grpc.deserialize<root_pb.GetUserReply>;
}
interface IRootService_IgetUserList extends grpc.MethodDefinition<root_pb.GetUserListRequest, root_pb.GetUserListReply> {
    path: "/root.Root/getUserList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<root_pb.GetUserListRequest>;
    requestDeserialize: grpc.deserialize<root_pb.GetUserListRequest>;
    responseSerialize: grpc.serialize<root_pb.GetUserListReply>;
    responseDeserialize: grpc.deserialize<root_pb.GetUserListReply>;
}
interface IRootService_IdeleteUser extends grpc.MethodDefinition<root_pb.DeleteUserRequest, root_pb.DeleteUserRespond> {
    path: "/root.Root/deleteUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<root_pb.DeleteUserRequest>;
    requestDeserialize: grpc.deserialize<root_pb.DeleteUserRequest>;
    responseSerialize: grpc.serialize<root_pb.DeleteUserRespond>;
    responseDeserialize: grpc.deserialize<root_pb.DeleteUserRespond>;
}
interface IRootService_IclientUniStream extends grpc.MethodDefinition<root_pb.StreamRequest, root_pb.StreamResponse> {
    path: "/root.Root/clientUniStream";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<root_pb.StreamRequest>;
    requestDeserialize: grpc.deserialize<root_pb.StreamRequest>;
    responseSerialize: grpc.serialize<root_pb.StreamResponse>;
    responseDeserialize: grpc.deserialize<root_pb.StreamResponse>;
}

export const RootService: IRootService;

export interface IRootServer {
    getUser: grpc.handleUnaryCall<root_pb.GetUserRequest, root_pb.GetUserReply>;
    getUserList: grpc.handleUnaryCall<root_pb.GetUserListRequest, root_pb.GetUserListReply>;
    deleteUser: grpc.handleUnaryCall<root_pb.DeleteUserRequest, root_pb.DeleteUserRespond>;
    clientUniStream: grpc.handleClientStreamingCall<root_pb.StreamRequest, root_pb.StreamResponse>;
}

export interface IRootClient {
    getUser(request: root_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: root_pb.GetUserReply) => void): grpc.ClientUnaryCall;
    getUser(request: root_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: root_pb.GetUserReply) => void): grpc.ClientUnaryCall;
    getUser(request: root_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: root_pb.GetUserReply) => void): grpc.ClientUnaryCall;
    getUserList(request: root_pb.GetUserListRequest, callback: (error: grpc.ServiceError | null, response: root_pb.GetUserListReply) => void): grpc.ClientUnaryCall;
    getUserList(request: root_pb.GetUserListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: root_pb.GetUserListReply) => void): grpc.ClientUnaryCall;
    getUserList(request: root_pb.GetUserListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: root_pb.GetUserListReply) => void): grpc.ClientUnaryCall;
    deleteUser(request: root_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: root_pb.DeleteUserRespond) => void): grpc.ClientUnaryCall;
    deleteUser(request: root_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: root_pb.DeleteUserRespond) => void): grpc.ClientUnaryCall;
    deleteUser(request: root_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: root_pb.DeleteUserRespond) => void): grpc.ClientUnaryCall;
    clientUniStream(callback: (error: grpc.ServiceError | null, response: root_pb.StreamResponse) => void): grpc.ClientWritableStream<root_pb.StreamRequest>;
    clientUniStream(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: root_pb.StreamResponse) => void): grpc.ClientWritableStream<root_pb.StreamRequest>;
    clientUniStream(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: root_pb.StreamResponse) => void): grpc.ClientWritableStream<root_pb.StreamRequest>;
    clientUniStream(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: root_pb.StreamResponse) => void): grpc.ClientWritableStream<root_pb.StreamRequest>;
}

export class RootClient extends grpc.Client implements IRootClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getUser(request: root_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: root_pb.GetUserReply) => void): grpc.ClientUnaryCall;
    public getUser(request: root_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: root_pb.GetUserReply) => void): grpc.ClientUnaryCall;
    public getUser(request: root_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: root_pb.GetUserReply) => void): grpc.ClientUnaryCall;
    public getUserList(request: root_pb.GetUserListRequest, callback: (error: grpc.ServiceError | null, response: root_pb.GetUserListReply) => void): grpc.ClientUnaryCall;
    public getUserList(request: root_pb.GetUserListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: root_pb.GetUserListReply) => void): grpc.ClientUnaryCall;
    public getUserList(request: root_pb.GetUserListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: root_pb.GetUserListReply) => void): grpc.ClientUnaryCall;
    public deleteUser(request: root_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: root_pb.DeleteUserRespond) => void): grpc.ClientUnaryCall;
    public deleteUser(request: root_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: root_pb.DeleteUserRespond) => void): grpc.ClientUnaryCall;
    public deleteUser(request: root_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: root_pb.DeleteUserRespond) => void): grpc.ClientUnaryCall;
    public clientUniStream(callback: (error: grpc.ServiceError | null, response: root_pb.StreamResponse) => void): grpc.ClientWritableStream<root_pb.StreamRequest>;
    public clientUniStream(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: root_pb.StreamResponse) => void): grpc.ClientWritableStream<root_pb.StreamRequest>;
    public clientUniStream(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: root_pb.StreamResponse) => void): grpc.ClientWritableStream<root_pb.StreamRequest>;
    public clientUniStream(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: root_pb.StreamResponse) => void): grpc.ClientWritableStream<root_pb.StreamRequest>;
}
