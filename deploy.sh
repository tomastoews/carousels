#!/bin/bash

project="carousels"
container_port=8099

echo "Starting deployment of $project"

echo "Cleaning dist/ directory..."
ssh tt@tomastoews.de "rm -r -f -v /containers/$project && mkdir -p /containers/$project/dist"
echo "Cleaning done: ok"

echo "Uploading dist/ files..."
scp -r dist tt@tomastoews.de:/containers/$project/;
echo "Upload done: ok"

echo "Uploading dockerfile..."
scp Dockerfile tt@tomastoews.de:/containers/$project/
echo "Upload done: ok"

ssh tt@tomastoews.de "cd /containers/scripts && sh ./build-image.sh $project && sh ./start.sh $project $container_port:80"

echo "Image build done: ok"
echo "Container start done: ok"

echo "-----------------------"
echo "\| Deployment done: ok \|"
echo "-----------------------"
