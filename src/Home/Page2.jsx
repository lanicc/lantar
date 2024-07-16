import React from 'react';
import {OverPack} from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

function Page2() {
  return (
    <div className="home-page page2">
      <div className="home-page-wrapper">
        <div className="title-line-wrapper page2-line">
          <div className="title-line" />
        </div>
        <h2>联系我们</h2>
        <OverPack>
          <QueueAnim key="queue" type="bottom" leaveReverse className="page2-content">
            <p key="p" className="page-content">
              我们组建了一支以产品经理、设计师以及经验丰富的软件工程师
              致力于为客户提供价值
            </p>
            <a href="mailto://921246329@qq.com">921246329@qq.com</a>
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
}

export default Page2;
