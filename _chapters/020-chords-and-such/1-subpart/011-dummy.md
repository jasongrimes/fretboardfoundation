---
layout: chapter
title: Dummy chapter
slug: dummy
---

## Here's a heading

Chapter {% include this-chapter-num.html %}.

`page.path` {{ page.path }}

{% assign parts = page.path | split: "/" %}
`parts` {{ parts | inspect }}

`size` {{ parts | size }}

{% assign numparts = parts | size | minus: 2 %}
`numparts` {{ numparts }}

`slice` {% assign parts = parts | slice: 1,numparts %} {{ parts|inspect }}

`drop prefix` {{ parts.first | split: "-" | shift | join: "-" }}

`part label` {{ parts.first | split: "-" | shift | join: " " | capitalize }}

## Another heading
