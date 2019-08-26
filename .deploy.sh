#!/usr/bin/env bash

git push origin master
bundle exec jekyll build
dandelion deploy
