import React from 'react';
import { Helmet } from 'react-helmet';

export const RootHelmet = () => (
  <Helmet
    defaultTitle="GreenDream: Programming and Games"
    titleTemplate="GreenDream: Programming and Games - %"
  >
    <meta charSet="utf-8" />
    <meta name="description" content="This is a website for everyday use of programs and games" />
    <meta property="og:site_name" content="GreenDream: Programming and Games" />
    <meta property="og:description" content="This is a website for everyday use of programs and games" />
    <meta property="og:image" content="" />
    <meta property="og:url" content="https://www.greendreampg.com/" />
    <meta property="og:type" content="article" />
    <meta name="robots" content="index,follow" />
    <link rel="canonical" href="https://www.greendreampg.com/" />
  </Helmet>
);

