!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下
cd dist

git init
git config user.name 'ryan-lu'
git config user.email '229239531@qq.com'
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/Ryan-Lu/vue-admin.git master:gh-pages

cd -