---
layout: home
title: Inicio
---

<h1 class="welcome-heading">¡Hola! Soy bimgetech</h1>

<p>Bienvenido a mi blog personal donde comparto mis experiencias, proyectos y aprendizajes en el mundo de la tecnología.</p>

<h2>Últimos artículos</h2>

<ul class="post-list">
  {% for post in site.posts limit:5 %}
    <li>
      <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <div class="post-meta">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
        <span>• {{ post.content | reading_time }} lectura</span>
      </div>
    </li>
  {% endfor %}
</ul>

<p><a href="{{ '/archive' | relative_url }}">Ver todos los artículos →</a></p>
