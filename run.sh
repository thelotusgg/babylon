#!/usr/bin/env sh

sudo sh frontend/buildDocker.sh
sudo sh backend/buildDocker.sh

sudo docker-compose up
sudo docker-compose down