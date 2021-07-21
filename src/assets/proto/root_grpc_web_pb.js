/**
 * @fileoverview gRPC-Web generated client stub for root
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.root = require('./root_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.root.RootClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.root.RootPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.root.GetUserRequest,
 *   !proto.root.GetUserReply>}
 */
const methodDescriptor_Root_getUser = new grpc.web.MethodDescriptor(
  '/root.Root/getUser',
  grpc.web.MethodType.UNARY,
  proto.root.GetUserRequest,
  proto.root.GetUserReply,
  /**
   * @param {!proto.root.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.root.GetUserReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.root.GetUserRequest,
 *   !proto.root.GetUserReply>}
 */
const methodInfo_Root_getUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.root.GetUserReply,
  /**
   * @param {!proto.root.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.root.GetUserReply.deserializeBinary
);


/**
 * @param {!proto.root.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.root.GetUserReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.root.GetUserReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.root.RootClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/root.Root/getUser',
      request,
      metadata || {},
      methodDescriptor_Root_getUser,
      callback);
};


/**
 * @param {!proto.root.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.root.GetUserReply>}
 *     Promise that resolves to the response
 */
proto.root.RootPromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/root.Root/getUser',
      request,
      metadata || {},
      methodDescriptor_Root_getUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.root.GetUserListRequest,
 *   !proto.root.GetUserListReply>}
 */
const methodDescriptor_Root_getUserList = new grpc.web.MethodDescriptor(
  '/root.Root/getUserList',
  grpc.web.MethodType.UNARY,
  proto.root.GetUserListRequest,
  proto.root.GetUserListReply,
  /**
   * @param {!proto.root.GetUserListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.root.GetUserListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.root.GetUserListRequest,
 *   !proto.root.GetUserListReply>}
 */
const methodInfo_Root_getUserList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.root.GetUserListReply,
  /**
   * @param {!proto.root.GetUserListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.root.GetUserListReply.deserializeBinary
);


/**
 * @param {!proto.root.GetUserListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.root.GetUserListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.root.GetUserListReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.root.RootClient.prototype.getUserList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/root.Root/getUserList',
      request,
      metadata || {},
      methodDescriptor_Root_getUserList,
      callback);
};


/**
 * @param {!proto.root.GetUserListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.root.GetUserListReply>}
 *     Promise that resolves to the response
 */
proto.root.RootPromiseClient.prototype.getUserList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/root.Root/getUserList',
      request,
      metadata || {},
      methodDescriptor_Root_getUserList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.root.DeleteUserRequest,
 *   !proto.root.DeleteUserRespond>}
 */
const methodDescriptor_Root_deleteUser = new grpc.web.MethodDescriptor(
  '/root.Root/deleteUser',
  grpc.web.MethodType.UNARY,
  proto.root.DeleteUserRequest,
  proto.root.DeleteUserRespond,
  /**
   * @param {!proto.root.DeleteUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.root.DeleteUserRespond.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.root.DeleteUserRequest,
 *   !proto.root.DeleteUserRespond>}
 */
const methodInfo_Root_deleteUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.root.DeleteUserRespond,
  /**
   * @param {!proto.root.DeleteUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.root.DeleteUserRespond.deserializeBinary
);


/**
 * @param {!proto.root.DeleteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.root.DeleteUserRespond)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.root.DeleteUserRespond>|undefined}
 *     The XHR Node Readable Stream
 */
proto.root.RootClient.prototype.deleteUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/root.Root/deleteUser',
      request,
      metadata || {},
      methodDescriptor_Root_deleteUser,
      callback);
};


/**
 * @param {!proto.root.DeleteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.root.DeleteUserRespond>}
 *     Promise that resolves to the response
 */
proto.root.RootPromiseClient.prototype.deleteUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/root.Root/deleteUser',
      request,
      metadata || {},
      methodDescriptor_Root_deleteUser);
};


module.exports = proto.root;

