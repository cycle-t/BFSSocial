.github/workflows 文件夹说明
============================

文件夹作用：
用于存放 GitHub Actions 工作流文件，负责项目的自动化构建与部署流程。

文件说明：
- `deploy.yml`：GitHub Pages 部署工作流；当 `main` 分支有提交，或手动触发工作流时，会将当前静态站点发布到 GitHub Pages。
- `readme.txt`：当前说明文件，说明工作流目录和文件职责。
