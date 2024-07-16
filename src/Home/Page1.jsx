import React from 'react';
import PropTypes from 'prop-types';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

const {TweenOneGroup} = TweenOne;

const featuresCN = [
  {
    title: '网站建设',
    content: '企业建站 定制网站 高端大气',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/BISfzKcCNCYFmTYcUygW.svg',
    color: '#13C2C2',
    shadowColor: 'rgba(19,194,194,.12)',
  },
  {
    title: 'OA办公',
    content: '提高效率 可对接钉钉、企微等',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/smwQOoxCjXVbNAKMqvWk.svg',
    color: '#2F54EB',
    shadowColor: 'rgba(47,84,235,.12)',
  },
  {
    title: '小程序、APP',
    content: '多端小程序开发、网站开发、微信公众号开发、H5开发、App开发',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/hBbIHzUsSbSxrhoRFYzi.svg',
    color: '#F5222D',
    shadowColor: 'rgba(245,34,45,.12)',
  },
  {
    title: 'MES生产信息化',
    content: '制造数据管理、排查调度、生产过程监控',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/BISfzKcCNCYFmTYcUygW.svg',
    color: '#1AC44D',
    shadowColor: 'rgba(26,196,77,.12)',
  },
  {
    title: 'CRM客户管理',
    content: '客户资料管理、合同管理，信息数字化',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/XxqEexmShHOofjMYOCHi.svg',
    color: '#FAAD14',
    shadowColor: 'rgba(250,173,20,.12)',
  },
  {
    title: 'MF-MTS生产追溯系统',
    content: '工艺作业自动记录，精益生产和管理，防错、监控、实时分析和追踪',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/JsixxWSViARJnQbAAPkI.svg',
    color: '#722ED1',
    shadowColor: 'rgba(114,46,209,.12)',
  },
  {
    title: '建设企业数仓系统',
    content: '整合数据，通过数据支撑决策制定过程',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/pbmKMSFpLurLALLNliUQ.svg',
    color: '#FA8C16',
    shadowColor: 'rgba(250,140,22,.12)',
  },
  {
    title: '建设企业数据分析平台',
    content: '通过图表让企业更好的理解过去、分析现状、预测未来',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/aLQyKyUyssIUhHTZqCIb.svg',
    color: '#EB2F96',
    shadowColor: 'rgba(235,45,150,.12)',
  }
];

const pointPos = [
  {x: -30, y: -10},
  {x: 20, y: -20},
  {x: -65, y: 15},
  {x: -45, y: 80},
  {x: 35, y: 5},
  {x: 50, y: 50, opacity: 0.2},
];

class Page1 extends React.PureComponent {
  static propTypes = {
    isMobile: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      hoverNum: null,
    };
  }

  onMouseOver = (i) => {
    this.setState({
      hoverNum: i,
    });
  }
  onMouseOut = () => {
    this.setState({
      hoverNum: null,
    });
  }
  getEnter = (e) => {
    const i = e.index;
    const r = (Math.random() * 2) - 1;
    const y = (Math.random() * 10) + 5;
    const delay = Math.round(Math.random() * (i * 50));
    return [
      {
        delay, opacity: 0.4, ...pointPos[e.index], ease: 'easeOutBack', duration: 300,
      },
      {
        y: r > 0 ? `+=${y}` : `-=${y}`,
        duration: (Math.random() * 1000) + 2000,
        yoyo: true,
        repeat: -1,
      }];
  }

  render() {
    const {hoverNum} = this.state;
    let children = [[], [], []];
    featuresCN.forEach((item, i) => {
      const isHover = hoverNum === i;
      const pointChild = [
        'point-0 left', 'point-0 right',
        'point-ring', 'point-1', 'point-2', 'point-3',
      ].map(className => (
        <TweenOne
          component="i"
          className={className}
          key={className}
          style={{
            background: item.color,
            borderColor: item.color,
          }}
        />
      ));
      const child = (
        <li key={i.toString()}>
          <div
            className="page1-box"
            onMouseEnter={() => {
              this.onMouseOver(i);
            }}
            onMouseLeave={this.onMouseOut}
          >
            <TweenOneGroup
              className="page1-point-wrapper"
              enter={this.getEnter}
              leave={{
                x: 0, y: 30, opacity: 0, duration: 300, ease: 'easeInBack',
              }}
              resetStyleBool={false}
            >
              {(this.props.isMobile || isHover) && pointChild}
            </TweenOneGroup>
            <div
              className="page1-image"
              style={{
                boxShadow: `${isHover ? '0 12px 24px' :
                  '0 6px 12px'} ${item.shadowColor}`,
              }}
            >
              <img src={item.src} alt="img" style={i === 4 ? {marginLeft: -15} : {}} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        </li>
      );
      children[Math.floor(i / 4)].push(child);
    });

    children = children.map((item, i) => (
      <QueueAnim
        className="page1-box-wrapper"
        key={i.toString()}
        type="bottom"
        leaveReverse
        delay={[i * 100, (children.length - 1 - i) * 100]}
        component="ul"
      >
        {item}
      </QueueAnim>
    ));
    return (
      <div className="home-page page1">
        <div className="home-page-wrapper" id="page1-wrapper">
          <h2>我们可以 <span>为您</span> 做什么 </h2>
          <div className="title-line-wrapper page1-line">
            <div className="title-line" />
          </div>
          <OverPack>
            {children}
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Page1;
