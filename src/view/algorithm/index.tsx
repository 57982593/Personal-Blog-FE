import React,{ useEffect } from "react";
const Algorithm = () => {
  const list = [1,2,3,4,5];
  const reverseList = function (head: number[]) {
    let prev = null;
    let curr: any = head;
    while (curr) {
      const next = curr.next;
      console.log('curr:', next);
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  };
  useEffect(() => {
    console.log(reverseList(list));
  });
  return (
      <h1>链表反转算法</h1>
  );
};
export {
  Algorithm,
}
