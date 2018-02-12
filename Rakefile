task :deploy

task :deploy do |t|
  sh "git push origin master"
  sh "dandeploy"
end

task :default => [:deploy]
