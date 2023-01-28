---
layout: page
title: pages.about

namespace: about
permalink: /about-us/
permalink_fr: /a-propos/
---

<style>

    a img:hover {
        background-color: #78C475;
        border-radius: 2em;
    }

    .maps {
        background-color: #78C475;
        padding: 1.5em;
        border-radius: 2em;
        width: 75%;
        position: relative;
        float: left;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        color: black;
    }

    .real-map {
        width: 60%;
    }

    .maps-description {
        width: 35%;
        float: right;
        text-align: center;
    }

    .maps-description h3 {
        width: 100%;
    }

    @media screen and (max-width: 600px) {
        .real-map {
            width: 100%;
        }
        
        .maps-description {
            width: 100%;
        }
    }
</style>

{% tf pages/about.md %}