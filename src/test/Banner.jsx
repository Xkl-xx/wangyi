/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SearchBar, Image } from 'antd-mobile';
import { MenuOutlined, ScanOutlined } from '@ant-design/icons';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export default function Banner() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get('https://netease-cloud-music-api-five-roan-88.vercel.app/homepage/block/page/')
      .then((res) => {
        // console.log(res.data.data.blocks[0].extInfo.banners);
        setList(res.data.data.blocks[0].extInfo.banners.map((item) => item));
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  const items = list.map((item, index) => (
    <Swiper.Item key={index}>
      <div className=" w-[100%] h-[135px] m-[auto] rounded-[12px]">
        <Image src={item.pic} className=" rounded-[12px]" />
      </div>
    </Swiper.Item>
  ));
  return (
    <>
      <div className=" w-[100%] h-[75px] p-[11.25px_11.25px_11.25px_3.75px] flex justify-between items-center box-border">
        <span className=" w-[37.5px] h-[37.5px] flex items-center justify-center">
          <Link to="/Login">
            <span className="w-[27px] h-[27px] text-black">
              <MenuOutlined className=" text-[18.75px]" />
            </span>
          </Link>
        </span>
        <div className=" w-[281.25px] h-[37.5px] rounded-[20px] justify-between flex items-center bg-gradient-to-r from-[#d9ddfd] to-[#f3d9ef] border-[2px] border-[#d9ddfd] relative box-border">
          <Link to="/Search">
            <SearchBar
              placeholder="Love Is Gone (Acoustic)"
              style={{
                '--border-radius': '100px',
                '--background': 'inherit',
                '--height': '37.5px',
                '--padding-left': '12px',
              }}
            />
          </Link>
          <span className=" w-[16.75px] h-[16.75px] mr-[15px] flex items-center justify-center absolute right-0">
            <ScanOutlined className=" text-[12px]" />
          </span>
        </div>
        <span className=" w-[30px] h-[30px] flex items-center justify-center">
          <Icon icon="mdi:microphone-outline" className=" text-[27px]" />
        </span>
      </div>
      <div className=" px-[18.5px] box-border">
        <Swiper autoplay loop>
          {items}
        </Swiper>
      </div>
    </>
  );
}
