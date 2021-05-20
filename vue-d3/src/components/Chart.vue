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

      const yScale = this.createYScale({
        data: caseTypes,
        height,
        verticalPadding
      });

      const chartContainer = svg.append('g');

      const axis = chartContainer.append('g');

      this.createAxis({ axisContainer: axis, yScale }, chartConfig);

      this.createBars(
        { chartContainer, chartData: caseTypes, yScale },
        chartConfig
      );

      const upperLabel = {
        verticalPosition: ({ totalUnits }) =>
          yScale(totalUnits) - upperLabelHeight,
        text: ({ totalUnits }) =>
          `${Math.round(totalUnits / unitDivider)}k Units`,
        height: upperLabelHeight
      };

      const lowerLabel = {
        verticalPosition: () => height - verticalPadding,
        text: ({ name }) => name,
        height: lowerLabelHeight
      };

      const upperLabelContainer = this.createBarLabel(
        chartContainer,
        caseTypes
      );

      this.setBarLabel(upperLabelContainer, chartConfig, upperLabel);

      const lowerLabelContainer = this.createBarLabel(
        chartContainer,
        caseTypes
      );

      this.setBarLabel(lowerLabelContainer, chartConfig, lowerLabel);
    },

    createYScale({ data, height, verticalPadding }) {
      return d3
        .scaleLinear()
        .range([height - verticalPadding, verticalPadding])
        .domain([0, d3.max(data, ({ totalUnits }) => totalUnits)]);
    },

    generateRandomColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    },

    createYgridlines(yScale, unitDivider) {
      return d3
        .axisLeft(yScale)
        .ticks(5)
        .tickFormat((chartDataItem) => chartDataItem / unitDivider);
    },

    createAxis(
      { axisContainer, yScale },
      { width, unitDivider, axisLeftLabelPosition }
    ) {
      axisContainer
        .call(this.createYgridlines(yScale, unitDivider).tickSize(-width))
        .call((line) => this.setAxisLines(line))
        .call((label) => this.setAxisLabels(label, axisLeftLabelPosition))
        .call((domain) => this.removeDomain(domain));
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

    createBarLabel(chartContainer, data) {
      return chartContainer
        .append('g')
        .selectAll('foreignObject')
        .data(data)
        .enter()
        .append('foreignObject');
    },

    setBarLabel(
      chartContainer,
      { labelWidth, columnWidth, columnGap },
      { verticalPosition, text, height }
    ) {
      chartContainer
        .attr(
          'x',
          (chartDataItem, index) =>
            index * (columnWidth + columnGap) +
            columnGap +
            (columnWidth - labelWidth) / 2
        )
        .attr('y', verticalPosition)
        .attr('width', labelWidth)
        .attr('height', height);

      chartContainer.append('xhtml:p').text(text).classed('label', true);
    },

    createBars(
      { chartContainer, chartData, yScale },
      { columnWidth, columnGap, verticalPadding, height }
    ) {
      const bars = chartContainer
        .append('g')
        .selectAll('rect')
        .data(chartData)
        .enter()
        .append('rect');

      bars
        .attr(
          'x',
          (chartDataItem, index) =>
            index * (columnWidth + columnGap) + columnGap
        )
        .attr('y', ({ totalUnits }) => yScale(totalUnits))
        .attr('width', columnWidth)

        .attr(
          'height',
          ({ totalUnits }) => height - verticalPadding - yScale(totalUnits)
        )
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
