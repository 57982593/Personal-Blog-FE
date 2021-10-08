const shell = require('shelljs');
const chalk = require('chalk');
const diskPath = process.argv[1].substring(0, 2);
const inAndOutPath = `${diskPath}/Personal-Blog-FE/src/assets/proto/`;
const protoFileInPath = `${diskPath}/Personal-Blog-FE/src/assets/proto/root.proto`;
shell.exec(`protoc -I=${inAndOutPath} ${protoFileInPath} --js_out=import_style=commonjs:${inAndOutPath} --plugin=protoc-gen-grpc=. --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:${inAndOutPath}`)
console.log(chalk.green(`proto文件生成成功:${inAndOutPath}`));
process.exit(0);
