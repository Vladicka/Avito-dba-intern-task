FROM debian:stretch

RUN apt-get update && \
	apt-get install -y -q apt-utils && \
	apt-get install -y -q dirmngr && \
	apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4 && \
	echo "deb http://repo.mongodb.org/apt/debian stretch/mongodb-org/4.0 main" > /etc/apt/sources.list.d/mongodb-org-4.0.list && \
    apt-get update > /dev/null && apt-get install -y -q mongodb-org

RUN apt-get install -y -q python3 && \
	apt-get install -y -q python3-pip && \
	python3 -m pip install flask

COPY get_mongo.sh ./
COPY get_rabbitmq.sh ./
COPY test_mongo.sh ./
COPY test_mongo.js ./
COPY run.py ./

EXPOSE 5000/tcp

ENTRYPOINT ["python3", "run.py"]
