---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

{%
  include button.html
  type="email"
  text="jialiu@ust.hk"
  link="jialiu@ust.hk"
%}
{%
  include button.html
  type="phone"
  text="+852 2358-7709"
  link="+852-2358-7709"
%}
{%
  include button.html
  type="address"
  tooltip="LSK4051, HKUST, Clear Water Bay, Hong Kong"
  link="https://www.google.com/maps/search/HKUST+Clear+Water+Bay+Hong+Kong"
%}

{% include section.html %}

{% capture col1 %}
**Office**  
LSK4051  
HKUST  
Clear Water Bay, Hong Kong
{% endcapture %}

{% capture col2 %}
**Email**  
jialiu@ust.hk

**Phone**  
+852 2358-7709
{% endcapture %}

{% capture col3 %}
**Recruiting**  
Postdoc · PhD · RA  
Send CV and transcripts to  
jialiu@ust.hk
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}
