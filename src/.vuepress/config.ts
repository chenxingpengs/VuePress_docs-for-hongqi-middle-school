import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/VuePress_docs-for-hongqi-middle-school/",

  lang: "zh-CN",
  title: "智慧校园系统",
  description: "珠海市红旗中学智慧校园系统文档",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
