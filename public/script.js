import * as d3 from 'd3';

fetch('/data')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
