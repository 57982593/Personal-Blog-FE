import React, {useState} from "react";
import {Upload, Modal, Button} from "antd";
import {useBaseStyle} from "../../../assets/hooks/style";
import {UploadOutlined} from "@ant-design/icons";
import {UploadRequestOption} from 'rc-upload/lib/interface';
import {UploadChangeParam} from "antd/es/upload";
import {UploadFile} from "antd/es/upload/interface";

function Test(props: any) {
  return(
      <h1>{props.name}</h1>
  )
}
const UploadExample = () => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const {layoutVerticalCenter,layoutHeight100} = useBaseStyle();
  const props = {
    name: 'file',
    multiple: true,
    customRequest(param: UploadRequestOption) {
      const { file, onSuccess } = param;
      if (onSuccess) {
        onSuccess(file, {} as XMLHttpRequest);
      }
    },
    onChange(info: UploadChangeParam) {
      setFileList(info.fileList);
    },
  };
  const SIZE = 4 * 1024 * 1024;
  function showModel () {
    console.log(123);
    setModalVisible(true);
  }
  function handleOk () {
    const fileListChunk = fileList.map((item: UploadFile) => {
      const fileChunkList = [];
      let cur = 0;
      if (item.originFileObj) {
        while (cur < item.originFileObj.size) {
          const chunk = item.originFileObj.slice(cur,cur + SIZE);
          fileChunkList.push(chunk);
          cur += SIZE;
        }
      }
      return fileChunkList;
    })
    console.log(fileListChunk);
    setModalVisible(false);
  }
  function handleCancel () {
    setModalVisible(false);
  }
  return (
      <div className={`${layoutVerticalCenter} ${layoutHeight100}`}>
        <Test name={'123456'}/>
        <Test name={'456789'}/>
        <Button
            type="primary"
            icon={<UploadOutlined />}
            onClick={() => showModel()}>
            Upload Button
        </Button>
        <Modal
            title="Upload"
            visible={isModalVisible}
            onOk={() => handleOk()}
            onCancel={() => handleCancel()}>
          <Upload {...props}>
              <Button type={"dashed"}>
                Upload File
              </Button>
          </Upload>
        </Modal>
      </div>
  )
};
export {
  UploadExample,
}
