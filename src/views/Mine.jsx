/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

export default function Main() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get(`https://netease-cloud-music-api-five-roan-88.vercel.app/user/playlist?uid=1406469300`)
      .then((res) => {
        console.log(res.data.playlist);
        setList(res.data.playlist.map((item) => item));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(list);
  return (
    <div>
      <div className=" h-[56.25px] px-[16.875px] bg-inherit flex justify-between items-center fixed top-0 left-0 box-border">
        <Link to="/">
          <span className="w-[27px] h-[27px]">
            <Icon icon="carbon:arrow-left" className=" text-[27px] text-white" />
          </span>
        </Link>
        <span className="w-[27px] h-[27px] flex justify-center">
          <Icon icon="formkit:reorder" width="10" className=" text-[27px] text-white" />
        </span>
      </div>

      {list.slice(0, 1).map((item, index) => (
        <div key={index}>
          <div className=" w-[100%] h-[277.5px]">
            <img src={item.creator.backgroundUrl} alt="" className=" w-[100%] h-[277.5px]" />
          </div>
          <div className=" w-[100%] p-[0_15px_0] bg-[#f1f1f1] box-border">
            <div className=" h-[180px] m-[-15px_0_0] p-[41px_0_14px] box-border bg-[#f1f1f1] rounded-[15px] relative">
              <div className=" w-[67.5px] h-[67.5px] rounded-[100%] absolute top-[-34px] left-[50%] translate-x-[-50%]">
                <img
                  src={item.creator.avatarUrl}
                  alt=""
                  className=" w-[67.5px] h-[67.5px] rounded-[100%]"
                />
              </div>
              <p className=" w-[100%] text-center text-[18px] text-[#253346] font-[800] m-0">
                {item.creator.nickname}
              </p>
              <div className=" w-[100%] h-[18px] mt-[7.5px] flex justify-center">
                <span className=" px-[7.5px] text-[12px] text-[#9396a2]">7 关注</span>
                <span className=" px-[7.5px] text-[12px] text-[#9396a2]">1 粉丝</span>
                <span className=" px-[7.5px] text-[12px] text-[#9396a2]">Lv.9</span>
              </div>
              <div className=" h-[41.5px] flex justify-center items-center">
                <span className=" h-[27px] leading-[27px] text-[12px] text-[#41495e] bg-[#fff] mr-[6px] p-[3px_7px_4px_6px] box-border border-[1px] border-[#ccccdd] rounded-[6px]">
                  IP
                </span>
                <span className=" h-[27px] leading-[27px] text-[12px] text-[#41495e] bg-[#fff] mr-[6px] p-[3px_7px_4px_6px] box-border border-[1px] border-[#ccccdd] rounded-[6px]">
                  00后 双鱼座
                </span>
                <span className=" h-[27px] leading-[27px] text-[12px] text-[#41495e] bg-[#fff] mr-[6px] p-[3px_7px_4px_6px] box-border border-[1px] border-[#ccccdd] rounded-[6px]">
                  村龄 {dayjs(new Date()).format('YYYY') - dayjs(item.createTime).format('YYYY')} 年
                </span>
              </div>
              <div className=" h-[30px] flex justify-center items-center">
                <span className=" border-[#ccccdd] text-[12px] border-[1px] mr-[6px] p-[3px_10px] rounded-[100px]">
                  编辑资料
                </span>
                <span className=" border-[#ccccdd] border-[1px] mr-[6px] p-[5px] rounded-[50%]">
                  <Icon icon="iconamoon:arrow-down-2" />
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className=" bg-[#f1f1f1] px-[15px] mb-[80px] box-border">
        <div className=" w-[300px] h-[56.25px] mx-[22.5px] text-[14px] text-[#9095a1] flex justify-evenly items-center">
          <span>主页</span>
          <span>动态</span>
          <span>播客</span>
        </div>
        <div>
          <div className=" w-[100%] bg-white rounded-[12px]">
            <p className=" h-[45px] leading-[45px] pl-[15px] text-[15px] m-0">音乐品味</p>
            <div className=" flex justify-evenly">
              <div className=" w-[100px] h-[100px] rounded-[12px] p-[5px] box-border relative bg-gradient-to-b from-[#ffdfd3] to-[white]">
                <div className=" h-[28px] text-[12px] text-[837c87]">我的喜欢</div>
                <span className=" text-[13px] text-[#5a565d]">24首</span>
                <div className=" absolute bottom-[10px] left-[10px] text-[12px] text-[#b1b1ae]">
                  喜欢的音乐
                </div>
              </div>
              <div className=" w-[100px] h-[100px] rounded-[12px] p-[5px] box-border relative bg-gradient-to-b from-[#f9ebcf] to-[white]">
                <div className=" h-[28px] text-[12px] text-[837c87]">累计听歌</div>
                <span className=" text-[13px] text-[#5a565d]">11529首</span>
                <div className=" absolute bottom-[10px] left-[10px] text-[12px] text-[#b1b1ae]">
                  喜欢的音乐
                </div>
              </div>
              <div className=" w-[100px] h-[100px] rounded-[12px] p-[5px] box-border relative bg-gradient-to-b from-[#dbeff9] to-[white]">
                <div className=" h-[28px] text-[12px] text-[837c87]">本周关键词</div>
                <span className=" text-[13px] text-[#5a565d]">属于你的音乐档案</span>
                <div className=" absolute bottom-[10px] left-[10px] text-[12px] text-[#b1b1ae]">
                  黑胶时光机
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
