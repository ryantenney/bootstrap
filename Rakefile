require 'rubygems'
require 'closure-compiler'

desc "Use the Closure Compiler to compress Bootstrap.js"
task :default do
  source  = File.read('bootstrap.js')
  min     = Closure::Compiler.new.compress(source)
  File.open('bootstrap.min.js', 'w') do |file|
    file.write min
  end
end
