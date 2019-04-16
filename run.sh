docker run -p 3306:3306 --name trimixdbcontainer -e MYSQL_DATABASE=challenge -e MYSQL_ROOT_PASSWORD=mypass -d mysql &&
docker build -t trimixbe/tomcat-server:1.0 trimixcodechallenge && 
docker run -d -p 8383:8080 --rm -it trimixbe/tomcat-server:1.0
cd trimixcodechallengeweb
docker build -t trimixdockerweb . && 
docker run -d -p 8080:80 trimixdockerweb