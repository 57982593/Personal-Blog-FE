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
 *   !proto.root.getUserRequest,
 *   !proto.root.getUserReply>}
 */
const methodDescriptor_Root_getUser = new grpc.web.MethodDescriptor(
  '/root.Root/getUser',
  grpc.web.MethodType.UNARY,
  proto.root.getUserRequest,
  proto.root.getUserReply,
  /**
   * @param {!proto.root.getUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.root.getUserReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.root.getUserRequest,
 *   !proto.root.getUserReply>}
 */
const methodInfo_Root_getUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.root.getUserReply,
  /**
   * @param {!proto.root.getUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.root.getUserReply.deserializeBinary
);


/**
 * @param {!proto.root.getUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.root.getUserReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.root.getUserReply>|undefined}
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
 * @param {!proto.root.getUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.root.getUserReply>}
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
 *   !proto.root.getUserListRequest,
 *   !proto.root.getUserListReply>}
 */
const methodDescriptor_Root_getUserList = new grpc.web.MethodDescriptor(
  '/root.Root/getUserList',
  grpc.web.MethodType.UNARY,
  proto.root.getUserListRequest,
  proto.root.getUserListReply,
  /**
   * @param {!proto.root.getUserListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.root.getUserListReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.root.getUserListRequest,
 *   !proto.root.getUserListReply>}
 */
const methodInfo_Root_getUserList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.root.getUserListReply,
  /**
   * @param {!proto.root.getUserListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.root.getUserListReply.deserializeBinary
);


/**
 * @param {!proto.root.getUserListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.root.getUserListReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.root.getUserListReply>|undefined}
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
 * @param {!proto.root.getUserListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.root.getUserListReply>}
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
 *   !proto.root.HelloRequest,
 *   !proto.root.HelloReply>}
 */
const methodDescriptor_Root_SayHello = new grpc.web.MethodDescriptor(
  '/root.Root/SayHello',
  grpc.web.MethodType.UNARY,
  proto.root.HelloRequest,
  proto.root.HelloReply,
  /**
   * @param {!proto.root.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.root.HelloReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.root.HelloRequest,
 *   !proto.root.HelloReply>}
 */
const methodInfo_Root_SayHello = new grpc.web.AbstractClientBase.MethodInfo(
  proto.root.HelloReply,
  /**
   * @param {!proto.root.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.root.HelloReply.deserializeBinary
);


/**
 * @param {!proto.root.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.root.HelloReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.root.HelloReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.root.RootClient.prototype.sayHello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/root.Root/SayHello',
      request,
      metadata || {},
      methodDescriptor_Root_SayHello,
      callback);
};


/**
 * @param {!proto.root.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.root.HelloReply>}
 *     Promise that resolves to the response
 */
proto.root.RootPromiseClient.prototype.sayHello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/root.Root/SayHello',
      request,
      metadata || {},
      methodDescriptor_Root_SayHello);
};


module.exports = proto.root;

