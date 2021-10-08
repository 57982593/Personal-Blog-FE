import * as jspb from 'google-protobuf'



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

export class CreateUserReq extends jspb.Message {
  getAccount(): string;
  setAccount(value: string): CreateUserReq;

  getPassword(): string;
  setPassword(value: string): CreateUserReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserReq): CreateUserReq.AsObject;
  static serializeBinaryToWriter(message: CreateUserReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserReq;
  static deserializeBinaryFromReader(message: CreateUserReq, reader: jspb.BinaryReader): CreateUserReq;
}

export namespace CreateUserReq {
  export type AsObject = {
    account: string,
    password: string,
  }
}

export class CreateUserRes extends jspb.Message {
  getMsg(): string;
  setMsg(value: string): CreateUserRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRes): CreateUserRes.AsObject;
  static serializeBinaryToWriter(message: CreateUserRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRes;
  static deserializeBinaryFromReader(message: CreateUserRes, reader: jspb.BinaryReader): CreateUserRes;
}

export namespace CreateUserRes {
  export type AsObject = {
    msg: string,
  }
}

