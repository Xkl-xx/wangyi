/* eslint-disable no-return-assign */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import storejs from 'storejs';
import { Icon } from '@iconify/react';
import { createLoginQrKey, createLoginQrImage, checkLoginQr } from '../service';

function Login() {
  const navigate = useNavigate();
  const unikey = useRef('');
  const timer = useRef(null);
  const qr = useRef('');
  const [status, setStatus] = useState();
  const checkScanStatus = () => {
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      checkLoginQr({ key: unikey.current, timestamp: Date.now() })
        .then((res) => {
          // console.log(res);
          setStatus(res.data.code);
          if ([800, 803].includes(res.data.code)) {
            clearInterval(timer);
          }
          if (res.data.code === 803) {
            storejs.set('cookie', res.data.cookie);
            navigate('/Homepage');
          }
        })
        .catch((err) => {
          console.log(err);
          clearInterval(timer);
        });
    }, 1500);
  };
  useEffect(() => {
    createLoginQrKey()
      .then((res) => (unikey.current = res.data.data.unikey))
      .then((key) => createLoginQrImage({ key, qrimg: true }))
      .then((res) => (qr.current = res.data.data.qrimg))
      .then(() => checkScanStatus())
      .catch((err) => console.log(err));
    return () => clearInterval(timer.current);
  }, []);
  return (
    <div className=" flex flex-col items-center">
      <div className=" w-[100%] h-[72px] px-[20px] box-border flex justify-between items-center">
        <Link to="/">
          <span className="w-[27px] h-[27px] text-black">
            <Icon icon="icon-park-outline:left" className=" text-[22.5px]" />
          </span>
        </Link>
        <span className=" text-[15px] text-[#696969]">游客登录</span>
      </div>

      <img
        src="https://admirable-jalebi-ce44af.netlify.app/static/logo.fill.svg"
        alt=""
        className=" w-[142.5px] h-[27px] my-[30px]"
      />
      {[800, 801].includes(status) ? (
        <div className=" relative">
          <div className=" w-[100%] flex flex-col items-center">
            {status === 800 ? (
              <div className="mask w-[100%] h-[150px]  absolute top-0 left-0 flex justify-center items-center bg">
                <div className=" w-[75px] h-[28.5px] leading-[28.5px] bg-[red] text-white text-[12px] rounded-[100px] text-center">
                  点击刷新
                </div>
              </div>
            ) : null}
            <img src={qr.current} alt="" className=" w-[150px] h-[150px]" />
          </div>
          <div className=" text-[12px] text-[#100a09] mt-[37.5px]">
            使用
            <span className=" text-[#2c6aa1]">网易云音乐APP</span>
            扫码登录
          </div>
        </div>
      ) : null}
      {status === 802 ? (
        <div>
          <div className=" flex flex-col items-center">
            <img
              src="https://admirable-jalebi-ce44af.netlify.app/static/queding.png"
              alt=""
              className=" w-[154px] h-[154px]"
            />
            <h1 className=" h-[64px] leading-[64px] text-[15px]">扫描成功</h1>
          </div>
          <p className=" text-center">请在手机上确认登录</p>
        </div>
      ) : null}

      <img
        src="https://admirable-jalebi-ce44af.netlify.app/static/bg-login.png"
        alt=""
        className=" h-[200px] fixed bottom-0 left-0"
      />
    </div>
  );
}

export default Login;
