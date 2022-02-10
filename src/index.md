---
layout: base
templateEngineOverride: njk,md
title: Hello World
---

{%- from "macros/rocket.njk" import rocket -%}
{{ rocket({color1:'#900307', color2: '#ed0200', color3: '#bbdaf9', color4: '#e5e5e5', flame: '#fce1a6' })}}
