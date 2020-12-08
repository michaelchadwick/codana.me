task :deploy do |t|
  sh "git push origin master"
  sh "bundle exec jekyll build"
  sh "rsync -aP --exclude-from='rsync-exclude.txt' ./_site/* $CODANAME_REMOTE"
end

task :serve do |t|
  sh "bundle exec jekyll serve -w"
end

task :default => [:deploy]
