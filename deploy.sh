docker build -t minimal-frontend-dev .
docker run -d -p 5000:80 -e NODE_ENV=development minimal-frontend-dev

