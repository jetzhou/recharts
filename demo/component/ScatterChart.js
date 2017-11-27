import React, { Component } from 'react';
import { ScatterChart, Scatter, CartesianGrid, Tooltip, Legend,
 XAxis, YAxis, ZAxis, ReferenceLine, ReferenceDot, ReferenceArea, ErrorBar,
 LabelList } from 'recharts';
import { changeNumberOfData } from './utils';

const data01 = [
  { x: 100, y: 200, z: 200, errorY: [20, 30], errorX: 30 },
  { x: 120, y: 100, z: 260, errorY: 20, errorX: [20, 30] },
  { x: 170, y: 300, z: 400, errorY: [12, 8], errorX: 20 },
  { x: 140, y: 250, z: 280, errorY: 23, errorX: [12, 8] },
  { x: 150, y: 400, z: 500, errorY: [21, 10], errorX: 23 },
  { x: 110, y: 280, z: 200, errorY: 21, errorX: [21, 10] },
];

const data02 = [
  { x: 200, y: 260, z: 240 },
  { x: 240, y: 290, z: 220 },
  { x: 190, y: 290, z: 250 },
  { x: 198, y: 250, z: 210 },
  { x: 180, y: 280, z: 260 },
  { x: 210, y: 220, z: 230 },
];

const data03 = [
  { x: 10, y: 30 },
  { x: 30, y: 200 },
  { x: 45, y: 100 },
  { x: 50, y: 400 },
  { x: 70, y: 150 },
  { x: 100, y: 250 },
];

const data04 = [
  { x: 30, y: 20 },
  { x: 50, y: 180 },
  { x: 75, y: 240 },
  { x: 100, y: 100 },
  { x: 120, y: 190 },
];

const data05 = [{x: 100, y: 200, z: 200}, {x: 100, y: 100, z: 260},
  {x: 170, y: 300, z: 400}, {x: 140, y: 250, z: 280},
  {x: 150, y: 400, z: 500}, {x: 110, y: 280, z: 200}];

const polygon = [
  { x: 120, y: 200 },
  { x: 140, y: 230 },
  { x: 160, y: 250 },
  { x: 140, y: 300 },
  { x: 100, y: 200 },
];

const initialState = {
  data01,
  data02,
  data03,
  data04,
  data05,
};

export default class Demo extends Component {

  static displayName = 'ScatterChartDemo';

  state = initialState;

  handleChangeData = () => {
    this.setState(() => _.mapValues(initialState, changeNumberOfData));
  };

  render () {
    const { data01, data02, data03, data04 } = this.state;

    return (
      <div className="scatter-charts">
        <a
          href="javascript: void(0);"
          className="btn update"
          onClick={this.handleChangeData}
        >
          change data
        </a>
        <br/>
        <p>Simple ScatterChart</p>
        <div className="scatter-chart-wrapper">
          <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 0, left: 20 }}>
            <XAxis type="number" dataKey="x" name="stature" unit="cm" />
            <YAxis type="number" dataKey="y" name="weight" unit="kg" />
            <CartesianGrid />
            <Tooltip />
            <Legend/>
            <Scatter name="A school" data={data01} fill="#ff7300" label={{ dataKey: 'x' }} />
          </ScatterChart>
        </div>

        <p>ScatterChart of three dimension data</p>
        <div className="scatter-chart-wrapper">
          <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 0, left: 20 }}>
            <XAxis type="number" dataKey="x" name="stature" unit="cm" />
            <YAxis type="number" dataKey="y" name="weight" unit="kg" />
            <ZAxis type="number" dataKey="z" range={[50, 1200]} name="score" unit="km" />
            <CartesianGrid />
            <Scatter name="A school" data={data01} fillOpacity={0.3} fill="#ff7300" />
            <Scatter name="B school" data={data02} fill="#347300" />
            <Tooltip/>
            <Legend/>
            <ReferenceArea x1={250} x2={300} alwaysShow label="any label" />
            <ReferenceLine x={159} stroke="red"/>
            <ReferenceLine y={237.5} stroke="red"/>
            <ReferenceDot x={170} y={290} r={15} label="AB" stroke="none" fill="red" isFront/>
          </ScatterChart>
        </div>

        <p>ScatterChart with customized error bars</p>
        <div className="scatter-chart-wrapper">
          <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 0, left: 20 }}>
            <XAxis type="number" dataKey="x" name="stature" unit="cm" />
            <YAxis type="number" dataKey="y" name="weight" unit="kg" />
            <CartesianGrid />
            <Tooltip />
            <Legend/>
            <Scatter name="A school" data={data01} fill="#ff7300">
              <ErrorBar dataKey="errorY" width={0} strokeWidth={1} stroke="blue" direction="y" />
              <ErrorBar dataKey="errorX" width={4} strokeWidth={2} stroke="green" opacity={0.8} direction="x" />
            </Scatter>
          </ScatterChart>
        </div>

        <p>ScatterChart which has joint line</p>
        <div className="scatter-chart-wrapper">
          <ScatterChart width={800} height={400} margin={{ top: 20, right: 20, bottom: 0, left: 20 }}>
            <XAxis type="number" dataKey="x" name="stature" unit="cm" />
            <YAxis dataKey="y" name="weight" unit="kg" />
            <ZAxis range={[64]} />
            <CartesianGrid />
            <Tooltip cursor={{ stroke: '#808080', strokeDasharray: '5 5' }}/>
            <Legend/>
            <Scatter line lineJointType="monotoneX" shape="wye" legendType="wye" data={data03} fill="#ff7300" />
            <Scatter line shape="square" legendType="square" data={data04} fill="#347300" />
          </ScatterChart>
        </div>

        <p>ScatterChart which has default x-axis</p>
        <div className="scatter-chart-wrapper">
          <ScatterChart width={400} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
            <XAxis dataKey={'x'} name='stature' unit='cm' />
            <YAxis dataKey={'y'} name='weight' unit='kg'/>
            <ZAxis dataKey={'z'} range={[60, 400]} name='score' unit='km'/>
            <CartesianGrid />
            <Tooltip cursor={{strokeDasharray: '3 3'}}/>
            <Legend/>
            <Scatter name='A school' data={data05} legendType="square" fill='#8884d8' shape="square"/>
          </ScatterChart>
        </div>

        <p>Simple ScatterChart with polygon ReferenceArea</p>
        <div className="scatter-chart-wrapper">
          <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 0, left: 20 }}>
            <XAxis type="number" dataKey="x" name="stature" unit="cm" />
            <YAxis type="number" dataKey="y" name="weight" unit="kg" />
            <CartesianGrid />
            <Tooltip />
            <Legend/>
            <Scatter name="A school" data={data01} fill="#ff7300" />
            <ReferenceArea data={polygon} alwaysShow />
          </ScatterChart>
        </div>
      </div>
    );
  }
}
