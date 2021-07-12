import React, {useEffect, useState} from "react";
import {useHomeRequest} from "./request";
import { Table, Button } from 'antd';

function UserOperating() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Id',
    },
    {
      title: 'Phone',
      dataIndex: 'Phone',
      key: 'Id',
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Id',
    },
    {
      title: 'Way',
      dataIndex: 'Way',
      key: 'Id',
    },
    {
      title: 'Operating',
      key: 'Id',
      render: (item: any) => (
        <Button type="ghost" onClick={() => {deleteClick(item)}}>删除</Button>
      ),
    },
  ];
  const {getUserList} = useHomeRequest();
  const [userList, setUserList] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const paginationProps = {
    total: count,
    onChange: (page: number, pageSize?: number) => pageChange(page, pageSize),
  };
  function pageChange (page: number, pageSize?: number){
    setPage(page);
    setPageSize(pageSize as number);
  }
  function deleteClick (item: any) {
    console.log(item);
  }
  useEffect(() => {
    function getData () {
      getUserList(page, pageSize).then(({array}: any) => {
        const data = JSON.parse(array[0]);
        setUserList(data);
        setCount(array[1]);
      });
    }
    getData();
  }, [getUserList, page, pageSize]);
  return (
      <div>
        <Table rowKey="Id" pagination={paginationProps} columns={columns} dataSource={userList} />
      </div>
  )
}

export {
  UserOperating,
}
