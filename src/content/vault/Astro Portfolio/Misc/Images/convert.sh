#!/usr/bin/env bash

for i in *; do
    file="$i"
    name="${file::-4}"

    echo $name

    gm convert "$name.png" "$name.webp" 
done