/**
 * title: 基础用法
 * desc: 选择日期 触发 onChange事件 返回当前时间。
 */

import React from 'react';
import dayjs from 'dayjs';
import { Calendar } from 'uiComponents';

export default () => {
  let curDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
  let getValue = (val) => {
    console.log(val);
  };
  return (
    <div>
      <Calendar value={dayjs(curDate)} onChange={getValue} />
    </div>
  );
};
