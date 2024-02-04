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

    rvm use 2.7.4
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

# Generating the printable single-page version

## Update the edition version

Edit `_config.yml` and set `latest_edition` to the name of the new edition.

Update [_pages/editions.md] with a link to the new edition.

## Render the PDF

Use the `bin/bookbinder` utiltity to compile all of the rendered HTML chapters into a single file 
and modify all the HTML links and anchor tags accordingly.
Then wrap it in the printable header and footer (printable-head.html and printable-footer.html).
(Note that `bookbinder` is compiled for Apple Silicon. To use it on other architectures,
see https://github.com/jasongrimes/bookbinder.)

    cd _site
    ../bin/bookbinder $(<printmap.txt) >printable-inner.html && \
      cat printable-head.html printable-inner.html printable-footer.html >../printable.html

Then open the printable file http://localhost:4000/printable.html in a web browser,
and proofread the rendered preview. Make sure that pagination looks good throughout.
If needed, add or remove page breaks by appending the following helper classes in appropriate places in the markdown:
`{:.page-break-before}` and `{:.no-page-break-after}`.

When it looks good, print it via the browser and select "Save as PDF". 
(Note that as of this writing, 
there's a bug in Chrome on Mac that prevents the pagination from rendering properly, 
but it works when using Safari or Firefox.)

Save the PDF file to `pdf/Fretboard-Foundation-YYYY-MM-DD.pdf`,
and also copy it over the existing `pdf/Fretboard Foundation.pdf`.

## Tag the new version in Git and deploy

# Generating offline site 

## With jekyll

    RMDIRS=(tmp assets/archives assets/demo)
    RMFILES=(CNAME Gemfile Gemfile.lock *.code-workspace)
    bundle exec jekyll build --baseurl=. \
        && for dir in $RMDIRS; do echo "Removing $dir"; rm -rf _site/$dir; done \
        && for file in $RMFILES; do echo "Removing $file"; rm _site/$file; done \
        && du -sh _site

## With httrack

    datestamp=`date -I`
    httrack http://127.0.0.1:4000 -w -O ./fretboardfoundation-$datestamp -v --max-rate=1000000000 --sockets=50 --disable-security-limits --display --assume svg=application/octet-stream -o0

    rm -rf fretboardfoundation-$datestamp/hts-cache

    zip -r fretboardfoundation-$datestamp.zip fretboardfoundation-$datestamp

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
