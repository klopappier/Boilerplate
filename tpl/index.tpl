{# head.tpl #}
{% include "./inc/head.tpl" %}

<body>

<div class="row group">
    <div class="col col-12">
        {# header.tpl #}
        {% include "./inc/header.tpl" %}
    </div>
</div>
<main class="container">

    <div class="row group">
        <div class="col col-12">
            {# grid.tpl #}
            {% include "./modules/grid.tpl" %}
        </div>
    </div>

    {# color.tpl #}
    {% include "./modules/color.tpl" %}

    {# color.tpl #}
    {% include "./modules/content-icon.tpl" %}

    <h3>Modules</h3>



</main>

{# footer.tpl #}
{% include "./inc/footer.tpl" %}

