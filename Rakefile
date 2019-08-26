task :deploy

task :deploy do |t|
  sh "git push origin master"
  sh "./deploy.sh"
end

task :default => [:deploy]
