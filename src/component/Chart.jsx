import React from 'react';
import ChartCard from './ChartCard';




const Chart = () => {
  return (
    <div>
      <ChartCard title={"Followers over time"} stepSize={20000} donnes={[20000,50000,30000,60000]} d={1000} m={"k"} />
      <ChartCard title={"Avg engagement over time"} stepSize={15} donnes={[20,50,30,60]} d={1} m={"%"} />
    </div>
  );
};

export default Chart;
