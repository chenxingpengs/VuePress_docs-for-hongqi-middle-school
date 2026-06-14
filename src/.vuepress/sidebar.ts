import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "欢迎",
      icon: "house",
      link: "welcome/",
      prefix: "welcome/",
      children: "structure",
    },
  ],
});
