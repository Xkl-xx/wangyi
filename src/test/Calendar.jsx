/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { RightOutline } from 'antd-mobile-icons';
import { MoreOutlined } from '@ant-design/icons';

export default function Calendar() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://netease-cloud-music-api-five-roan-88.vercel.app/calendar?startTime=1695200946815&endTime=1695287346814&cookie=',
      )
      .then((res) => {
        // console.log(res.data.data.calendarEvents);
        setList(res.data.data.calendarEvents.map((item) => item));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className=" m-[10px]">
      <div className=" w-[100%] h-[45px] text-[15px] pl-[5px] text-[#374d5b] font-[800] flex justify-between items-center">
        <span className=" flex items-center">
          音乐日历
          <RightOutline className=" text-[15px]" />
        </span>
        <span>
          <MoreOutlined />
        </span>
      </div>
      <div className=" w-[340px] bg-white rounded-[12px] p-[15px_15px_14.25px] box-border">
        {list.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className=" flex mt-[15px]">
            <div className=" w-[255px] h-[56px] flex flex-col justify-evenly">
              <span className=" text-[12px] text-[#aaadb5]">
                {dayjs(new Date()).format('M/DD')}
              </span>
              <p className=" text-[14px] text-[#3e4558]">{item.title}</p>
            </div>
            <img src={item.imgUrl} alt="" className=" w-[56px] h-[56px] rounded-[12px]" />
          </div>
        ))}
      </div>
    </div>
  );
}
