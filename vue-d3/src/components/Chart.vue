<template>
  <div>
    <div id="svgcontainer"></div>
  </div>
</template>

<script>
import * as d3 from 'd3';

import chartData from '@/chartData/chartData';
import chartConfig from '@/chartConfig/chartConfig';
export default {
  data() {
    return {
      chartData: {}
    };
  },

  beforeMount() {
    this.chartData = chartData;
  },

  mounted() {
    this.drawChart(chartConfig);
  },

  methods: {
    drawChart({
      width,
      height,
      verticalPadding,
      unitDivider,
      upperLabelHeight,
      lowerLabelHeight
    }) {
      const { caseTypes } = this.chartData;

      const svg = d3.select('#svgcontainer').append('svg');

      svg.attr('width', width).attr('height', height);

      const yScale = this.createYScale(caseTypes, height, verticalPadding);

      const chartContainer = svg.append('g');

      const axis = chartContainer.append('g');

      this.createAxis(axis, yScale, chartConfig);

      this.createBars(chartContainer, caseTypes, yScale, chartConfig);

      const upperLabel = {
        verticalPosition: (d) => yScale(d.totalUnits) - upperLabelHeight,
        text: (d) => `${Math.round(d.totalUnits / unitDivider)}k Units`,
        height: upperLabelHeight
      };

      const lowerLabel = {
        verticalPosition: () => height - verticalPadding,
        text: (d) => d.name,
        height: lowerLabelHeight
      };

      this.addBarLabel(chartContainer, caseTypes, chartConfig, upperLabel);

      this.addBarLabel(chartContainer, caseTypes, chartConfig, lowerLabel);
    },

    createYScale(data, height, verticalPadding) {
      return d3
        .scaleLinear()
        .range([height - verticalPadding, verticalPadding])
        .domain([0, d3.max(data, (d) => d.totalUnits)]);
    },

    generateRandomColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    },

    createYgridlines(yScale, unitDivider) {
      return d3
        .axisLeft(yScale)
        .ticks(5)
        .tickFormat((d) => d / unitDivider);
    },

    createAxis(
      axisContainer,
      yScale,
      { width, unitDivider, axisLeftLabelPosition }
    ) {
      axisContainer
        .call(this.createYgridlines(yScale, unitDivider).tickSize(-width))
        .call((line) => this.setAxisLines(line))
        .call((label) => this.setAxisLabels(label, axisLeftLabelPosition))
        .call((g) => this.removeDomain(g));
    },

    setAxisLines(line) {
      line.selectAll('line').classed('axis-lines', true);
    },

    setAxisLabels(label, { x, y }) {
      label
        .selectAll('text')
        .attr('x', x)
        .attr('y', y)
        .classed('axis-labels', true);
    },

    removeDomain(axis) {
      axis.select('.domain').remove();
    },

    addBarLabel(
      chartContainer,
      data,
      { labelWidth, columnWidth, columnGap },
      { verticalPosition, text, height }
    ) {
      const chartLabels = chartContainer
        .append('g')
        .selectAll('foreignObject')
        .data(data)
        .enter()
        .append('foreignObject');

      chartLabels
        .attr(
          'x',
          (d, index) =>
            index * (columnWidth + columnGap) +
            columnGap +
            (columnWidth - labelWidth) / 2
        )
        .attr('y', verticalPosition)
        .attr('width', labelWidth)
        .attr('height', height);

      chartLabels.append('xhtml:p').text(text).classed('label', true);
    },

    createBars(
      svgContainer,
      chartData,
      yScale,
      { columnWidth, columnGap, verticalPadding, height }
    ) {
      const bars = svgContainer
        .append('g')
        .selectAll('rect')
        .data(chartData)
        .enter()
        .append('rect');

      bars
        .attr('x', (d, index) => index * (columnWidth + columnGap) + columnGap)
        .attr('y', (d) => yScale(d.totalUnits))
        .attr('width', columnWidth)

        .attr('height', (d) => height - verticalPadding - yScale(d.totalUnits))
        .attr('fill', () => this.generateRandomColor())
        .classed('bar', true);
    }
  }
};
</script>

<style>
#svgcontainer {
  margin-left: 50px;
}

.bar {
  display: flex;
  background-color: #fff;
}

.label {
  font-size: 10px;
  text-align: center;
  color: black;
}

.axis-labels {
  stroke: #aaa;
  text-anchor: left;
}

.axis-lines {
  stroke: #ccc;
  stroke-width: 0.7px;
}
</style>
