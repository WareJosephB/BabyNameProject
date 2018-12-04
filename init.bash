#!/bin/bash

repositories=(Baby_Name_Generator BabyNameAPI BabyNameConsumer)

maven_clean_install() {
        mvn clean install -q -f $1
}
for repository in ${repositories[@]}; do
        maven_clean_install ${repository}/pom.xml
done