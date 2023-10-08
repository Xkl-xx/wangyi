import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper } from 'antd-mobile';

export default function Nav() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get('https://netease-cloud-music-api-five-roan-88.vercel.app/homepage/dragon/ball?cookie=')
      .then((res) => {
        // console.log(res.data.data);
        setList(res.data.data.map((item) => item));
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  const items = list.map((item, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <Swiper.Item key={index}>
      <div className=" w-[60px] h-[80px] rounded-[12px] flex flex-col justify-evenly items-center">
        <img
          src={item.iconUrl}
          alt=""
          className=" w-[50px] h-[50px]"
          style={{
            filter:
              'url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27><filter id=%27colorize%27><feColorMatrix type=%27matrix%27 values=%271 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0%27/></filter></svg>#colorize")',
          }}
        />
        <span className=" text-[12px] text-[#666f7d]">{item.name}</span>
      </div>
    </Swiper.Item>
  ));

  return (
    <div className=" px-[15px]">
      <Swiper indicator={() => null} slideSize={20} defaultIndex={0}>
        {items}
      </Swiper>
    </div>
  );
}
