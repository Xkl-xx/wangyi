/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react';

export default function SongListPage() {
  const [songlist, setSonglist] = useState([]);
  useEffect(() => {
    axios
      .get('https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail?id=8551437697')
      .then((res) => {
        console.log(res.data.playlist);
        setSonglist(res.data.playlist);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className=" w-[100%] h-[262.5px] bg-[#9c264f] px-[15px] box-border">
        <div className=" w-[375px] h-[56.25px] px-[16.875px] box-border bg-inherit flex justify-between items-center fixed top-0 left-0">
          <div className=" flex">
            <Icon icon="carbon:arrow-left" className=" text-[27px] text-white" />
            <span className=" text-[16px] text-white ml-[18px]">歌单</span>
          </div>
          <div className=" flex justify-center items-center text-[27px] text-white">
            <Icon icon="ion:search" className=" mr-[20px] text-[18px]" />
            <Icon icon="formkit:reorder" width="10" />
          </div>
        </div>
        <div className=" pt-[60px] flex justify-between text-white">
          <img src={songlist.coverImgUrl} alt="" className=" w-[90px] h-[90px] rounded-[12px]" />
          <div className=" w-[250px] h-[100px] ml-[5px] pr-[45px] flex flex-col">
            <p className=" text-[13.5px] font-bold m-0">{songlist.name}</p>
            <div className=" flex items-center my-[10px]">
              {/* <img
              src={songlist.creator.avatarUrl}
              alt=""
              className=" w-[22.5px] h-[22.5px] rounded-[100px]"
            />
            <span className=" mx-[7.5px]">{songlist.creator.nickname}</span> */}
              <div className=" w-[60px] h-[27px] bg-[#ffffff33] rounded-[100px] leading-[27px] text-center">
                +关注
              </div>
            </div>
            <div className=" flex">
              {/* {songlist.tags.map((value, index) => (
              <div
                key={index}
                className=" w-[52.5px] h-[24px] mr-[5px] bg-[#ffffff33] flex justify-center items-center text-[12px] rounded-[6px]"
              >
                {value}
                <Icon icon="icon-park-outline:right" />
              </div>
            ))} */}
            </div>
          </div>
        </div>
        <div className=" flex justify-between items-center text-[#ffffff] text-[12px] m-[14px_0_0]">
          <p className=" w-[310px] h-[18px] whitespace-nowrap overflow-hidden m-0 ">
            {songlist.description}
          </p>
          <Icon icon="icon-park-outline:right" className=" text-[16px]" />
        </div>
        <div className=" flex justify-between mt-[13px]">
          <div className=" w-[108px] h-[37px] text-[12px] text-[#f8fefe] bg-[#ffffff33] rounded-[100px] flex justify-center items-center">
            {songlist.shareCount}
          </div>
          <div className=" w-[108px] h-[37px] text-[12px] text-[#f8fefe] bg-[#ffffff33] rounded-[100px] flex justify-center items-center">
            {songlist.commentCount}
          </div>
          <div className=" w-[108px] h-[37px] text-[12px] text-[#f8fefe] bg-[#ff2658] rounded-[100px] flex justify-center items-center">
            {songlist.subscribedCount}
          </div>
        </div>
      </div>
      <SongList />
    </>
  );
}
// https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/track/all?id=8551437697
// https://netease-cloud-music-api-five-roan-88.vercel.app/related/playlist?id=8551437697
function SongList() {
  const [song, setSong] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/track/all?id=8551437697',
      )
      .then((res) => {
        console.log(res.data.songs);
        setSong(res.data.songs.map((item) => item));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className=" mt-[-10px] bg-white rounded-[15px] px-[14px] pb-[40px]">
      <div className=" w-[100%] h-[48.75px] flex justify-between items-center">
        <div>
          <span className=" m-[0_8px_0_15px] text-[14px] text-[#25272c]">播放全部</span>
          <span>（{song.length}）</span>
        </div>
      </div>
      {song.map((item, index) => (
        <div key={index} className=" w-[100%] h-[52.5px] flex items-center">
          <div className=" w-[15px] mr-[13px] text-[12px] text-[#bfbfbf]">{index + 1}</div>
          <div className=" w-[240px] flex flex-col justify-around">
            <span className=" text-[13.5px] text-{#000000]">{item.name}</span>
            <div>
              {item.ar.map((value, i) => (
                <span key={i} className=" text-[12px] text-[#808080]">
                  {value.name}
                </span>
              ))}
              -<span className=" text-[12px] text-[#808080]">{item.al.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
