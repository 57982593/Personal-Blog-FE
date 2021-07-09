import React,{useEffect} from "react";
import {useHomeRequest} from "../request";

const GrpcWeb = () => {
  const { getUser } = useHomeRequest();
  useEffect(() => {
    getUser(15).then((res: any) => {
      console.log(res);
    });
  })
  return (
      <div>用户页面</div>
  );
};

export {
  GrpcWeb,
}
