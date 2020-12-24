import React, {Component} from 'react'
import * as echarts from 'echarts'

class MyEcharts extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);
  }

  componentDidMount() {
    this.getLineChart();
  }

  // 获取数据
  getLineChart = () => {
    let container = echarts.init(document.querySelector('#container'));
    container.setOption({
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
  }

  render() {
    return (
      <div id="container" style={{width: 500, height: 500}}></div>
    )
  }
}

export default MyEcharts