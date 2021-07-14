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

export class getUserRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): getUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): getUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: getUserRequest): getUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: getUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): getUserRequest;
    static deserializeBinaryFromReader(message: getUserRequest, reader: jspb.BinaryReader): getUserRequest;
}

export namespace getUserRequest {
    export type AsObject = {
        id: number,
    }
}

export class getUserReply extends jspb.Message { 
    getUser(): string;
    setUser(value: string): getUserReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): getUserReply.AsObject;
    static toObject(includeInstance: boolean, msg: getUserReply): getUserReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: getUserReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): getUserReply;
    static deserializeBinaryFromReader(message: getUserReply, reader: jspb.BinaryReader): getUserReply;
}

export namespace getUserReply {
    export type AsObject = {
        user: string,
    }
}

export class getUserListRequest extends jspb.Message { 
    getOffset(): number;
    setOffset(value: number): getUserListRequest;
    getLimit(): number;
    setLimit(value: number): getUserListRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): getUserListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: getUserListRequest): getUserListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: getUserListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): getUserListRequest;
    static deserializeBinaryFromReader(message: getUserListRequest, reader: jspb.BinaryReader): getUserListRequest;
}

export namespace getUserListRequest {
    export type AsObject = {
        offset: number,
        limit: number,
    }
}

export class getUserListReply extends jspb.Message { 
    getUserlist(): string;
    setUserlist(value: string): getUserListReply;
    getTotal(): number;
    setTotal(value: number): getUserListReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): getUserListReply.AsObject;
    static toObject(includeInstance: boolean, msg: getUserListReply): getUserListReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: getUserListReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): getUserListReply;
    static deserializeBinaryFromReader(message: getUserListReply, reader: jspb.BinaryReader): getUserListReply;
}

export namespace getUserListReply {
    export type AsObject = {
        userlist: string,
        total: number,
    }
}

export class deleteUserRequest extends jspb.Message { 
    getUserId(): number;
    setUserId(value: number): deleteUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): deleteUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: deleteUserRequest): deleteUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: deleteUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): deleteUserRequest;
    static deserializeBinaryFromReader(message: deleteUserRequest, reader: jspb.BinaryReader): deleteUserRequest;
}

export namespace deleteUserRequest {
    export type AsObject = {
        userId: number,
    }
}

export class deleteUserRespond extends jspb.Message { 
    getMsg(): string;
    setMsg(value: string): deleteUserRespond;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): deleteUserRespond.AsObject;
    static toObject(includeInstance: boolean, msg: deleteUserRespond): deleteUserRespond.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: deleteUserRespond, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): deleteUserRespond;
    static deserializeBinaryFromReader(message: deleteUserRespond, reader: jspb.BinaryReader): deleteUserRespond;
}

export namespace deleteUserRespond {
    export type AsObject = {
        msg: string,
    }
}
