/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function Layout() {
  const navigate = useNavigate();
  const navList = [
    {
      to: '',
      title: '首页',
      icon: 'ri:netease-cloud-music-fill',
    },
    {
      to: '/Ranking',
      title: '排行榜',
      icon: 'icon-park-outline:ranking',
    },
    {
      to: '/Mine',
      title: '我的',
      icon: 'akar-icons:music',
    },
    {
      to: '/Interest',
      title: '关注',
      icon: 'ep:avatar',
    },
    {
      to: '/Community',
      title: '社区',
      icon: 'ph:wechat-logo',
    },
  ];
  return (
    <div>
      <Outlet />
      <div className=" flex fixed left-0 bottom-0 right-0">
        {navList.map(({ to, title, icon }) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <div
            onClick={() => navigate(to)}
            className=" w-[75px] h-[45px] flex flex-col justify-evenly items-center bg-white"
            key={to}
          >
            <Icon icon={icon} className=" text-[21px] text-[#9297a1]" />
            <span className=" text-[12px] text-[#9297a1]">{title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
