  const shell = require('shelljs');
  const diskPath = process.argv[1].substring(0, 2);
  const inAndOutPath = `${diskPath}/react-web/src/assets/proto/`;
  const protoFileInPath = `${diskPath}/react-web/src/assets/proto/root.proto`;
  shell.exec(`protoc --plugin=protoc-gen-ts=C:/Users/v_zuwwang/AppData/Roaming/npm/protoc-gen-ts.cmd --ts_out=${inAndOutPath} -I=${inAndOutPath} ${protoFileInPath}`);
  shell.exec(`protoc -I=${inAndOutPath} ${protoFileInPath} --js_out=import_style=commonjs:${inAndOutPath} --plugin=protoc-gen-grpc=D:/react-web/public/protoc/protoc-gen-grpc-web.exe --grpc-web_out=import_style=commonjs,mode=grpcwebtext:${inAndOutPath}`);
