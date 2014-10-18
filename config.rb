preferred_syntax = :sass
http_path = '/'
css_dir = 'css'
sass_dir = 'sass'
images_dir = 'images'
javascripts_dir = 'js'
relative_assets = true
line_comments = true
# output_style = :compressed

add_import_path 'bower_components/Upbase/components'

# - - - - - - - - - - - - -

# Autoprefixer

# - - - - - - - - - - - - -

# Add Autoprefixer Support
# https://github.com/ai/autoprefixer#usage
require 'autoprefixer-rails'

on_stylesheet_saved do |file|
  css = File.read(file)
  File.open(file, 'w') do |io|
    io << AutoprefixerRails.process(css)
  end
end
