/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';

import Banner from '@/test/Banner.jsx';
import Nav from '@/test/Nav.jsx';
import Recommend from '@/test/Recommend.jsx';
import Album from '@/test/Album.jsx';
import Charts from '@/test/Charts.jsx';
import Topic from '@/test/Topic.jsx';
import Calendar from '@/test/Calendar.jsx';

export default function Homepage() {
  return (
    <div className=" bg-[#f4f4f4] pb-[50px]">
      <Banner />
      <Nav />
      <Recommend />
      <Album />
      <Charts />
      <Topic />
      <Calendar />
    </div>
  );
}
