#!/bin/sh

echo $(mongo --host ${1}:${2} --quiet ./test_mongo.js)

