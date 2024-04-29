async function fetchTreeData() {
  const response = await d3.json("/data");
  if (!Array.isArray(response.data)) {
    throw new Error('Invalid data format: expected an array');
  }
  return response.data;
}

function createTreeRoot(data) {
  return d3.stratify()
    .id((d) => d.name)
    .parentId((d) => d.parent)
    (data);
}

function createSvgContainer() {
  return d3.select("#tree")
    .append("svg")
    .attr("width", 700)
    .attr("height", 600)
    .append("g")
    .attr("transform", "translate(100,50)");
}

function createTreeLayout() {
  return d3.tree()
    .size([500, 400])
    .separation(() => 1);
}

function drawLinks(svgContainer, links) {
  const linkElements = svgContainer.append("g").selectAll("path")
    .data(links);
  linkElements.enter().append("path")
    .attr("d", (d) => {
      const halfWay = d.source.y + (d.target.y - d.source.y) / 2;
      return `M ${d.source.y} ${d.source.x} H ${halfWay} V ${d.target.x} H ${d.target.y}`;
    });
}

function drawNodes(svgContainer, nodes) {
  const nodeElements = svgContainer.append("g").selectAll("g")
    .data(nodes);
  const nodeEnter = nodeElements.enter().append("g")
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
    .attr("y", -35)
    .attr("rx", 4);

  nodeEnter.append("text")
    .text(d => d.data.name);
}

async function drawTree() {
  try {
    const data = await fetchTreeData();
    const treeRoot = createTreeRoot(data);
    const svgContainer = createSvgContainer();
    const treeLayout = createTreeLayout();
    const treeData = treeLayout(treeRoot);

    drawLinks(svgContainer, treeData.links());
    drawNodes(svgContainer, treeData.descendants());
  } catch (error) {
    console.error('Failed to fetch and draw tree:', error);
  }
}

drawTree();
