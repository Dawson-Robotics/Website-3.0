---
layout: default
title: Journal
namespace: journaling
permalink: /journal/
permalink_fr: /un-journal/
---

<style>
    /* Style the buttons that are used to open and close the accordion panel */
    .accordion {
        background-color: #78C475;
        color: black;
        cursor: pointer;
        padding: 2em;
        margin: 1em auto 0em auto;
        border-radius: 1em;
        width: 100%;
        text-align: left;
        border: none;
        outline: none;
        transition: 0.4s;
    }

    .close-post {

    }

    /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
    .active, .accordion:hover {
        background-color: #ccc;
    }

    /* Style the accordion panel. Note: hidden by default */
    .panel {
        padding: 0 18px;
        background-color: black;
        display: none;
        overflow: hidden;
    }
</style>
<body>
    {% tf pages/journal.md %}

    {% for post in site.posts %}
    <button class="accordion">
        {{ post.title }}
    </button>
    <div class="panel">
        <p>{{ post.content | markdownify }}</p>
    </div>

    {% endfor %}

    <script>
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
            panel.style.display = "none";
            } else {
            panel.style.display = "block";
            }
        });
        }
    </script>
</body>