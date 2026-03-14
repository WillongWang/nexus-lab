# 部署到 HKUST 域名（lab.jialiu.people.ust.hk）

当前站点部署在 GitHub Pages：<https://willongwang.github.io/Liu-s-lab/>

`jialiu.people.ust.hk` 已有个人主页且不变，Lab 站可通过**子域名** `lab.jialiu.people.ust.hk` 访问，由 GitHub Pages 直接托管，无需改代码或上传到 HKUST 服务器。

## 推荐：子域名 lab.jialiu.people.ust.hk（GitHub Pages 自定义域名）

1. **在 GitHub 仓库中设置 Custom domain**  
   - 打开仓库 **Settings → Pages**。  
   - 在 **Custom domain** 中填写：`lab.jialiu.people.ust.hk`，保存。  
   - 若发布源是分支，会生成根目录下的 `CNAME` 文件（内容为该域名）；若用 GitHub Actions 发布，则不需要 CNAME。

2. **在 DNS 中添加 CNAME**  
   - 到 `people.ust.hk` 的 DNS 管理方（一般为 HKUST IT 或域名服务商）添加一条 **CNAME**：  
     - **名称**：`lab`（或 `lab.jialiu`，视 DNS 是否以 `jialiu.people.ust.hk` 为基准而定）。  
     - **目标**：`willongwang.github.io`（不要带仓库名或路径）。  
   - 若 DNS 只允许填完整主机名，则名称填 `lab.jialiu.people.ust.hk`，目标填 `willongwang.github.io`。  
   - 具体字段名称以你们实际 DNS 界面为准；若由 HKUST 统一管理，需向 IT 申请添加该 CNAME。

3. **验证与 HTTPS**  
   - DNS 生效后（可能需数分钟到 24 小时），GitHub 会为 `lab.jialiu.people.ust.hk` 签发证书。  
   - 在 Pages 设置中可选 **Enforce HTTPS**。  
   - 访问 <https://lab.jialiu.people.ust.hk> 确认站点正常。

参考：[GitHub Docs - Configuring a subdomain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)。

---

若无法使用子域名、必须用路径 `jialiu.people.ust.hk/lab`，可参考以下两种方式（需能操作 HKUST 服务器或代理）。

## 备选：路径 jialiu.people.ust.hk/lab

### 方式 A：在 HKUST 上托管构建结果

1. 本地构建：`bundle exec jekyll build --baseurl "/lab"`  
2. 将 `_site` 目录中全部内容上传到 HKUST 上 `jialiu.people.ust.hk` 的 `/lab` 目录。  
3. 访问 `https://jialiu.people.ust.hk/lab` 检查。

### 方式 B：HKUST 反向代理

在 `jialiu.people.ust.hk` 所在服务器配置 Nginx/Apache，将路径 `/lab` 反向代理到 `https://willongwang.github.io/Liu-s-lab/`，并做好路径重写，使 `/lab/xxx` 对应 GitHub Pages 上的 `/Liu-s-lab/xxx`。
