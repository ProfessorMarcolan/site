---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: posts
title: index
---


<h2> Python </h2>
<p>Cursos de python0</p>

<ul>
    {% for author in site.py %}
      <li>
        <h2><a href="{{ author.url }}">{{ author.title }}</a></h2>
      </li>
    {% endfor %}
  </ul>

<h2> Curso de git </h2>
<p>Cursos de python</p>

<ul>
    {% for author in site.git %}
      <li>
        <h2><a href="{{ author.url }}">{{ author.title }}</a></h2>
      </li>
    {% endfor %}
  </ul>
