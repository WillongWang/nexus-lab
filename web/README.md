# NEXUS Lab — 静态站点

本目录为 **纯静态** 网站，无需 Jekyll、GitHub Pages 或任何服务端。

## 部署方式

- **GitHub Pages**：把 `web/` 里的**全部内容**放到仓库根目录（或放到 `docs/` 后在仓库设置里选 “Deploy from branch - docs folder”），在仓库 Settings → Pages 里选择对应分支和目录即可预览。
- **自己的域名 / 其他托管**：将 **本目录（`web/`）下的全部内容** 上传到你的服务器：
   - 若部署在**域名根目录**：上传后确保 `index.html` 在根路径，访问 `https://你的域名/` 即可。
   - 若部署在**子目录**（如 `https://你的域名/lab/`）：将 `web/` 内所有文件保持相对路径上传到 `lab/` 下即可。

2. 无需配置：
   - 不需要 GitHub Actions、不需要 `baseurl`
   - 不需要 Ruby、Jekyll、Gemfile
   - 仅需支持静态文件的 Web 服务器（Nginx、Apache、OSS、Vercel、Netlify 等）

## 目录结构

```
web/
├── index.html          # 首页
├── css/site.css        # 样式
├── js/
│   ├── dark-mode.js    # 深色模式
│   └── carousel.js     # 首页/项目页轮播
├── images/             # 图片（可自行补充 mkt1–mkt7.png, geo.png, sc.png, lab.png 等）
├── team/index.html     # 成员
├── contact/index.html  # 联系
└── projects/
    ├── index.html
    ├── marketing/index.html
    ├── geo/index.html
    └── supply-chain/index.html
```

## 可选：补充图片

若需与 [原站](https://willongwang.github.io/liu-lab/) 一致，可将以下图片放入 `web/images/`：

- `mkt1.png` ~ `mkt7.png`（Marketing 轮播）
- `geo.png`（GEO 卡片）
- `sc.png`（Supply Chain 卡片）
- `lab.png`（页头/页脚背景，可选）
- 成员头像：`jia_liu.jpg`, `jiaxin_wang.jpg`, `han_zhu.jpg` 等（与 `_members` 中 `image` 路径对应）

当前已包含：`logo.svg`, `fallback.svg`, `yujie_qu.jpg`, `ziwei_cong.jpg`。
