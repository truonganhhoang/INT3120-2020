#!/bin/bash
export EXPO_ANDROID_KEYSTORE_PASSWORD="9cf9e3a12f2e46e1b72f807dd3643ea5"
export EXPO_ANDROID_KEY_PASSWORD="f56248f6093d4a66a7cb43baebf8c8e9"
turtle build:android \
  --type apk \
  --keystore-path ./TimeTable.jks \
  --keystore-alias "QHN1cGVybmFydXRvMTYvVGltZVRhYmxl" \
  -o TimeTable_new.apk \
  -u $1 -p $2
