task :deploy

task :deploy do |t|
  sh "git push origin master"
  sh "bundle exec jekyll build"
  sh "rsync -aP ./_site/* mike@neb.host:/var/www/codana.me/public_html"
end

task :default => [:deploy]
