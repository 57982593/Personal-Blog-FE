import React, {useEffect} from "react";
import * as d3 from "d3";

export default function About() {
  useEffect(() => {
    d3.select("svg").append("circle")
        .attr("cx", 100)
        .attr("cy", 100)
        .attr("r", "50px");
  })

  return (
      <div>
        <h2>d3测试</h2>
        <svg/>
      </div>
  );
}
