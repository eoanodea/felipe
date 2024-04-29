async function drawTree() {
  const data = await d3.json("/data");

  const root = d3.stratify()
    .id((d) => d.name)
    .parentId((d) => d.parent)
    (data.data);
  
  const svg = d3.select("#tree")
  .append("svg")
  .attr("width", 700)
  .attr("height", 600)
  .append("g")
  .attr("transform", "translate(100,50)");

  const tree = d3.tree()
    .size([500, 400])
    .separation(() => 1);
  const treeData = tree(root);

  const links =  svg.append("g").selectAll("path")
    .data(treeData.links());
  links.enter().append("path")
    .attr("d", (d) => {
      const halfWay = d.source.y + (d.target.y - d.source.y) / 2;
      return `M ${d.source.y} ${d.source.x} H ${halfWay} V ${d.target.x} H ${d.target.y}`;
    });

  window.selectedElement = null;

  const nodes = svg.append("g").selectAll("g")
    .data(treeData.descendants());
  const nodeEnter = nodes.enter().append("g")
    .attr("transform", (d) => `translate(${d.y},${d.x})`)
    .on("click", (event, d) => {
      if (window.selectedElement) {
        window.selectedElement.classList.remove('selected');
      }
      window.selectedElement = d3.select(event.currentTarget).select("rect").node();
      window.selectedElement.classList.add('selected');
      window.app.selectedNode = d.data;
    });

  nodeEnter.append("rect")
    .attr("x", -75)
    .attr("y", -35);

  nodeEnter.append("text")
    .text(d => d.data.name);
}
drawTree();
