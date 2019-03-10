#!/bin/sh

if [ "$(dpkg --get-selections | grep "dirmngr")" = "" ]
then
	sudo apt-get update
	sudo apt-get install dirmngr
fi

sudo apt-get install apt-transport-https

sudo apt-key adv --keyserver "hkps.pool.sks-keyservers.net" --recv-keys "0x6B73A36E6026DFCA"
echo "deb http://dl.bintray.com/rabbitmq-erlang/debian stretch erlang\ndeb https://dl.bintray.com/rabbitmq/debian stretch main" | sudo tee /etc/apt/sources.list.d/bintray.rabbitmq.list

sudo apt-get update
sudo apt-get install -y erlang
sudo apt-get install -y rabbitmq-server
