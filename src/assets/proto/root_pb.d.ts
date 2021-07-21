// package: root
// file: root.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class User extends jspb.Message { 
    getId(): number;
    setId(value: number): User;
    getAccount(): string;
    setAccount(value: string): User;
    getWay(): string;
    setWay(value: string): User;
    getName(): string;
    setName(value: string): User;
    getEmail(): string;
    setEmail(value: string): User;
    getPhone(): string;
    setPhone(value: string): User;
    getIsNotify(): number;
    setIsNotify(value: number): User;
    getCreateAt(): number;
    setCreateAt(value: number): User;
    getUpdateAt(): number;
    setUpdateAt(value: number): User;
    getLastLoginAt(): number;
    setLastLoginAt(value: number): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: number,
        account: string,
        way: string,
        name: string,
        email: string,
        phone: string,
        isNotify: number,
        createAt: number,
        updateAt: number,
        lastLoginAt: number,
    }
}

export class StreamPoint extends jspb.Message { 
    getName(): string;
    setName(value: string): StreamPoint;
    getValue(): number;
    setValue(value: number): StreamPoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamPoint.AsObject;
    static toObject(includeInstance: boolean, msg: StreamPoint): StreamPoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamPoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamPoint;
    static deserializeBinaryFromReader(message: StreamPoint, reader: jspb.BinaryReader): StreamPoint;
}

export namespace StreamPoint {
    export type AsObject = {
        name: string,
        value: number,
    }
}

export class StreamRequest extends jspb.Message { 

    hasPt(): boolean;
    clearPt(): void;
    getPt(): StreamPoint | undefined;
    setPt(value?: StreamPoint): StreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StreamRequest): StreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamRequest;
    static deserializeBinaryFromReader(message: StreamRequest, reader: jspb.BinaryReader): StreamRequest;
}

export namespace StreamRequest {
    export type AsObject = {
        pt?: StreamPoint.AsObject,
    }
}

export class StreamResponse extends jspb.Message { 

    hasPt(): boolean;
    clearPt(): void;
    getPt(): StreamPoint | undefined;
    setPt(value?: StreamPoint): StreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StreamResponse): StreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamResponse;
    static deserializeBinaryFromReader(message: StreamResponse, reader: jspb.BinaryReader): StreamResponse;
}

export namespace StreamResponse {
    export type AsObject = {
        pt?: StreamPoint.AsObject,
    }
}

export class GetUserRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): GetUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserRequest;
    static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
    export type AsObject = {
        id: number,
    }
}

export class GetUserReply extends jspb.Message { 
    getUser(): string;
    setUser(value: string): GetUserReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserReply.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserReply): GetUserReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserReply;
    static deserializeBinaryFromReader(message: GetUserReply, reader: jspb.BinaryReader): GetUserReply;
}

export namespace GetUserReply {
    export type AsObject = {
        user: string,
    }
}

export class GetUserListRequest extends jspb.Message { 
    getOffset(): number;
    setOffset(value: number): GetUserListRequest;
    getLimit(): number;
    setLimit(value: number): GetUserListRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserListRequest): GetUserListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserListRequest;
    static deserializeBinaryFromReader(message: GetUserListRequest, reader: jspb.BinaryReader): GetUserListRequest;
}

export namespace GetUserListRequest {
    export type AsObject = {
        offset: number,
        limit: number,
    }
}

export class GetUserListReply extends jspb.Message { 
    getUserlist(): string;
    setUserlist(value: string): GetUserListReply;
    getTotal(): number;
    setTotal(value: number): GetUserListReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserListReply.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserListReply): GetUserListReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserListReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserListReply;
    static deserializeBinaryFromReader(message: GetUserListReply, reader: jspb.BinaryReader): GetUserListReply;
}

export namespace GetUserListReply {
    export type AsObject = {
        userlist: string,
        total: number,
    }
}

export class DeleteUserRequest extends jspb.Message { 
    getUserId(): number;
    setUserId(value: number): DeleteUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteUserRequest): DeleteUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteUserRequest;
    static deserializeBinaryFromReader(message: DeleteUserRequest, reader: jspb.BinaryReader): DeleteUserRequest;
}

export namespace DeleteUserRequest {
    export type AsObject = {
        userId: number,
    }
}

export class DeleteUserRespond extends jspb.Message { 
    getMsg(): string;
    setMsg(value: string): DeleteUserRespond;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteUserRespond.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteUserRespond): DeleteUserRespond.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteUserRespond, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteUserRespond;
    static deserializeBinaryFromReader(message: DeleteUserRespond, reader: jspb.BinaryReader): DeleteUserRespond;
}

export namespace DeleteUserRespond {
    export type AsObject = {
        msg: string,
    }
}
