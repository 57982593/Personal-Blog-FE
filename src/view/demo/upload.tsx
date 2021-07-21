import React, {useState} from "react";
import {Upload, Modal, Button, message} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import {UploadRequestOption} from 'rc-upload/lib/interface';
import {UploadChangeParam} from "antd/es/upload";
import {useBaseStyle} from "../../assets/hooks/style";
import {UploadFile} from "antd/es/upload/interface";

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
  function showModel () {
    setModalVisible(true);
  }
  function handleOk () {
    console.log(fileList);
    setModalVisible(false);
  }
  function handleCancel () {
    setModalVisible(false);
  }
  return (
      <div className={`${layoutVerticalCenter} ${layoutHeight100}`}>
        <Button type="primary" icon={<UploadOutlined />} onClick={() => showModel()}>Upload Button</Button>
        <Modal title="Upload"
               visible={isModalVisible}
               onOk={() => handleOk()}
               onCancel={() => handleCancel()}>
          <Upload {...props}>
            <Button type={"dashed"}>
              Click Upload
            </Button>
          </Upload>
        </Modal>
      </div>
  )
};
export {
  UploadExample,
}
