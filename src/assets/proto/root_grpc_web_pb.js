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
 *   !proto.root.CreateUserReq,
 *   !proto.root.CreateUserRes>}
 */
const methodDescriptor_Root_createUser = new grpc.web.MethodDescriptor(
  '/root.Root/createUser',
  grpc.web.MethodType.UNARY,
  proto.root.CreateUserReq,
  proto.root.CreateUserRes,
  /**
   * @param {!proto.root.CreateUserReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.root.CreateUserRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.root.CreateUserReq,
 *   !proto.root.CreateUserRes>}
 */
const methodInfo_Root_createUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.root.CreateUserRes,
  /**
   * @param {!proto.root.CreateUserReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.root.CreateUserRes.deserializeBinary
);


/**
 * @param {!proto.root.CreateUserReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.root.CreateUserRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.root.CreateUserRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.root.RootClient.prototype.createUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/root.Root/createUser',
      request,
      metadata || {},
      methodDescriptor_Root_createUser,
      callback);
};


/**
 * @param {!proto.root.CreateUserReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.root.CreateUserRes>}
 *     Promise that resolves to the response
 */
proto.root.RootPromiseClient.prototype.createUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/root.Root/createUser',
      request,
      metadata || {},
      methodDescriptor_Root_createUser);
};


module.exports = proto.root;

