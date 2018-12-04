#!/bin/bash

repositories=(BabyNameGeneratorAPI BabyNameAPI BabyNameConsumer)
baseRepo = https://github.com/WareJosephB

git_clone() {
        git clone $1
}
for repository in ${repositories[@]}; do
        git_clone ${baseRepo}/${repository}
done