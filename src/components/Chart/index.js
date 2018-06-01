import React from 'react';
import PropTypes from 'prop-types';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import './style.css';

function arrAverage(arr) {
  if (!arr.length) return 0;
  return (arr.reduce((sum, el) => sum+el, 0)/arr.length).toFixed(2);
}

function Chart(props){
  const {data, color='green', width=150, height=150, units=''} = props;
  return (
    <div className="weather-charts">
      <Sparklines
        data={data}
        width={width}
        height={height}
      >
        <SparklinesLine color={color}/>
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
      <div>Average: {arrAverage(data)} {units}</div>
    </div>
  );
}

export default Chart;