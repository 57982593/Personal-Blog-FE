function RecursiveComponent() {
  const treeData = [{
    key: 0, //标识唯一性
    title: "全国", //节点名称显示
    expand: true,
    children: [
      //子节点数组
      {
        key: 6,
        title: "北方区域",
        expand: true,
        children: [
          {
            key: 1,
            title: "黑龙江省",
            expand: true,
            children: [
              {
                key: 6,
                title: "哈尔滨",
              },
            ],
          },
          {
            key: 2,
            title: "北京",
          },
        ],
      },
      {
        key: 3,
        title: "南方区域",
        expand: false,
        children: [
          {
            key: 4,
            title: "上海",
          },
          {
            key: 5,
            title: "深圳",
          },
        ],
      },
    ],
  }];

  return (
    <>
    <h1>递归组件</h1>
    <TreeNode data={treeData}/>
    </>
  );
}

interface TreeNodeType {
  data: any[]
}

function TreeNode (props: TreeNodeType) {
  const { data } = props;

  return (
    <>
      {data.map((item: any) => {
        return (
        <div key={item.key}>
          <h2>{item.title}</h2>
          {item.expand && (<div style={{marginLeft: '24px'}}>
            { item.children && <TreeNode data={item.children}/> }  
          </div>)}  
        </div>);
      })}
    </>
  );
};

export default RecursiveComponent;