import React, {Component} from 'react'
import * as echarts from 'echarts'

import './index.css'

class MyEcharts extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getLineChart();
  }

  // 获取数据
  getLineChart = () => {
    let echartList = document.querySelectorAll('.echart');
    console.log(echartList);
    echartList.forEach(e => {
      let echartfy = echarts.init(e);
      echartfy.setOption({
        title: {
          text: '请求次数'
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
      });
    });
  }

  render() {
    return (
      <div id="container">
        <div className="row">
          <div className="echart" data-name="请求次数"></div>
          <div className="echart"></div>
          <div className="echart"></div>
        </div>
        <div className="row">
          <div className="echart"></div>
          <div className="echart"></div>
          <div className="echart"></div>
        </div>
      </div>
    )
  }
}

export default MyEcharts