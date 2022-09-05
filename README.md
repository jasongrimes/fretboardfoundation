## Fretboard Foundation

### Internal links

When linking to internal chapter pages,
use the `slug` specified in the chapter frontmatter.
This ensures that the links will continue to work if the files are renamed.

Ex.:

```markdown
See the [introduction page](introduction) for more information.

See [this diagram](appendix-diagrams#foo).
```

### Copyright notice for printable pages

&copy; Jason Grimes, 2022. https://fretboardfoundation.com 

Licensed under CC BY-SA 4.0: http://creativecommons.org/licenses/by-sa/4.0/


Creative Commons Attribution-ShareAlike 4.0 International License http://creativecommons.org/licenses/by-sa/4.0/

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

### Style guide

See [Journal of Music Theory Style Guide](https://www.dukeupress.edu/Assets/Downloads/JMT_sg.pdf)

## Legacy README:

You can use the [editor on GitHub](https://github.com/jasongrimes/ff-next/edit/main/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [Basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/jasongrimes/ff-next/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
