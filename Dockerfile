FROM nginx:latest
 ADD ./dist/css /usr/share/nginx/html/css
 ADD ./dist/fonts /usr/share/nginx/html/fonts
 ADD ./dist/img /usr/share/nginx/html/img
 ADD ./dist/js /usr/share/nginx/html/js
 ADD ./dist/styles.css /usr/share/nginx/html/styles.css
 ADD ./dist/logo.png /usr/share/nginx/html/logo.png
 RUN rm -rf /usr/share/nginx/html/index.html
 ADD ./dist/index.html /usr/share/nginx/html/index.html
 RUN rm -rf /etc/nginx/conf.d/default.conf
 ADD ./nginx/default.conf /etc/nginx/conf.d/default.conf
 CMD ["nginx", "-g", "daemon off;"]