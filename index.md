<center><span style="font-size: 40px; color: #000080;"><b>PORTAFOLIO</b></span></center>

<center><span style="font-size: 20px;"><b>PROYECTOS DE INGENIERÍA ESTRUCTURAL</b></span></center>

---
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
