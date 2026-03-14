---
title: People
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}People

We are currently recruiting Postdoc, PhD students, and RAs.

- **Postdoc**: research papers on AI agents, LLMs, or diffusion models; interested in algorithm design or data visualization for business applications.
- **Ph.D. in IEDA**: must be familiar with the foundation of operation research and its applications in supply chains, and have experience in big data (e.g., network) analytics.
- **RA**: must be familiar with LLMs and/or diffusion models, frontend/backend/database for platform design.

Please send your CV and transcripts to [jialiu@ust.hk](mailto:jialiu@ust.hk) if interested.

{% include section.html %}

## Team

<div class="grid portrait-card-grid">
{% include list.html data="members" component="portrait" filter="role == 'lab-leader'" %}
{% include list.html data="members" component="portrait" filter="role == 'phd'" %}
</div>

<div class="grid portrait-card-grid">
{% include list.html data="members" component="portrait" filter="role == 'ra'" %}
</div>

## Alumni

<div class="grid portrait-card-grid">
{% include list.html data="members" component="portrait" filter="role == 'alumni'" %}
</div>
