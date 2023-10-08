/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react';
import { SearchBar, Swiper } from 'antd-mobile';
import { Link } from 'react-router-dom';

export default function Search() {
  return (
    <div className=" bg-[#f4f4f4]">
      <Like />
      <AllList />
    </div>
  );
}

function Like() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get('https://netease-cloud-music-api-five-roan-88.vercel.app/search/hot/detail')
      .then((res) => {
        console.log(res.data);
        setList(res.data.data.map((item) => item));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className=" h-[75px] flex justify-between items-center mx-[8px]">
        <Link to="/">
          <Icon icon="iconoir:arrow-left" className=" text-[24px] text-[#283349]" />
        </Link>
        <SearchBar
          placeholder="念-薛之谦"
          style={{
            '--border-radius': '100px',
            '--background': '#ffffff',
            '--height': '37.5px',
            '--padding-left': '12px',
            width: '270px',
          }}
        />
        <span className=" text-[14px] text-[#283349] font-[600]">搜索</span>
      </div>
      <div className=" flex justify-around text-[13px] text-[#000000] font-[600] mt-[12px]">
        <div className=" flex items-center">
          <Icon icon="octicon:person-fill-16" className=" text-[red] text-[18px] mr-[7.5px]" />
          <p className=" m-0">歌手</p>
        </div>
        <div className=" flex items-center">
          <Icon icon="clarity:book-solid" className=" text-[red] text-[18px] mr-[7.5px]" />
          <p className=" m-0">曲风</p>
        </div>
        <div className=" flex items-center">
          <Icon
            icon="fluent-emoji-high-contrast:musical-notes"
            className=" text-[red] text-[18px] mr-[7.5px]"
          />
          <p className=" m-0">专区</p>
        </div>
        <div className=" flex items-center">
          <Icon icon="ph:microphone-fill" className=" text-[red] text-[18px] mr-[7.5px]" />
          <p className=" m-0">识曲</p>
        </div>
      </div>
      <div className=" mt-[18px]">
        <div className=" w-[100%] h-[22.5px] flex justify-between items-center px-[11.25px] box-border">
          <h1 className=" text-[15px] text-[#283349] font-[600]">猜你喜欢</h1>
          <Icon icon="ic:baseline-refresh" className=" text-[21px] text-[#9396a2]" />
        </div>
        <div className=" px-[11.25px] flex flex-wrap">
          {list.slice(0, 5).map((item, index) => (
            <span
              key={index}
              className=" p-[7.5px_11.25px] m-[11.25px_7.5px_0_0] bg-white rounded-[100px]"
            >
              {item.searchWord}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function AllList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get('https://netease-cloud-music-api-five-roan-88.vercel.app/toplist/detail')
      .then((res) => {
        console.log(res.data.list);
        setList(res.data.list.map((item) => item));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const items = list.slice(0, 10).map((item, index) => (
    <Swiper.Item key={index}>
      <div className=" w-[243.75px] bg-white m-[18.75px_0_50px_10px] rounded-[6px]">
        <div className=" w-[202.5px] h-[47px] flex items-center ml-[7.5px] border-b-[1px]">
          <span className=" text-[15px] mx-[15px] line-clamp-1 overflow-hidden">{item.name}</span>
          <div className=" h-[20px] rounded-[100px] bg-[#f3f4f1] px-[7.5px] flex items-center">
            <Icon icon="solar:play-bold" className=" text-[10px]" />
            <span>播放</span>
          </div>
        </div>
        <List id={item.id} />
      </div>
    </Swiper.Item>
  ));
  return (
    <Swiper indicator={() => null} defaultIndex={0} slideSize={70} stuckAtBoundary={false}>
      {items}
    </Swiper>
  );
}

function List(props) {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      // eslint-disable-next-line react/destructuring-assignment, react/prop-types
      .get(`https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail?id=${props.id}`)
      .then((res) => {
        console.log(res.data);
        setList(res.data.playlist.tracks.map((item) => item));
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
  }, [props.id]);
  return (
    <div>
      {list.slice(0, 20).map((item, index) => (
        <div key={index} className=" w-[236.25px] h-[30px] m-[10px_0] flex items-center">
          {index < 3 ? (
            <span className=" w-[33px] text-[12px] text-[#ff0000] text-center">{index + 1}</span>
          ) : (
            <span className=" w-[33px] text-[12px] text-center">{index + 1}</span>
          )}
          <span className=" text-[12px] text-[#2a344b] line-clamp-1 overflow-hidden">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}
