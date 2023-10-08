/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper } from 'antd-mobile';
import { RightOutline } from 'antd-mobile-icons';
import { MoreOutlined } from '@ant-design/icons';

export default function Charts() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get('https://netease-cloud-music-api-five-roan-88.vercel.app/homepage/block/page/')
      .then((res) => {
        // console.log(res.data.data.blocks[3].creatives);
        setList(res.data.data.blocks[3].creatives.map((item) => item));
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  const items = list.map((item, index) => (
    <Swiper.Item key={index}>
      <div className=" w-[330px] h-[276px] p-[15px_0] bg-[white] rounded-[12px] box-border">
        <div className=" w-[330px] h-[45px] flex justify-between items-center p-[0_18.75px_0_7.5px] box-border">
          <span className=" text-[15px] text-[#374d5b] font-bold flex items-center">
            {item.uiElement.mainTitle.title}
            <RightOutline className=" text-[12px]" />
          </span>
          <span className=" text-[16px] text-[#939ba1]">{item.uiElement.mainTitle.titleDesc}</span>
        </div>
        {item.resources.map((value, i) => (
          <div key={i}>
            <div className=" w-[322.5px] h-[54.375px] mt-[10.125px] ml-[7.5px] flex ">
              <img
                src={value.uiElement.image.imageUrl}
                alt=""
                className=" w-[54.38px] h-[54.38px] rounded-[12px]"
              />
              <div className=" w-[265px] flex items-center p-[0_21px_0_12px]">
                <div className=" w-[8px] mr-[11.25px]">{i + 1}</div>
                <div className=" w-[150px]">
                  <p className=" text-[14px] text-[#3e465b] line-clamp-1 overflow-hidden">
                    {value.uiElement.mainTitle.title}
                  </p>
                  {value.resourceExtInfo !== null ? (
                    <p className=" text-[12px] text-[#79838f]">
                      {value.resourceExtInfo.artists.map((value1, a) => {
                        return <span key={a}>{value1.name}</span>;
                      })}
                    </p>
                  ) : (
                    <p className=" h-[21px]" />
                  )}
                </div>
                {value.uiElement.labelText.textColor === 'colorPrimary1' ? (
                  <div className=" text-[12px] text-[#ff3836] ml-[15px]">
                    {value.uiElement.labelText.text}
                  </div>
                ) : (
                  <div className=" text-[12px] text-[#39b184] ml-[15px]">
                    {value.uiElement.labelText.text}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Swiper.Item>
  ));

  return (
    <div className=" px-[10px]">
      <div className=" w-[100%] h-[45px] text-[15px] pl-[5px] text-[#374d5b] font-[800] flex justify-between items-center">
        <span className=" flex items-center">
          排行榜
          <RightOutline className=" text-[15px]" />
        </span>
        <span>
          <MoreOutlined />
        </span>
      </div>
      <Swiper indicator={() => null} defaultIndex={0} slideSize={100} stuckAtBoundary={false}>
        {items}
      </Swiper>
    </div>
  );
}
