FROM nginx:alpine
# 将打包后的静态文件复制到 Nginx 目录
COPY dist /usr/share/nginx/html
# 覆盖 Nginx 默认配置
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80