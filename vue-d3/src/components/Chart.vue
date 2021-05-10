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
      labelWidth,
      labelHeight,
      columnWidth,
      columnGap,
      axisLeftLabelPosition,
      unitDivider
    }) {
      const { caseTypes } = this.chartData;

      const svg = d3.select('#svgcontainer').append('svg');

      svg.attr('width', width).attr('height', height);

      const yScale = d3
        .scaleLinear()
        .range([height - verticalPadding, verticalPadding])
        .domain([0, d3.max(caseTypes, (d) => d.totalUnits)]);

      const chartContainer = svg.append('g');
      const axis = chartContainer.append('g');

      axis
        .call(this.createYgridlines(yScale, unitDivider).tickSize(-width))
        .call((line) => this.setAxisLines(line))
        .call((label) => this.setAxisLabels(label, axisLeftLabelPosition))
        .call((g) => this.removeDomain(g));

      const bars = chartContainer
        .append('g')
        .selectAll('rect')
        .data(caseTypes)
        .enter()
        .append('rect');

      bars
        .attr('x', (d, index) => index * (columnWidth + columnGap) + columnGap)
        .attr('y', (d) => yScale(d.totalUnits))
        .attr('width', columnWidth)
        .attr('height', (d) => height - verticalPadding - yScale(d.totalUnits))
        .attr('fill', () => this.generateRandomColor());

      const upperLabel = {
        verticalPosition: (d) => yScale(d.totalUnits) - verticalPadding / 2,
        labelText: (d) => `${Math.round(d.totalUnits / unitDivider)}k Units`
      };
      const lowerLabel = {
        verticalPosition: () => height - verticalPadding,
        labelText: (d) => d.name
      };

      this.addBarLabel(
        {
          chartContainer,
          caseTypes,
          labelWidth,
          labelHeight,
          columnWidth,
          columnGap
        },
        upperLabel
      );

      this.addBarLabel(
        {
          chartContainer,
          caseTypes,
          labelWidth,
          labelHeight,
          columnWidth,
          columnGap
        },
        lowerLabel
      );
    },

    generateRandomColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    },

    createYgridlines(yScale, unitDivider) {
      return d3
        .axisLeft(yScale)
        .ticks(4)
        .tickFormat((d) => d / unitDivider);
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
      {
        chartContainer,
        caseTypes,
        labelWidth,
        labelHeight,
        columnWidth,
        columnGap
      },
      label
    ) {
      const { verticalPosition, labelText } = label;

      const chartLabels = chartContainer
        .append('g')
        .selectAll('foreignObject')
        .data(caseTypes)
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
        .attr('height', labelHeight);

      chartLabels.append('xhtml:p').text(labelText).classed('label', true);
    }
  }
};
</script>

<style>
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
  text-anchor: middle;
}

.axis-lines {
  stroke: #ccc;
  stroke-width: 0.7px;
}
</style>
