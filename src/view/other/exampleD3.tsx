import React, { useEffect } from "react";
import * as d3 from 'd3';

export default function ExampleD3() {
  useEffect(() => {
    const data = [20, 30, 50, 60, 30];
    const attribute = {
      w: 600,
      h: 400,
    }
    const svg = d3.select('#example1')
        .attr('width', attribute.w)
        .attr('height', attribute.h)
    svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', (d, i) => i * 70)
        .attr('y', (d) => attribute.h - (3 * d))
        .attr('width', 65)
        .attr('height', (d) => d * 20)
        .attr('fill', 'pink');

    svg.append('text')
        .text('加个水印')
        .attr('x', -360)
        .attr('y', 60)
        .attr('fill', '#000')
        .attr('transform', 'rotate(-35 240 -400)')
        .attr('fill-opacity', '0.3')
        .attr('font-size', 50);

  });

  return (
      <svg id="example1"></svg>
  )
}
