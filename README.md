# Aspl React Site

Prerequesites:-

1. apache2/nginx
2. node
3. npm
4. pm2

Steps for production:-

1. cd /var/www/ashapura
2. pm2 stop all
3. git pull origin master
4. npm run build
5. pm2 start npm --name "aspl" -- start