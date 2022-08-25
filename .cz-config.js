module.exports = {
  types: [
    {
      value: ':sparkles: feat',
      name: '✨ feat:     新功能',
    },
    {
      value: ':wrench: fix',
      name: '🔧 fix:      修复bug',
    },
    {
      value: ':memo: docs',
      name: '📝  docs:     文档变更',
    },
    {
      value: ':tada: init',
      name: '🎉 init:     初始化',
    },
    {
      value: ':lipstick: style',
      name: '💄 style:    界面美化',
    },
    {
      value: ':art: format',
      name: '🎨 format:    代码美化',
    },
    {
      value: ':rocket: chore',
      name: '🚀 chore:    构建/工程依赖/工具',
    },
  ],
  messages: {
    type: '请选择提交类型(必填)',
    customScope: '请输入文件修改范围(可选)',
    subject: '请简要描述提交(必填)',
    body: '请输入详细描述(可选)',
    breaking: '列出任何BREAKING CHANGES(可选)',
    footer: '请输入要关闭的issue(可选)',
    confirmCommit: '确定提交此说明吗？',
  },
  allowCustomScopes: true,
  skipEmptyScopes: true,
  subjectLimit: 72,
};
