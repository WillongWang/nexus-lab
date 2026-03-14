---
title: Home
nav:
  order: 0
  tooltip: Home
---

# NEXUS Lab

We are an interdisciplinary research lab at the intersection of marketing, artificial intelligence, and decision science, focused on building intelligence for the digital and global economy. Our work spans three core areas—marketing intelligence, generative search optimization, and supply chain intelligence—with a shared goal of helping organizations make smarter, faster, and more adaptive decisions. By integrating causal methods, structural modeling, machine learning, multimodal and agentic AI, and network analytics, we turn complex data from consumers, platforms, digital content, and global trade systems into measurable insights and practical decision tools. We seek to advance both scientific understanding and real-world impact, enabling firms to evaluate marketing effectiveness, strengthen brands, optimize search-era visibility, and build resilience in increasingly interconnected markets.

{% include section.html %}

## Research Areas

<div class="highlights-grid">

{% capture mkt_images %}images/mkt1.png|images/mkt2.png|images/mkt3.png|images/mkt4.png|images/mkt5.png|images/mkt6.png|images/mkt7.png{% endcapture %}
{% capture mkt_captions %}Figure: Automatically screening safety risks from consumer complaints|Figure: Segmenting vending markets based on consumer location-product purchase data|Figure: How the characteristics of topic consumptions and contributions evolve over 40 months on Zhihu|Figure: Building brands in the Digital Age|Figure: Designing Prompt for narrative content marketing using LLMs|Figure: Generating Desired Visual Ads with Stable Diffusions|Figure: Generating Controllable Visual Stimulus with Stable Diffusions{% endcapture %}
{% capture mkt_desc %}We develop analytical and AI-based approaches to help firms understand consumers, evaluate marketing actions, and design more effective strategies. Our work spans marketing effectiveness, big platform data analytics, branding and global strategy, and generative AI for decision science. By integrating causal methods, econometric modeling, and modern AI tools, we transform complex, unstructured data into actionable insights for business decisions.{% endcapture %}
{% include highlight-card.html layout="horizontal" title="Marketing Intelligence" subtitle="From causal measurement to generative AI: building the future of marketing intelligence" images=mkt_images captions=mkt_captions description=mkt_desc link="projects/marketing" %}

{% capture geo_images %}images/geo.png{% endcapture %}
{% capture geo_desc %}
Generative search is reshaping how users discover information, how brands gain exposure, and how content drives business value. GEO Intelligence focuses on how generative engines retrieve, interpret, rank, generate, and cite web content under different query intents, model architectures, and grounding constraints—and, more importantly, what optimization strategies can systematically improve visibility, citation performance, and answer contribution. {% endcapture %}
{% include highlight-card.html layout="horizontal" title="GEO Intelligence" subtitle="Making Visibility in Generative Search Analyzable, Diagnosable, Optimizable, and Measurable" images=geo_images description=geo_desc link="projects/geo" %}

{% capture sc_images %}images/sc.png{% endcapture %}
{% capture sc_desc %}We investigate how global trade networks form, fracture, and adapt under the pressures of geopolitical realignment and technological disruption. We identify key players across both macro and micro dimensions, e.g., the structural roles that countries and firms occupy within trade networks and hidden operational risks from multi-tier dependencies. These network insights feed into a creditworthiness evaluation framework grounded in actual supply chain topology rather than financial statements alone. {% endcapture %}
{% include highlight-card.html layout="horizontal" title="Supply Chain Intelligence" subtitle="Decoding the structure, players, and dynamics of global trade networks" images=sc_images description=sc_desc link="projects/supply-chain" %}

</div>
