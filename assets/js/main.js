---
dir_path: scripts/
scripts:
    - script-1.js
    - script-2.js
---
{% for script in scripts %}
    {% assign script_path = dir_path | append: script %}
    (function () {
        {% include_relative script_path %}
    })();
{% endfor %}