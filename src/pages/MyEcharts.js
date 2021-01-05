import React, {Component} from 'react'
import * as echarts from 'echarts'

import './index.css'

class MyEcharts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stackData: []
    };
  }

  componentDidMount() {
    this.getLineChart();
    this.initStackEchart();
  }

  // 获取数据
  getLineChart = () => {
    let echartList = document.querySelectorAll('.echart');
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

  initStackEchart = () => {
    const requestData = [1200, 1320, 1010, 1340, 900, 2300, 2100, 2200, 1320, 3010, 2340, 1900];
    const desensitizationData = [120, 132, 101, 134, 90, 230, 210, 220, 132, 301, 234, 190];
    const interceptData = [8, 12, 11, 14, 9, 20, 12, 20, 32, 11, 24, 19];
    const stackEchart = echarts.init(document.getElementById('stackEchart'));
    const option = {
      title: {
        text: ''
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        },
        formatter: data => {
          let {stackData} = this.state;
          let str = '';
          data.forEach(item => {
            const {seriesName, value} = item;
            let seriesId = '';
            switch (seriesName) {
              case '请求总数':
                seriesId = 'request';
                break;
              case '脱敏总数':
                seriesId = 'desensitization';
                break;
              case '拦截总数':
                seriesId = 'intercept';
                break;
              default:
                break;
            }
            const tmpObj = stackData[seriesId];
            const index = tmpObj['newList'].indexOf(value);
            const res = tmpObj['list'][index];
            str += `${seriesName}: ${res}<br />`
          });
          return str;
        }
      },
      legend: {
        data: ['请求总数', '脱敏总数', '拦截总数']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        }
      ],
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: value => {
            let item = '';
            if (value === 500) {
              item = 10;
            } else if (value === 1000) {
              item = 50;
            } else if (value === 1500) {
              item = 200;
            } else if (value === 2000) {
              item = 500;
            } else if (value === 2500) {
              item = 1000;
            } else if (value === 3000) {
              item = 2000;
            } else {
              item = value;
            }
            return item;
          }
        }
      },
      series: [
        {
          name: '请求总数',
          type: 'line',
          data: this.formatData(requestData, 'request')['newList']
        },
        {
          name: '脱敏总数',
          type: 'line',
          data: this.formatData(desensitizationData, 'desensitization')['newList']
        },
        {
          name: '拦截总数',
          type: 'line',
          data: this.formatData(interceptData, 'intercept')['newList']
        }
      ]
    };

    stackEchart.setOption(option);
  }

  formatData = (list, name) => {
    let {stackData} = this.state;
    let res = {};
    res = {list};
    let newList = [];
    for(let i = 0; i < list.length; i++) {
      let cur = list[i];
      if (cur >= 0 && cur < 10) {
        let tmp1 = (500/10) * cur;
        newList.push(tmp1);
      } else if (cur >= 10 && cur < 50) {
        let tmp2 = (cur - 10)/(50 - 10) * 500 + 500;
        newList.push(tmp2);
      } else if (cur >= 50 && cur < 200) {
        let tmp3 = (cur - 50)/(200 - 50) * 500 + 1000;
        newList.push(tmp3);
      } else if (cur >= 200 && cur < 500) {
        let tmp4 = (cur - 200)/(500 - 200) * 500 + 1500;
        newList.push(tmp4);
      } else if (cur >= 500 && cur < 1000) {
        let tmp5 = (cur - 500)/(1000 - 500) * 500 + 2000;
        newList.push(tmp5);
      } else if (cur >= 1000 && cur < 2000) {
        let tmp6 = (cur - 1000)/( 2000 - 1000) * 500 + 2500;
        newList.push(tmp6);
      } else if (cur >= 2000 && cur < 3500) {
        let tmp7 = (cur - 2000)/(3500 - 2000) * 500 + 3000;
        newList.push(tmp7);
      } else {
        newList.push(cur);
      }
    }
    res.newList = newList;
    stackData[name] = res;

    this.setState({
      stackData
    });
    return res;
  }

  render() {
    return (
      <div id="container">
        <div className="row">
          <div id="stackEchart" style={{width: '100%', height: 400}}></div>          
        </div>
        <div className="row">
          <div className="echart" data-name="请求次数"></div>
          <div className="echart"></div>
          <div className="echart"></div>
        </div>
      </div>
    )
  }
}

export default MyEcharts