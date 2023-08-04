module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // 设计稿的视口宽度
      viewportWidth: 375,
      // 需要忽略的css选择器
      selectorBlackList: ["favor"]
    },
  },
};
