---
layout: chapter
title: Dummy chapter
slug: dummy
published: true
---


{% if "000" contains "." %}
  Does contain
{% else %}
  Does not contain
{% endif %}







{% comment %}
## Here's a heading

{% include init-page-chapter-vars.html %}
This page:

    {% if page_part_label %}Part {{ page_part_num }}: {{ page_part_label }}{% endif %}
    {% if page_chapter_num %}Chapter {{ page_chapter_num }}.{% endif %} {{ page_chapter_label }}
    
{% include assign-local-chapter-vars.html chapter=chapter_prev %}
Previous chapter:

    {% if _local_chapter_part_label %}Part {{ _local_chapter_part_num }}: {{ _local_chapter_part_label }}{% endif %}
    {% if _local_chapter_num %}Chapter {{ _local_chapter_num }}.{% endif %} {{ _local_chapter_label }}

{% include assign-local-chapter-vars.html chapter=page.previous %}
Previous page:

    {% if _local_chapter_part_label %}Part {{ _local_chapter_part_num }}: {{ _local_chapter_part_label }}{% endif %}
    {% if _local_chapter_num %}Chapter {{ _local_chapter_num }}.{% endif %} {{ _local_chapter_label }}
    
{% include assign-local-chapter-vars.html chapter=page.next %}
Next page:

    {% if _local_chapter_part_label %}Part {{ _local_chapter_part_num }}: {{ _local_chapter_part_label }}{% endif %}
    <a href="{{ _local_chapter_next.url }}">{% if _local_chapter_num %}Chapter {{ _local_chapter_num }}.{% endif %} {{ _local_chapter_label }}</a>

{% include assign-local-chapter-vars.html chapter=site.chapters.first %}
First page:

    {% if _local_chapter_part_label %}Part {{ _local_chapter_part_num }}: "{{ _local_chapter_part_label }}"{% endif %}
    {% if _local_chapter_num %}Chapter {{ _local_chapter_num }}.{% endif %} {{ _local_chapter_label }}

{% include assign-local-chapter-vars.html chapter=site.chapters.last %}
Last page:

    {% if _local_chapter_part_label %}Part {{ _local_chapter_part_num }}: "{{ _local_chapter_part_label }}"{% endif %}
    {% if _local_chapter_num %}Chapter {{ _local_chapter_num }}.{% endif %} {{ _local_chapter_label }}

{% assign parts = page.path | split: "/" %}
`parts` {{ parts | inspect }}

`size` {{ parts | size }}

{% assign numparts = parts | size | minus: 2 %}
`numparts` {{ numparts }}

`slice` {% assign parts = parts | slice: 1,numparts %} {{ parts|inspect }}

`drop prefix` {{ parts.first | split: "-" | shift | join: "-" }}

`part label` {{ parts.first | split: "-" | shift | join: " " | capitalize }}

## Another heading

{%endcomment%}
