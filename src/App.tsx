import React from 'react';
import { ChartComponent, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Category } from '@syncfusion/ej2-react-charts';
import { salseData } from './data';
import './App.css';
function App() {
  return (
    <div style={{textAlign:"center"}}>
      <ChartComponent title="Sales Analysis" width="600"
      // , isIndexed: true to show dulpicate category axis label 
      primaryXAxis={{valueType:"Category", minimum:5, maximum:11, interval: 2, labelPlacement:"OnTicks", edgeLabelPlacement:"Shift"}} > 
      <Inject services={[LineSeries, Category]}></Inject>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={salseData} xName="month" yName="sales" type="Line" name="Sales"
        ></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  );
}

export default App;
