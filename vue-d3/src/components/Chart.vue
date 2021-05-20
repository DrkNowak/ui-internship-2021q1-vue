<template>
  <div>
    <div class="svgcontainer">
      <div class="axis-container"></div>
      <div class="chart-container"></div>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3';
import Vue from 'vue';
import _ from 'lodash';

import Menu from '@/components/Menu';
import Tooltip from '@/components/Tooltip';

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

    this.sortByCaseTypesAsc(this.chartData);
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
      lowerLabelHeight,
      axisLeftLines,
      columnWidth,
      columnGap
    }) {
      const { caseTypes } = this.chartData;

      const svg = d3
        .select('.chart-container')
        .style('width', `${width}px`)
        .style('height', `${height}px`)
        .append('svg');

      const chartWidth =
        caseTypes.length * (columnWidth + columnGap) + columnGap;

      svg.attr('width', chartWidth).attr('height', height);

      const chartContainer = svg.append('g');

      const scrollBarPlaceHolder = 20;

      const axis = d3
        .select('.axis-container')
        .style('width', `${width + 40}px`)
        .style('height', `${height - scrollBarPlaceHolder}px`)
        .append('svg')
        .attr('width', chartWidth)
        .attr('height', height - scrollBarPlaceHolder)
        .append('g');

      const yScale = this.createYScale({
        data: caseTypes,
        height,
        verticalPadding
      });

      this.createAxis({ axisContainer: axis, yScale }, chartConfig, {
        axisLeftLines,
        chartWidth
      });

      this.createBars(
        { chartContainer, chartData: caseTypes, yScale, isHover: true },
        chartConfig
      );
      this.createBars(
        { chartContainer, chartData: caseTypes, yScale },
        chartConfig
      );

      const upperLabelConfig = {
        verticalPosition: ({ totalUnits }) =>
          yScale(totalUnits) - upperLabelHeight,
        text: ({ totalUnits }) =>
          `${Math.round(totalUnits / unitDivider)}k Units`,
        height: upperLabelHeight
      };

      const lowerLabelConfig = {
        verticalPosition: () => height - verticalPadding,
        text: ({ name }) => name,
        height: lowerLabelHeight
      };

      this.createBarLabel(
        { chartContainer, data: caseTypes },
        chartConfig,
        upperLabelConfig
      );

      this.createBarLabelWTooltip(
        { chartContainer, data: caseTypes },
        chartConfig,
        lowerLabelConfig
      );

      const contextMenus = this.addContextBarMenus(
        chartContainer,
        caseTypes,
        yScale,
        chartConfig
      );
    },

    removeWhiteSpaces(text) {
      return text.split(' ').join('');
    },

    sortByCaseTypesAsc(data) {
      if (Object.keys(data)) {
        data?.caseTypes.sort(
          (firstDataElement, secondDataElement) =>
            secondDataElement.totalUnits - firstDataElement.totalUnits
        );
      }
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

    createAxis(
      { axisContainer, yScale },
      { unitDivider, axisLabelPositionX, height },
      { axisLeftLines, chartWidth }
    ) {
      axisContainer
        .call(
          this.createYgridlines({
            yScale,
            unitDivider,
            axisLeftLines
          }).tickSize(-chartWidth)
        )
        .call((line) => this.setAxisLines(line))
        .call((label) =>
          this.setAxisLabels(label, {
            axisLabelPositionX,
            axisLeftLines,
            height
          })
        )
        .call((domain) => this.removeDomain(domain));
    },

    createYgridlines({ yScale, unitDivider, axisLeftLines }) {
      const { ticks, maxValue } = axisLeftLines;
      const step = maxValue / ticks;

      return d3
        .axisLeft(yScale.nice())
        .tickValues(_.range(0, maxValue + step, step))
        .tickFormat((chartDataItem) => chartDataItem / unitDivider);
    },

    setAxisLines(line) {
      line.selectAll('line').classed('axis-lines', true);
    },

    setAxisLabels(label, { axisLabelPositionX, axisLeftLines, height }) {
      const ticks = axisLeftLines.ticks + 1;

      label
        .selectAll('text')
        .attr('x', axisLabelPositionX)
        .attr('y', -height / (ticks * ticks))
        .classed('axis-labels', true);
    },

    removeDomain(axis) {
      axis.select('.domain').remove();
    },

    createBars(
      { chartContainer, chartData, yScale, isHover = false },
      { columnWidth, columnGap, verticalPadding, height, upperLabelHeight }
    ) {
      const bars = chartContainer
        .append('g')
        .selectAll('rect')
        .data(chartData)
        .enter()
        .append('rect');

      const hoverId = isHover ? '-hover' : '';
      const barColor = isHover ? 'rgba(0, 0, 177, 0.1)' : 'rgb(0, 0, 77)';
      bars
        .attr(
          'x',
          (chartDataItem, columnIndex) =>
            columnIndex * (columnWidth + columnGap) +
            columnGap -
            (isHover * upperLabelHeight) / 2
        )
        .attr(
          'y',
          ({ totalUnits }) => yScale(totalUnits) - isHover * upperLabelHeight
        )
        .attr('width', columnWidth + isHover * upperLabelHeight)

        .attr(
          'height',
          ({ totalUnits }) =>
            height -
            verticalPadding -
            yScale(totalUnits) +
            isHover * upperLabelHeight
        )
        .attr('fill', barColor)
        .attr(
          'id',
          (chartDataItem) =>
            `bar${hoverId}${this.removeWhiteSpaces(chartDataItem.name)}`
        );

      if (isHover) {
        bars.attr('display', 'none');
      }
    },

    createBarLabel(
      { chartContainer, data },
      { labelWidth, columnWidth, columnGap },
      { verticalPosition, text, height }
    ) {
      const labelContainer = chartContainer
        .append('g')
        .selectAll('foreignObject')
        .data(data)
        .enter()
        .append('foreignObject');

      labelContainer.append('xhtml:div');

      labelContainer
        .attr('x', (chartDataItem, columnIndex) =>
          this.calculateHorizontalLabelPosition(columnIndex, {
            columnWidth,
            columnGap,
            labelWidth
          })
        )
        .attr('y', verticalPosition)
        .attr('width', labelWidth)
        .attr('height', height);

      labelContainer.append('xhtml:p').text(text).classed('label', true);
    },

    calculateHorizontalLabelPosition(
      columnIndex,
      { columnWidth, columnGap, labelWidth }
    ) {
      return (
        columnIndex * (columnWidth + columnGap) +
        columnGap +
        (columnWidth - labelWidth) / 2
      );
    },

    createBarLabelWTooltip(
      { chartContainer, data },
      { labelWidth, columnWidth, columnGap },
      { verticalPosition, height }
    ) {
      const labelContainer = chartContainer
        .append('g')
        .selectAll('foreignObject')
        .data(data)
        .enter()
        .append('foreignObject');

      labelContainer
        .append('xhtml:div')
        .attr(
          'id',
          (chartDataItem, index) =>
            `${this.removeWhiteSpaces(chartDataItem.name)}-label`
        );

      labelContainer
        .attr('x', (chartDataItem, columnIndex) =>
          this.calculateHorizontalLabelPosition(columnIndex, {
            columnWidth,
            columnGap,
            labelWidth
          })
        )
        .attr('y', verticalPosition)
        .attr('width', labelWidth)
        .attr('height', height);

      const tooltipComponent = Vue.extend(Tooltip);

      data.forEach((chartDataItem) => {
        let tooltipInstance = new tooltipComponent({
          propsData: {
            labelName: chartDataItem.name
          }
        });

        tooltipInstance.$slots.default = [chartDataItem.name];
        tooltipInstance.$vuetify = this.$vuetify;
        tooltipInstance.$mount(
          `#${this.removeWhiteSpaces(chartDataItem.name)}-label`
        );
      });
    },

    addContextBarMenus(
      svgContainer,
      data,
      yScale,
      { columnWidth, columnGap, height, verticalPadding }
    ) {
      const menuContainer = svgContainer
        .append('g')
        .selectAll('foreignObject')
        .data(data)
        .enter()
        .append('foreignObject')

        .on('mouseover', (event) =>
          svgContainer
            .select(`#bar-hover${event.target.id}`)
            .attr('display', 'block')
        )
        .on('mouseout', (event) =>
          svgContainer
            .select(`#bar-hover${event.target.id}`)
            .attr('display', 'none')
        );

      menuContainer
        .attr(
          'x',
          (chartDataItem, columnIndex) =>
            columnIndex * (columnWidth + columnGap) + columnGap
        )
        .attr('y', ({ totalUnits }) => yScale(totalUnits))
        .attr('width', columnWidth)
        .attr(
          'height',
          ({ totalUnits }) => height - verticalPadding - yScale(totalUnits)
        );

      menuContainer
        .append('xhtml:div')
        .attr(
          'id',
          (chartDataItem, columnIndex) => `barContextMenu${columnIndex}`
        );

      const menuComponent = Vue.extend(Menu);

      data.forEach((chartDataItem, columnIndex) => {
        let menuInstance = new menuComponent({
          propsData: {
            barId: this.removeWhiteSpaces(chartDataItem.name)
          }
        });

        menuInstance.$vuetify = this.$vuetify;
        menuInstance.$mount(`#barContextMenu${columnIndex}`);
      });
    }
  }
};
</script>

<style lang="scss">
.svgcontainer {
  position: relative;
  margin-left: 100px;
}

.axis-container {
  position: absolute;
  overflow: hidden;
}

.chart-container {
  position: absolute;
  left: 40px;
  overflow-y: hidden;
  overflow-x: scroll;
}

.label {
  font-size: 10px;
  height: 100%;
  text-align: center;
  color: #555;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.axis {
  &-labels {
    stroke: #aaa;
    text-anchor: left;
  }

  &-lines {
    stroke: #ccc;
    stroke-width: 0.7px;
  }
}

::-webkit-scrollbar {
  height: 5px;
}

::-webkit-scrollbar-track {
  background: #ccc;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 10px;
}
</style>
