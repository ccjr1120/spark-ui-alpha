// 生成className字符串

export const useClassName = (names: Array<string>) => {
  return [...new Set(names)].join(' ');
};
