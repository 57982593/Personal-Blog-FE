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
  const width = 1200;

  useEffect(() => {
    function draw() {
      const cellHeight = 40;
      const cellWidth = 80;
      // 添加0.5像素，防止线条模糊；
      const addNumber = 0.5;
      const yLen = width / cellWidth;
      const xLen = height / cellHeight;
      const canvas: any = document.getElementById("canvas");
      let index = 0;

      canvas.addEventListener("mousemove", mouseMove)
      
      if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        for(let i=1;i<=yLen;i++) {
          if(index > 6) index = 0;
          const title = data[index].title;
          ctx.strokeStyle = 'blue';
          ctx.lineWidth = 1;
        
          ctx.beginPath();
          if(title === '周六') {
            ctx.fillStyle = '#FFA500';
            ctx.fillRect((i-1)*cellWidth + 1, 0, cellWidth * 2 - 1, height);
          }
          ctx.moveTo(i*cellWidth + addNumber, 0);
          ctx.lineTo(i*cellWidth + addNumber, height);
          ctx.stroke();

          ctx.fillStyle = '#000';
          ctx.font = `36px serif`;
          ctx.fillText(title, (i-1)*cellWidth + 5, cellHeight - 5);
          index += 1;
        }
        for(let j=1;j<xLen;j++) {
          ctx.moveTo(0, j*cellHeight + addNumber);
          ctx.lineTo(width, j*cellHeight + addNumber);
          ctx.stroke();
        }
      }
    }
    draw();
  }, [data])

  function mouseMove(event: any) {
    console.log(event);
    const {offsetX, offsetY} = event;
    const box = event.target.getBoundingClientRect();
    // getEventPosition(box,)
  }

  // function checkPointInPolygen(P: any) {
  //   const len = polygenPoints.length
  //   let flag = false
  
  //   for (let i = 0; i < len; i++) {
  //     let A = polygenPoints[i]
  //     let B = polygenPoints[(i + 1) % len]
  //     let sortByY = [A.y, B.y].sort((a, b) => a - b)
  //     let sortByX = [A.x, B.x].sort((a, b) => a - b)
  
  //     // 点与多边形顶点重合
  //     if (
  //       (A.x === P.x && A.y === P.y)
  //       || (B.x === P.x && B.y === P.y) 
  //     ) {
  //       return true
  //     }
      
  //     // 判断线段两端点是否在射线两侧
  //     if (
  //       P.y >= sortByY[0]
  //       && P.y < sortByY[1] 
  //     ) {
  //       // 计算线段上与射线 Y 坐标相同的点的 X 坐标
  //       let interX = B.x + (P.y - B.y) * (A.x - B.x) / (A.y - B.y)
  //       // 点在多边形的边上
  //       if (interX === P.x) {
  //         return true
  //       }
  //       // 射线穿过多边形的边界
  //       if (interX < P.x) {
  //         flag = !flag
  //       }
  //     }
  //   }
    
  //   return flag
  // }
  
  
  return <>
    <div style={{fontSize: '1px'}}>
      {/* canvas 只能在标签上设置宽高，如果用css设置宽高会被解析成css同比宽高放大，例子：类似于一张小图片放在一个大的div容器里被拉伸填满div，会导致模糊。 */}
      <canvas 
        // onClick={(e: any) => mouseMove(e)} 
        id='canvas' width={width} 
        height={height} 
        className={`container`}/>
    </div>
  </>
}

export default Gannt;