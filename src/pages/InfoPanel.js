import React, {Component} from 'react'

import Fragment from '../components/Fragment'

import './index.css'

class InfoPanel extends Component {
  
  render() {
    const staticInfo = {
      yw: {
        name: '业务系统总数',
        count: 213
      },
      sf: {
        name: '三方系统总数',
        count: 882
      },
      jk: {
        name: '接口总请求数',
        count: 439
      },
      qq: {
        name: '请求拦截数',
        count: 4408
      },
      yc: {
        name: '异常行为发现数',
        count: 1
      },
      mg: {
        name: '敏感数据脱敏数',
        count: 1
      }
    };

    return (
      <div id="infoPanel" className="infoPanel">
        <Fragment info={staticInfo.yw} />
        <Fragment info={staticInfo.sf} />
        <Fragment info={staticInfo.jk} />
        <Fragment info={staticInfo.qq} />
        <Fragment info={staticInfo.yc} />
        <Fragment info={staticInfo.mg} />
      </div>
    );
  }
}

export default InfoPanel