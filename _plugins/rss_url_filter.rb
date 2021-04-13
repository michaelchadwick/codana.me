# https://github.com/eincs/jekyll-rss-absolute-urls

module Jekyll
  module RSSURLFilter
    def relative_urls_to_absolute(input)
      url = "https://codana.me"
      input.gsub('src="/', 'src="' + url + '/').gsub('href="/', 'href="' + url + '/')
    end
  end
end

Liquid::Template.register_filter(Jekyll::RSSURLFilter)