/*
 * @Author: fangkg
 * @Date: 2022-12-08 16:46:02
 * @LastModifiedBy: fangkg
 * @LastEditTime: 2022-12-08 16:52:09
 * @Description: 在默认配置上加上别名能力
 */
/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname)
    }
    return config;
  }
}

module.exports = nextConfig
