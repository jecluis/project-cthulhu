#!/bin/bash

[[ ! -d "cthulhu-dist" ]] && \
  git clone git@github.com:jecluis/project-cthulhu-dist cthulhu-dist

ng build --prod --base-href "https://jecluis.github.io/project-cthulhu-dist/" || exit 1
rm -fr cthulhu-dist/*.{js,html} || exit 1
cp -R dist/cthulhu/* cthulhu-dist/ || exit 1
cd cthulhu-dist || exit 1
git add *
git commit -m 'dist: new build' -s -S || exit 1
git push origin master:master

