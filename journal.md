---
layout: default
title: Journal
namespace: journaling
permalink: /journal/
permalink_fr: /un-journal/
---
<style>
    img {
        border-radius: 1em;
        width: 50%;
        margin: auto;
        display: block;
    }
</style>

{% tf pages/journal.md %}

<div>
    {% for post in site.posts %}
        <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
    {% endfor %}
</div>
