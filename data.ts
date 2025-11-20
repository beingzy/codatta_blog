import { JekyllPost } from './types';

// This file acts as the `_posts` directory. 
// Content is now written in pure Markdown, making it accessible for non-technical contributors.

export const posts: JekyllPost[] = [
  {
    id: '2023-12-10-generative-agents',
    layout: 'post',
    slug: 'generative-agents',
    url: '/ai/generative-agents',
    title: 'Generative Agents: Simulating Human Behavior',
    excerpt: 'How we are using LLMs to create believable agents that can interact with complex decentralized economies.',
    content: `The field of generative agents is exploding. By combining memory streams, reflection, and planning, we can create digital actors that behave in surprisingly human ways.

Generative agents—computational software agents that simulate believable human behavior—demonstrate that models can be empowered with memory and planning to produce sophisticated social interactions.

## The Architecture of Memory

At the core of these agents lies a novel architecture that stores a comprehensive record of the agent's experiences using natural language. This memory stream allows the agent to retrieve relevant information to condition its actions.

### Reflection and Planning

Mere retrieval isn't enough. Agents must reflect on their memories to form generalizations and higher-level inferences. This is achieved through a "reflection" mechanism that periodically synthesizes memories into high-level thoughts.

1.  **Observation**: The agent perceives the world.
2.  **Retrieval**: Relevant memories are surfaced.
3.  **Reflection**: High-level insights are generated.
4.  **Planning**: Future actions are determined based on insights.

This loop enables agents to maintain long-term coherence and adapt to dynamic environments within the Codatta simulation layer.`,
    date: '2023-12-10',
    categories: ['AI'],
    weight: 100, // Featured
    author: 'Alex Rivera',
    author_title: 'Head of AI Research',
    author_avatar: 'https://picsum.photos/id/64/100/100',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200',
    tags: ['Agents', 'Simulation'],
    read_time: '10 min read'
  },
  {
    id: '2023-11-03-community-grants',
    layout: 'post',
    slug: 'community-grants-q4',
    url: '/eco/community-grants-q4',
    title: 'Codatta Community Grants: Q4 Update',
    excerpt: 'We are thrilled to announce the recipients of our latest eco-system grants focusing on sustainable computing and data privacy.',
    content: `Community is at the heart of everything we do at Codatta. This quarter, we focused our grants on projects that are pushing the boundaries of what's possible in the sustainable eco-system.

> "Sustainability isn't just a feature, it's the foundation of the decentralized web."

We received over 500 applications from 40 different countries. The diversity of ideas was staggering, ranging from carbon-neutral mining protocols to privacy-preserving identity solutions.

### Key Recipients

*   **GreenCompute Protocol**: Optimizing GPU usage for AI training.
*   **DataShield DAO**: A community-governed privacy layer.
*   **EcoNodes**: Solar-powered validator setups.

We believe these initiatives will drive the next wave of adoption, proving that performance and sustainability can coexist.`,
    date: '2023-11-03',
    categories: ['Eco & Community'],
    weight: 10,
    author: 'Sarah Chen',
    author_title: 'Community Lead',
    author_avatar: 'https://picsum.photos/id/65/100/100',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200',
    tags: ['Grants', 'Sustainability'],
    read_time: '3 min read'
  },
  {
    id: '2023-10-12-decentralized-ai',
    layout: 'post',
    slug: 'future-decentralized-ai',
    url: '/ai/future-decentralized-ai',
    title: 'The Future of Decentralized AI Compute Networks',
    excerpt: 'Exploring how blockchain protocols are reshaping the landscape of artificial intelligence model training and inference distribution.',
    content: `The convergence of Artificial Intelligence and Blockchain technology represents a paradigm shift in how we conceive of computational resources. As models grow larger, the need for distributed training becomes apparent.

## Why Decentralization Matters

Centralized compute silos are becoming bottlenecks. By leveraging a decentralized network of GPUs, we can lower the barrier to entry for AI researchers worldwide.

### The Latency Challenge

One of the primary arguments against decentralized training is latency. However, with new techniques in **pipeline parallelism** and optimistic verification, we are seeing performance that rivals traditional data centers.

The Codatta network utilizes a unique proof-of-compute mechanism that verifies work without redundant execution, ensuring that the network remains efficient while trustless.`,
    date: '2023-10-12',
    categories: ['AI'],
    weight: 50,
    author: 'Alex Rivera',
    author_title: 'Head of AI Research',
    author_avatar: 'https://picsum.photos/id/64/100/100',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    tags: ['LLM', 'Infrastructure', 'DePIN'],
    read_time: '5 min read'
  },
  {
    id: '2023-09-28-zk-proofs',
    layout: 'post',
    slug: 'understanding-zk-proofs',
    url: '/crypto/understanding-zk-proofs',
    title: 'Understanding Zero-Knowledge Proofs in Data Markets',
    excerpt: 'A deep dive into how ZK-proofs ensure data validity without compromising the underlying privacy of the data provider.',
    content: `Privacy is paramount in the modern web. Zero-knowledge proofs (ZKPs) offer a mathematical guarantee of truth without revealing the information itself. This is particularly crucial for data marketplaces where the raw data is sensitive.

In this article, we break down zk-SNARKs and zk-STARKs and their application in the Codatta protocol layer.

## The Prover and The Verifier

In a standard ZK setup, there are two parties:
1.  **The Prover**: Wants to prove they know $X$ without revealing $X$.
2.  **The Verifier**: Wants to verify the Prover knows $X$.

Codatta uses this to verify that data contributes to a model's accuracy without ever seeing the raw data itself. This opens up new markets for healthcare and financial data.`,
    date: '2023-09-28',
    categories: ['Crypto'],
    weight: 30,
    author: 'David Okonjo',
    author_title: 'Lead Cryptographer',
    author_avatar: 'https://picsum.photos/id/91/100/100',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200',
    tags: ['ZK', 'Privacy', 'Security'],
    read_time: '8 min read'
  },
  {
    id: '2023-08-15-scaling-infrastructure',
    layout: 'post',
    slug: 'scaling-infrastructure-2024',
    url: '/others/scaling-infrastructure-2024',
    title: 'Scaling Our Infrastructure for 2024',
    excerpt: 'Lessons learned from scaling our node infrastructure to handle over 1M daily requests with 99.99% uptime.',
    content: `Scale brings its own set of challenges. As we prepare for the next phase of growth, we've had to completely rethink our load balancing strategy to ensure high availability across all regions.

We adopted a **Geo-DNS** strategy coupled with edge caching to reduce latency for our global user base. 

> "Premature optimization is the root of all evil, but lack of planning is the root of all downtime."

Our new architecture allows for seamless failover between zones, ensuring that even in the event of a catastrophic regional failure, Codatta remains online.`,
    date: '2023-08-15',
    categories: ['Others'],
    weight: 20,
    author: 'Marcus Cole',
    author_title: 'DevOps Engineer',
    author_avatar: 'https://picsum.photos/id/103/100/100',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    tags: ['Infrastructure', 'Scaling'],
    read_time: '6 min read'
  }
];