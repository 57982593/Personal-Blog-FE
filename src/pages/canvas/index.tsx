import { useEffect, useState } from 'react';
import './index.css';

function Gannt() {
  const [data] = useState([
    {
      id: 1,
      title: '周一',
    },
    {
      id: 2,
      title: '周二',
    },
    {
      id: 3,
      title: '周三',
    },
    {
      id: 4,
      title: '周四',
    },
    {
      id: 5,
      title: '周五',
    },
    {
      id: 6,
      title: '周六',
    },
    {
      id: 7,
      title: '周日',
    },
  ]);
  const height = 800;

  useEffect(() => {
    function draw() {
      const cellHeight = 8;
      const cellWidth = cellHeight;
      const xLen = data.length;
      const yLen = height / cellHeight;// 总高度/单个高度
      const canvas: any = document.getElementById("canvas");
      
      if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        for(let i=1;i<xLen;i++) {
          // const title = data[i].title;
          // const isSaturday = title.includes('六');
          // const isSunday = title.includes('日');
          ctx.strokeStyle = 'blue';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(i*cellWidth+0.5, 0);
          ctx.lineTo(i*cellHeight+0.5, height+0.5);
          ctx.stroke();
        }
        for(let j=1;j<yLen;j++) {
          ctx.moveTo(0, j*cellHeight+0.5);
          ctx.lineTo(xLen * cellWidth+0.5, j*cellHeight+0.5);
          ctx.stroke();
        }
      }
    }
    draw();
  }, [data])
  
  return <>
    <div style={{fontSize: '1px'}}>
      {/* canvas 只能在标签上设置宽高，如果用css设置宽高会被解析成css同比宽高放大，例子：类似于一张小图片放在一个大的div容器里被拉伸填满div，会导致模糊。 */}
      <canvas id='canvas' width={'900px'} height={'800px'} className={`container`}></canvas>
    </div>
  </>
}

export default Gannt;