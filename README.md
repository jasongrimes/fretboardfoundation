# Fretboard Foundation

This is the source code for a book I’m slowly writing called
_Fretboard Foundation: Practical building blocks for intermediate guitarists_, hosted at [fretboardfoundation.com](https://fretboardfoundation.com).

The website is rendered into static HTML with [Jekyll](https://jekyllrb.com/) via [GitHub Pages](https://pages.github.com/), 
using a custom Jekyll theme I created to support a proper book format and my preferred workflow
([jekyll-chapterbook](https://github.com/jasongrimes/jekyll-chapterbook)).

## Style guide

See [Journal of Music Theory Style Guide](https://www.dukeupress.edu/Assets/Downloads/JMT_sg.pdf).

### Citation style
 
* [APA style](https://www.scribbr.com/citing-sources/citation-styles/#apa)
* [APA citation generator](https://www.scribbr.com/apa-citation-generator/)

### Adding references and citations

See [references in the jekyll-chapterbook documentation](https://jasongrimes.github.io/jekyll-chapterbook/references.html).

# Testing the site locally

## Install Ruby, Bundler, and Jekyll

Install versions to match https://pages.github.com/versions/

Install RVM https://rvm.io/

Install the _same version of Ruby used by GitHub pages_, 
and then the jekyll gem.

    rvm install ruby-2.7.4
    gem install jekyll

## Install required Jekyll gems with bundler

    rvm use 2.7.4
    bundle install

## Run the site

    bundle exec jekyll serve

Open the site locally at http://127.0.0.1:4000/

## Connect to local site from mobile, etc.

Find your IP address:

    IP=`ifconfig en0 | grep "inet " | awk '{print $2}'`
    echo $IP

Bind jekyll serve to it:

    bundle exec jekyll serve --host=$IP

Then connect to it from a mobile or other device on the same network using the IP address from $IP and port 4000.

For example: http://10.0.0.10:4000

# Making simple staff notation with VexFlow

https://jsfiddle.net/m2kjgLbs/

```javascript
const note = 'C/4';
const filename = 'note-C4.svg';

// Create a VexFlow renderer attached to the DIV element with id="output".
const { Factory, StaveNote } = Vex.Flow;
const vf = new Factory({renderer: { 
  elementId: 'output', 
  width: 80, 
  height: 130 
}});
// Create a guitar staff, displaced down one octave
vf.System().addStave({voices:[vf.EasyScore().voice([
	new StaveNote({ 
    keys: [note], 
    duration: "w", 
    octave_shift: -1
  })
])]})
.addClef('treble', 'default', '8vb');
vf.draw();

// Hack to append a download link for the generated SVG
const svgData = $('#output')[0].innerHTML.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ');
const svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
const svgUrl = URL.createObjectURL(svgBlob);
const downloadLink = document.createElement("a");
downloadLink.innerText = 'Download';
downloadLink.href = svgUrl;
downloadLink.download = filename;
$('#output')[0].after(downloadLink);
```

# Copyright

Copyright &copy; 2022-2023 by Jason Grimes.

The entire contents of this project, including the code and the book,
are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Creative Commons Attribution-ShareAlike 4.0 International License</a>.

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a>
