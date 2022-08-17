---
title: Foreword
slug: foreword
---


{% include assign-chapter-vars.html chapter=page %}
This page:

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

