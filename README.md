# HakkaMD

A tiny & basic Markdown engine for both browser and Node.

## Installation
To include the engine in your application, run `npm i hakkamd`

## Syntax

**Plain text:**

`text` — plain text or HTML `<p></p>`

**Bold:**

`*text*` (HTML `<b></b>`)

**Italic:**

`_text_` (HTML `<i></i>`)

**Strikethrough:**

`~text~` (HTML `<s></s>`)

**Headings:**

`# Text` (the number of sharp symbols corresponds the HTML heading, from `<h1>` to `<h6>`)

**Blockquote:**

`> text`

**Code samples:**

    `text` — HTML <code> tag.
    
    ```
    text — HTML <pre> tag.
    ```
    
**Spoilers:**

`@text@` (HTML `<span class="spoiler"></span>`)

**Unordered list:**
```
- one
- two 
- three 
```

**Ordered list:**
```$xslt
1. one
1. two # the starting number can be any from 0 to 9
1. three
```

**Image:**

`![url](text)` (HTML `<img src="url" alt="text"/>`)

**Hyperlink**:

`[url](text)` (HTML `<a href="url">text</a>`)

## Development and Contribution:

Please take note that this project utilizes `commitizen` for commits, so use `npm run cz` instead of `git commit`. Also the `ghooks` are setup to run linting and tests before each commit.

## TODO:

- [x] Add tests
- [x] Add build process
- [x] Make it available both for Node and browser
- [x] Write docs
- [x] ?????
- [x] PROFIT!
