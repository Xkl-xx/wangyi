/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper } from 'antd-mobile';
import { RightOutline } from 'antd-mobile-icons';
import { MoreOutlined } from '@ant-design/icons';

export default function Topic() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://netease-cloud-music-api-five-roan-88.vercel.app/topic/detail/event/hot?actid=111551188',
      )
      .then((res) => {
        // console.log(res.data.events);
        setList(res.data.events.map((item) => item));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const items = list.map((item, index) => (
    <Swiper.Item key={index}>
      <div className=" w-[237px] h-[105px] p-[15px_11.25px] box-border mr-[10px] rounded-[12px] bg-[#949494]">
        <p className=" text-[15px] m-0 text-[#ffffff]">{item.user.nickname}</p>
        <div className=" flex justify-between items-end">
          <div className=" flex flex-col justify-between">
            <span className=" text-[12px] text-[#d7d7d7]">484万热度</span>
            <p className=" w-[157.5px] h-[37.5px] leading-[18px] text-[12px] text-[#ffffff] m-0 line-clamp-2 overflow-hidden">
              {item.user.signature}
            </p>
          </div>
          <img src={item.user.avatarUrl} alt="" className=" w-[52px] h-[52px] rounded-[12px]" />
        </div>
      </div>
    </Swiper.Item>
  ));

  return (
    <div className=" px-[10px]">
      <div className=" w-[100%] h-[45px] text-[15px] text-[#374d5b] font-[800] flex justify-between px-[5px] items-center">
        <span className=" flex items-center">
          热门话题
          <RightOutline className=" text-[15px]" />
        </span>
        <span>
          <MoreOutlined />
        </span>
      </div>
      <Swiper indicator={() => null} defaultIndex={0} slideSize={75} stuckAtBoundary={false}>
        {items}
      </Swiper>
    </div>
  );
}
