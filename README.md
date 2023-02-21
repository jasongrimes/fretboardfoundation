# Fretboard Foundation

This is the source code for a book I’m slowly writing called
_Fretboard Foundation: Practical building blocks for intermediate guitarists_, hosted at [fretboardfoundation.com](https://fretboardfoundation.com).

The website is rendered into static HTML with [Jekyll](https://jekyllrb.com/) via [GitHub Pages](https://pages.github.com/), 
using a custom Jekyll theme I wrote called 
[jekyll-chapterbook](https://github.com/jasongrimes/jekyll-chapterbook).

## Style guide

See [Journal of Music Theory Style Guide](https://www.dukeupress.edu/Assets/Downloads/JMT_sg.pdf)

### Citation style
 
* [APA style](https://www.scribbr.com/citing-sources/citation-styles/#apa)
* [APA citation generator](https://www.scribbr.com/apa-citation-generator/)

### Adding references and citations

See [references in the jekyll-chapterbook documentation](https://jasongrimes.github.io/jekyll-chapterbook/references.html).

# Testing the site locally

## Install Ruby, Bundler, and Jekyll

Install versions to match https://pages.github.com/versions/

Install RVM https://rvm.io/

Install the latest stable ruby, and then the jekyll gem.

    rvm install ruby-2.7.4
    gem install jekyll

## Install required Jekyll gems with bundler

    rvm use 2.7.4
    bundle install

## Run the site

    bundle exec jekyll serve

Open the site locally at http://127.0.0.1:4000/ 

# Copyright

Copyright &copy; 2022-2023 by Jason Grimes.

The entire contents of this project, including the code and the book,
are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Creative Commons Attribution-ShareAlike 4.0 International License</a>.

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a>
