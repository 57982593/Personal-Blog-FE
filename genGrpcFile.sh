#!/usr/bin/env bash

PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts.cmd"
PROTOC_GEN_GRPC_WEB="./src/assets/proto/protoc-gen-grpc-web.exe"
GEN_FILE_PATH="./src/assets/proto"
protoc \
    -I=./ \
    "${GEN_FILE_PATH}"/root.proto \
    --js_out=import_style=commonjs:"${GEN_FILE_PATH}" \
    --plugin=protoc-gen-grpc="${PROTOC_GEN_GRPC_WEB}" \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:"${GEN_FILE_PATH}"

protoc \
    --plugin=protoc-gen-ts="${PROTOC_GEN_TS_PATH}"  \
    --ts_out="${GEN_FILE_PATH}" \
    -I=./ \
    "${GEN_FILE_PATH}"/root.proto

