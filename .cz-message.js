/*
 * @Author: liyingda
 * @Date: 2024-04-11 11:03:31
 * @LastEditors: liyingda
 * @LastEditTime: 2024-04-11 11:06:22
 * @Description:
 */
module.exports = {
  questions: [
    {
      type: 'list',
      name: 'type',
      message:
        '确保本次提交遵循：前端代码提交规范！\n请选择你要提交的更改类型:',
      choices: [
        { value: ':sparkles: feat: ', name: '✨ feat: ------- 新增功能' },
        { value: ':bug: fix: ', name: '🐛 fix: -------- 修复 BUG' },
        { value: ':memo: docs: ', name: '📝 docs: ------- 文档变更' },
        {
          value: ':lipstick: style: ',
          name: '💄 style: ------ 代码格式调整，不影响代码整体运行',
        },
        {
          value: ':recycle: refactor: ',
          name: '♻️  refactor: ------ 代码重构（没有新功能，也没有修复 BUG）',
        },
        { value: ':zap: perf:', name: '⚡️ perf:  ------ 性能优化' },
        {
          value: ':test_tube: test: ',
          name: '🧪 test:  ------ 新增、更新测试内容',
        },
        {
          value: ':truck: merge: ',
          name: '🚚 merge: ------ 合并一个分支, 解决冲突分支',
        },
        {
          value: ':wrench: build: ',
          name: '🔧 build: ------ 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）',
        },
        {
          value: ':construction_worker: ci: ',
          name: '👷 ci: --------- 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等',
        },
        {
          value: ':card_file_box: chore: ',
          name: '🗃️  chore: ------ 变更构建流程或辅助工具',
        },
        { value: ':rewind: revert: ', name: '⏪ revert: ----- 撤销之前提交' },
      ],
    },

    {
      type: 'list',
      name: 'scope',
      message: '请选择更改的范围:',
      choices() {
        return [
          { name: '无', value: false },
          { name: '自定义', value: 'custom' },
        ];
      },
      filter(value, answers) {
        return value || '';
      },
    },

    {
      type: 'input',
      name: 'customScope',
      message: '请输入自定义的变更的范围(可选):',
      when(answers) {
        return answers.scope === 'custom';
      },
      filter(value, answers) {
        answers.scope = value || '';
        return value || '';
      },
    },

    {
      type: 'input',
      name: 'subject',
      message: '请简明扼要的摘要描述(建议字数在75字内):',
      validate(value) {
        return value.length > 75 ? `[subject] 字数限制: 75` : true;
      },
    },

    {
      type: 'input',
      name: 'body',
      message: '请提供更详细的变更说明(可选), 使用“\\n”换行:',
    },

    {
      type: 'input',
      name: 'breaking',
      message: '请列出任何重大变化(可选):',
      when(answers) {
        return /^(:[a-z0-9A-Z_-]+(:)(\s*))?(feat|fix)(\2\s*)?$/.test(
          answers.type.toLowerCase(),
        );
      },
    },

    {
      type: 'input',
      name: 'footer',
      message: '请列出此更改关闭的任何问题(可选), 例如: #25:',
    },
  ],

  templater: (answers, wrap) => {
    let template = `${answers.type ? `${answers.type}` : ``}${
      answers.scope ? `(${answers.scope})` : ``
    }${answers.subject ? `: ${answers.subject}` : ``}${
      answers.body ? `\n\n${wrap(answers.body)}` : ``
    }${
      answers.breaking ? `\n\nBREAKING CHANGE: ${wrap(answers.breaking)}` : ``
    }${answers.footer ? `\n\nISSUES CLOSED: ${wrap(answers.footer)}` : ``}`;

    return template;
  },

  language: 'cn',
};
