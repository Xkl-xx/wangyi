/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react';
import { Tabs } from 'antd-mobile';

export default function Ranking() {
  return (
    <>
      <div className=" w-[100%] h-[46px] p-[11.25px_15px] box-border">
        <p className=" text-[16px] text-[#010101] text-center font-[600] m-0">MV排行榜</p>
      </div>
      <Tabs
        className="text-[#9599a3] "
        style={{
          '--active-line-color': '#ee0a24',
          '--active-title-color': '#2a3146',
          '--title-font-size': '15px',
          '--active-line-height': '3px',
        }}
      >
        <Tabs.Tab title="内地" key="inland">
          <Area area="%E5%86%85%E5%9C%B0" />
        </Tabs.Tab>
        <Tabs.Tab title="港台" key="hongkong">
          <Area area="%E6%B8%AF%E5%8F%B0" />
        </Tabs.Tab>
        <Tabs.Tab title="欧美" key="EA">
          <Area area="%E6%AC%A7%E7%BE%8E" />
        </Tabs.Tab>
        <Tabs.Tab title="韩国" key="Kr">
          <Area area="%E9%9F%A9%E5%9B%BD" />
        </Tabs.Tab>
        <Tabs.Tab title="日本" key="Jp">
          <Area area="%E6%97%A5%E6%9C%AC" />
        </Tabs.Tab>
      </Tabs>
    </>
  );
}

function Area(props) {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get(
        // eslint-disable-next-line react/destructuring-assignment, react/prop-types
        `https://netease-cloud-music-api-five-roan-88.vercel.app/top/mv?limit=50&area=${props.area}`,
      )
      .then((res) => {
        // console.log(res.data.data);
        setList(res.data.data.map((item) => item));
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
  }, [props.area]);

  return (
    <div>
      {list.map((item, index) => (
        <div key={index} className=" w-[345px]">
          <div className=" relative">
            <img
              src={item.cover}
              alt=""
              className=" w-[345px] h-[195px] rounded-[12px] mb-[10px]"
            />
            <div className=" absolute top-[10px] right-[10px] text-white flex items-center">
              <Icon icon="solar:play-bold" />
              {item.playCount >= 100000 ? (
                // eslint-disable-next-line radix
                <span>{parseInt(item.playCount / 10000)}万</span>
              ) : (
                <span>{item.playCount}</span>
              )}
            </div>
          </div>
          <div className=" h-[56px] flex flex-col justify-evenly">
            <p className=" line-clamp-1 overflow-hidden m-0">
              <span className=" text-[16px] text-[#ff0000] mr-[12px]">{index + 1}</span>
              <span className=" text-[15px] text-[#000000] font-[600]">{item.name}</span>
            </p>
            <div className=" text-[12px] text-[#7c7c7c] flex">
              {item.lastRank <= 0 ? (
                <span className=" w-[20px] mr-[12px] flex items-center">new</span>
              ) : index + 1 - item.lastRank === 0 ? (
                <span className=" w-[20px] mr-[12px] flex items-center">-</span>
              ) : index + 1 - item.lastRank <= 0 ? (
                <span className=" w-[20px] mr-[12px] flex items-center">
                  <Icon icon="mdi:menu-up" className=" text-[20px] text-[red]" />
                  {item.lastRank - index + 1}
                </span>
              ) : (
                <span className=" w-[20px] mr-[12px] flex items-center">
                  <Icon icon="mdi:menu-down" className=" text-[20px] text-[green]" />
                  {index + 1 - item.lastRank}
                </span>
              )}
              <div className=" flex-1 line-clamp-1">
                {item.artists.map((value, index) => (
                  <span key={index}>
                    {index === 0 ? <span /> : <span>/</span>}
                    {value.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
