<template>
  <div>
    <div id="svgcontainer"></div>
  </div>
</template>

<script>
import * as d3 from 'd3';
import chartData from '@/data/chartData';

export default {
  data() {
    return {
      chartProps: {
        width: 1000,
        height: 400,
        verticalPadding: 50,
        horizontalPadding: 30,
        labelWidth: 40,
        labelHeight: 50,
        axisLeftLabelPosition: {
          x: 30,
          y: -12
        },
        unitDivider: 1000
      },
      chartData: {}
    };
  },

  beforeMount() {
    this.chartData = chartData;
  },

  mounted() {
    this.drawChart(this.chartProps);
  },

  methods: {
    drawChart(chartProps) {
      const { caseTypes } = this.chartData;

      const generateRandomColor = () =>
        `#${Math.floor(Math.random() * 16777215).toString(16)}`;

      const svg = d3
        .select('#svgcontainer')
        .append('svg')
        .attr('width', chartProps.width)
        .attr('height', chartProps.height);

      const xScale = d3
        .scaleBand()
        .rangeRound([
          chartProps.horizontalPadding,
          chartProps.width - chartProps.horizontalPadding
        ])
        .padding(0.5)
        .domain(caseTypes.map((d) => d.name));

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(caseTypes, (d) => d.totalUnits)])
        .range([
          chartProps.height - chartProps.verticalPadding,
          chartProps.verticalPadding
        ]);

      const make_y_gridlines = () =>
        d3
          .axisLeft(yScale)
          .ticks(4)
          .tickFormat(function (d) {
            return d / chartProps.unitDivider;
          });

      const chartContainer = svg.append('g');

      const axis = chartContainer
        .append('g')
        .call(make_y_gridlines().tickSize(-chartProps.width))
        .call((g) => {
          g.selectAll('line').classed('axis-lines', true);

          g.selectAll('text')
            .attr('x', chartProps.axisLeftLabelPosition.x)
            .attr('y', chartProps.axisLeftLabelPosition.y)
            .classed('axis-labels', true);
        })
        .call((g) => g.select('.domain').remove());

      const bars = chartContainer
        .append('g')
        .selectAll('rect')
        .data(caseTypes)
        .enter()
        .append('rect')
        .attr('x', (d) => xScale(d.name))
        .attr('y', (d) => yScale(d.totalUnits))
        .attr('width', xScale.bandwidth())
        .attr(
          'height',
          (d) =>
            chartProps.height -
            chartProps.verticalPadding -
            yScale(d.totalUnits)
        )
        .attr('fill', () => generateRandomColor());

      const addBarLabels = ({ verticalPosition, labelText }) => {
        chartContainer
          .append('g')
          .selectAll('foreignObject')
          .data(caseTypes)
          .enter()
          .append('foreignObject')
          .attr(
            'x',
            (d) =>
              xScale(d.name) +
              xScale.bandwidth() / 2 -
              chartProps.labelWidth / 2
          )
          .attr('y', verticalPosition)
          .attr('width', chartProps.labelWidth)
          .attr('height', chartProps.labelHeight)
          .append('xhtml:p')
          .text(labelText)
          .classed('label', true);
      };

      const upperLabel = {
        verticalPosition: (d) =>
          yScale(d.totalUnits) - chartProps.verticalPadding / 2,
        labelText: (d) =>
          `${Math.round(d.totalUnits / chartProps.unitDivider)}k Units`
      };
      const lowerLabel = {
        verticalPosition: (d) => chartProps.height - chartProps.verticalPadding,
        labelText: (d) => d.name
      };

      addBarLabels(upperLabel);
      addBarLabels(lowerLabel);
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
