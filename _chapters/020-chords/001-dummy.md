---
layout: chapter
title: Dummy chapter
slug: dummy
published: true
---

## Here's a heading

{% include assign-chapter-vars.html chapter=page %}
This page:

    {% if part_label %}Part {{ part_num }}: {{ part_label }}{% endif %}
    {% if chapter_num %}Chapter {{ chapter_num }}.{% endif %} {{ chapter_label }}
    
{% include assign-chapter-vars.html chapter=chapter_prev %}
Previous chapter:

    {% if part_label %}Part {{ part_num }}: {{ part_label }}{% endif %}
    {% if chapter_num %}Chapter {{ chapter_num }}.{% endif %} {{ chapter_label }}

{% include assign-chapter-vars.html chapter=page.previous %}
Previous page:

    {% if part_label %}Part {{ part_num }}: {{ part_label }}{% endif %}
    {% if chapter_num %}Chapter {{ chapter_num }}.{% endif %} {{ chapter_label }}
    
{% include assign-chapter-vars.html chapter=page.next %}
Next page:

    {% if part_label %}Part {{ part_num }}: {{ part_label }}{% endif %}
    <a href="{{ page.next.url }}">{% if chapter_num %}Chapter {{ chapter_num }}.{% endif %} {{ chapter_label }}</a>

{% include assign-chapter-vars.html chapter=site.chapters.first %}
First page:

    {% if part_label %}Part {{ part_num }}: "{{ part_label }}"{% endif %}
    {% if chapter_num %}Chapter {{ chapter_num }}.{% endif %} {{ chapter_label }}

{% include assign-chapter-vars.html chapter=site.chapters.last %}
Last page:

    {% if part_label %}Part {{ part_num }}: "{{ part_label }}"{% endif %}
    {% if chapter_num %}Chapter {{ chapter_num }}.{% endif %} {{ chapter_label }}

{% assign parts = page.path | split: "/" %}
`parts` {{ parts | inspect }}

`size` {{ parts | size }}

{% assign numparts = parts | size | minus: 2 %}
`numparts` {{ numparts }}

`slice` {% assign parts = parts | slice: 1,numparts %} {{ parts|inspect }}

`drop prefix` {{ parts.first | split: "-" | shift | join: "-" }}

`part label` {{ parts.first | split: "-" | shift | join: " " | capitalize }}

## Another heading
