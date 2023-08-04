module.exports = {
  plugins: {
    'postcss-mobile-forever': {
      // 根元素，用于宽屏中令视图居中于屏幕
      rootSelector: "body",
      // 设计稿的视口宽度
      viewportWidth: 375,
      // 视图的最大宽度
      maxDisplayWidth: 560,
      // 禁止生成横屏媒体查询样式
      disableLandscape: true,
      // 禁止生成桌面端媒体查询样式
      disableDesktop: true,
      // 需要忽略的css选择器
      selectorBlackList: ["favor"],
      // 包含块是根元素的选择器
      rootContainingBlockSelectorList: ["van-tabbar", "van-popup--bottom"],
    }
  },
};
