const { notificationSuccess } = require('./notification');

const BUILD_URL =
  process.argv[2] || 'https://github.com/RootLinkFE/devops-rn-app/actions';

const platform = process.argv[3] || 'Android';

const branchName = process.argv[4];

const context = `>${platform}构建失败❌，详情见: [Job Link](${BUILD_URL})；\n>分支：<font color="warning">${branchName}</font>`;
notificationSuccess(context, () => {});
