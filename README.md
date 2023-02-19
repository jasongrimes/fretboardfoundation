# Fretboard Foundation

This is the source code for a book I’m slowly writing called
_Fretboard Foundation: Practical building blocks for intermediate guitarists_, hosted at [fretboardfoundation.com](https://fretboardfoundation.com).

The website is rendered into static HTML with [Jekyll](https://jekyllrb.com/) via [GitHub Pages](https://pages.github.com/), 
using a custom Jekyll theme I wrote called 
[jekyll-chapterbook](https://github.com/jasongrimes/jekyll-chapterbook).

## Style guide

See [Journal of Music Theory Style Guide](https://www.dukeupress.edu/Assets/Downloads/JMT_sg.pdf)

### Internal links

When linking to internal chapter pages,
use the `slug` specified in the chapter frontmatter.
This ensures that the links will continue to work if the files are renamed.

Ex.:

```markdown
See the [introduction page](introduction) for more information.

See [this diagram](appendix-diagrams#foo).
```

### Adding references
 
* [APA style](https://www.scribbr.com/citing-sources/citation-styles/#apa)
* [APA citation generator](https://www.scribbr.com/apa-citation-generator/)

In-text example: 

```
[(Vincent, 2011)](references#vincent-2011)
```

[(Vincent, 2011)](references#vincent-2011)

Reference list:

Use the `references-chapter` layout in the references chapter so that the citations are formatted with hanging indents.

Include a link in the citation (like the ISBN search below), 
and assign it an `id` attribute with `{:#my-id}` so the anchor links from in-text citations work.

```
Vincent, R. (2011). *Three-Note Voicings and Beyond.* Sher Music Co.
[ISBN search](https://en.wikipedia.org/wiki/Special:BookSources?isbn=1-883217-66-0){:#vincent-2011}
```

Vincent, R. (2011). *Three-Note Voicings and Beyond.* Sher Music Co.
[ISBN search](https://en.wikipedia.org/wiki/Special:BookSources?isbn=1-883217-66-0){:#vincent-2011}

### Copyright notice for printable pages

&copy; Jason Grimes, 2022-2023. https://fretboardfoundation.com 

Licensed under CC BY-SA 4.0: http://creativecommons.org/licenses/by-sa/4.0/

# Testing the site locally

## Install Ruby, Bundler, and Jekyll

Install versions to match https://pages.github.com/versions/

Install RVM https://rvm.io/

Install the latest stable ruby, and then the jekyll gem.

    rvm install ruby-2.7.4
    gem install jekyll

## Install gems with bundler

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
