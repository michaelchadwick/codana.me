task :deploy

task :deploy do |t|
  sh "git push origin master"
  sh "bundle exec jekyll build"
  sh "git push prod master"
end

task :default => [:deploy]
