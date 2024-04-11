/*
 * @Author: liyingda
 * @Date: 2024-04-10 10:17:54
 * @LastEditors: liyingda
 * @LastEditTime: 2024-04-11 10:18:34
 * @Description:
 */
'use strict';

module.exports = {
  types: [
    {
      value: 'feat',
      name: ':sparkles:  feat:     新功能/特性',
    },
    {
      value: 'fix',
      name: '🐞  fix:      修复 BUG',
    },
    {
      value: 'refactor',
      name: '🛠   refactor: 代码重构',
    },
    {
      value: 'docs',
      name: '📚  docs:     只涉及文档变更',
    },
    {
      value: 'test',
      name: '🏁  test:     测试用例变更',
    },
    {
      value: 'chore',
      name: '🗯   chore:    只涉及依赖更新或构建工具配置的修改',
    },
    {
      value: 'style',
      name: '💅  style:    代码格式变更、样式变更等',
    },
    {
      value: 'revert',
      name: '⏪  revert:   撤销 commit 提交',
    },
  ],
  // 交互提示信息
  messages: {
    type: '确保本次提交遵循：前端代码提交规范！\n选择你要提交的类型：',
    scope: '选择一个scope (可选):',
    customScope: '请输入自定义的 scope：',
    subject: '填写简短精炼的变更描述：\n',
    body: '填写更加详细的变更描述（可选）。使用 "|" 换行：\n',
    breaking: '列举非兼容性重大的变更（可选）：\n',
    footer: '列举出所有变更的 ISSUES CLOSED（可选）。 例如: #31, #34：\n',
    confirmCommit: '确认提交？',
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'], // 当提交类型为feat、fix时才有破坏性修改选项
  skipQuestions: ['body', 'footer'],
  subjectLimit: 72,
};
