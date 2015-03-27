#!/bin/bash

while ! curl http://mongodb:27017/
do
  echo "$(date) - still trying"
  sleep 1
done
echo "$(date) - connected successfully"

java -jar ordering-service-0.1.0.jar
