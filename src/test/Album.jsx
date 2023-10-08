import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper } from 'antd-mobile';
// eslint-disable-next-line import/no-extraneous-dependencies
import { RightOutline } from 'antd-mobile-icons';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MoreOutlined } from '@ant-design/icons';

export default function Album() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get('https://netease-cloud-music-api-five-roan-88.vercel.app/homepage/block/page/')
      .then((res) => {
        // console.log(res.data.data.blocks[2].creatives);
        setList(res.data.data.blocks[2].creatives.map((item) => item));
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  const items = list.map((item, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <Swiper.Item key={index}>
      <div className=" w-[330px] h-[207.75px] flex flex-col justify-evenly items-center">
        {item.resources.map((value, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i}>
            <div className=" w-[322.5px] h-[54.38px] flex">
              <img
                src={value.uiElement.image.imageUrl}
                alt=""
                className=" w-[54.38px] h-[54.38px] rounded-[12px]"
              />
              <div className=" h-[100%] ml-[10px] flex flex-col justify-evenly">
                <p className=" h-[20px] leading-[20px] m-0 text-[#3e465b] ">
                  {value.uiElement.mainTitle.title}
                </p>
                {value.uiElement.subTitle !== undefined ? (
                  <p className=" text-[12px] m-0 text-[#79838f]">
                    {value.uiElement.subTitle.title}
                  </p>
                ) : (
                  <p />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Swiper.Item>
  ));

  return (
    <div className=" mx-[10px]">
      <div className=" w-[100%] h-[45px] text-[15px] pl-[5px] text-[#374d5b] font-[800] flex justify-between items-center">
        <span className=" flex items-center">
          新歌新碟\数字专辑
          <RightOutline className=" text-[15px]" />
        </span>
        <span>
          <MoreOutlined />
        </span>
      </div>
      <Swiper indicator={() => null} defaultIndex={0} slideSize={95} stuckAtBoundary={false}>
        {items}
      </Swiper>
    </div>
  );
}
