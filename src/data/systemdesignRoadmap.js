// System Design Roadmap Data
export const systemDesignRoadmapData = {
  'fundamentals': {
    name: 'System Design Fundamentals',
    topics: [
      {
        id: 'fund-1',
        title: 'Scalability Basics',
        description: 'Understanding horizontal vs vertical scaling, load balancing fundamentals.',
        status: 'not-started',
        estimatedHours: 3,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'fund-1-1', title: 'Horizontal vs Vertical Scaling', status: 'not-started', resources: ['https://www.geeksforgeeks.org/horizontal-and-vertical-scaling/'] },
          { id: 'fund-1-2', title: 'Load Balancing Concepts', status: 'not-started', resources: ['https://www.nginx.com/resources/glossary/load-balancing/'] },
          { id: 'fund-1-3', title: 'Stateless vs Stateful Applications', status: 'not-started', resources: ['https://www.redhat.com/en/topics/cloud-native-apps/stateful-vs-stateless'] },
          { id: 'fund-1-4', title: 'CAP Theorem', status: 'not-started', resources: ['https://www.ibm.com/topics/cap-theorem'] },
          { id: 'fund-1-5', title: 'ACID Properties', status: 'not-started', resources: ['https://www.geeksforgeeks.org/acid-properties-in-dbms/'] }
        ]
      },
      {
        id: 'fund-2',
        title: 'System Design Process',
        description: 'Learn the systematic approach to designing large-scale systems.',
        status: 'not-started',
        estimatedHours: 4,
        startDate: null,
        completionDate: null,                           
        notes: '',
        subtopics: [
          { id: 'fund-2-1', title: 'Requirements Gathering (Functional & Non-Functional)', status: 'not-started', resources: ['https://www.educative.io/courses/grokking-the-system-design-interview'] },
          { id: 'fund-2-2', title: 'Capacity Planning and Estimation', status: 'not-started', resources: ['https://github.com/donnemartin/system-design-primer'] },
          { id: 'fund-2-3', title: 'High-Level Design', status: 'not-started', resources: ['https://www.interviewbit.com/system-design-interview-questions/'] },
          { id: 'fund-2-4', title: 'Detailed Design', status: 'not-started', resources: ['https://leetcode.com/discuss/interview-question/system-design/'] },
          { id: 'fund-2-5', title: 'Identifying and Resolving Bottlenecks', status: 'not-started', resources: ['https://aws.amazon.com/architecture/well-architected/'] }
        ]
      },
      {
        id: 'fund-3',
        title: 'Performance Metrics',
        description: 'Understanding key performance indicators and system metrics.',
        status: 'not-started',
        estimatedHours: 2,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'fund-3-1', title: 'Latency vs Throughput', status: 'not-started', resources: ['https://www.cloudflare.com/learning/performance/latency-vs-throughput/'] },
          { id: 'fund-3-2', title: 'Availability and Reliability', status: 'not-started', resources: ['https://sre.google/sre-book/availability-table/'] },
          { id: 'fund-3-3', title: 'Consistency Models', status: 'not-started', resources: ['https://jepsen.io/consistency'] },
          { id: 'fund-3-4', title: 'SLA, SLO, and SLI', status: 'not-started', resources: ['https://sre.google/sre-book/service-level-objectives/'] }
        ]
      }
    ]
  },
  'databases': {
    name: 'Database Design & Management',
    topics: [
      {
        id: 'db-1',
        title: 'Database Types and Selection',
        description: 'Understanding different database types and when to use each.',
        status: 'not-started',
        estimatedHours: 4,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'db-1-1', title: 'Relational Databases (RDBMS)', status: 'not-started', resources: ['https://www.postgresql.org/docs/', 'https://dev.mysql.com/doc/'] },
          { id: 'db-1-2', title: 'NoSQL Databases (Document, Key-Value, Graph)', status: 'not-started', resources: ['https://docs.mongodb.com/', 'https://redis.io/documentation'] },
          { id: 'db-1-3', title: 'Time Series Databases', status: 'not-started', resources: ['https://docs.influxdata.com/influxdb/'] },
          { id: 'db-1-4', title: 'Search Engines (Elasticsearch)', status: 'not-started', resources: ['https://www.elastic.co/guide/'] },
          { id: 'db-1-5', title: 'Database Selection Criteria', status: 'not-started', resources: ['https://aws.amazon.com/products/databases/'] }
        ]
      },
      {
        id: 'db-2',
        title: 'Database Scaling Patterns',
        description: 'Techniques for scaling databases to handle increased load.',
        status: 'not-started',
        estimatedHours: 5,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'db-2-1', title: 'Read Replicas', status: 'not-started', resources: ['https://aws.amazon.com/rds/features/read-replicas/'] },
          { id: 'db-2-2', title: 'Database Sharding', status: 'not-started', resources: ['https://www.mongodb.com/features/database-sharding-explained'] },
          { id: 'db-2-3', title: 'Federation', status: 'not-started', resources: ['https://github.com/donnemartin/system-design-primer#federation'] },
          { id: 'db-2-4', title: 'Denormalization', status: 'not-started', resources: ['https://www.geeksforgeeks.org/denormalization-in-databases/'] },
          { id: 'db-2-5', title: 'SQL Tuning and Optimization', status: 'not-started', resources: ['https://use-the-index-luke.com/'] }
        ]
      },
      {
        id: 'db-3',
        title: 'Data Consistency and Transactions',
        description: 'Managing data consistency in distributed systems.',
        status: 'not-started',
        estimatedHours: 3,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'db-3-1', title: 'ACID vs BASE', status: 'not-started', resources: ['https://www.geeksforgeeks.org/acid-vs-base-in-databases/'] },
          { id: 'db-3-2', title: 'Two-Phase Commit (2PC)', status: 'not-started', resources: ['https://www.cs.princeton.edu/courses/archive/fall16/cos418/docs/L6-2pc.pdf'] },
          { id: 'db-3-3', title: 'Eventual Consistency', status: 'not-started', resources: ['https://aws.amazon.com/builders-library/challenges-with-distributed-systems/'] },
          { id: 'db-3-4', title: 'Saga Pattern', status: 'not-started', resources: ['https://microservices.io/patterns/data/saga.html'] }
        ]
      }
    ]
  },
  'caching': {
    name: 'Caching Strategies',
    topics: [
      {
        id: 'cache-1',
        title: 'Caching Fundamentals',
        description: 'Understanding caching concepts and benefits.',
        status: 'not-started',
        estimatedHours: 3,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'cache-1-1', title: 'Cache Hit vs Cache Miss', status: 'not-started', resources: ['https://www.cloudflare.com/learning/cdn/what-is-caching/'] },
          { id: 'cache-1-2', title: 'Cache Eviction Policies (LRU, LFU, FIFO)', status: 'not-started', resources: ['https://www.geeksforgeeks.org/lru-cache-implementation/'] },
          { id: 'cache-1-3', title: 'Cache Levels (L1, L2, L3)', status: 'not-started', resources: ['https://www.tutorialspoint.com/computer_organization_and_architecture/cache_memory.htm'] },
          { id: 'cache-1-4', title: 'Cache Coherence', status: 'not-started', resources: ['https://www.geeksforgeeks.org/cache-coherence/'] }
        ]
      },
      {
        id: 'cache-2',
        title: 'Caching Patterns',
        description: 'Different caching strategies and when to use them.',
        status: 'not-started',
        estimatedHours: 4,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'cache-2-1', title: 'Cache-Aside (Lazy Loading)', status: 'not-started', resources: ['https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/Strategies.html'] },
          { id: 'cache-2-2', title: 'Write-Through Cache', status: 'not-started', resources: ['https://redis.io/docs/manual/patterns/'] },
          { id: 'cache-2-3', title: 'Write-Behind (Write-Back) Cache', status: 'not-started', resources: ['https://hazelcast.com/blog/a-hitchhikers-guide-to-caching-patterns/'] },
          { id: 'cache-2-4', title: 'Refresh-Ahead Cache', status: 'not-started', resources: ['https://docs.oracle.com/middleware/1221/coherence/develop-applications/cache_rtwtwbra.htm'] },
          { id: 'cache-2-5', title: 'Distributed Caching', status: 'not-started', resources: ['https://redis.io/topics/cluster-tutorial'] }
        ]
      },
      {
        id: 'cache-3',
        title: 'Cache Technologies',
        description: 'Popular caching technologies and their use cases.',
        status: 'not-started',
        estimatedHours: 3,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'cache-3-1', title: 'Redis', status: 'not-started', resources: ['https://redis.io/documentation', 'https://try.redis.io/'] },
          { id: 'cache-3-2', title: 'Memcached', status: 'not-started', resources: ['https://memcached.org/', 'https://github.com/memcached/memcached/wiki'] },
          { id: 'cache-3-3', title: 'CDN (Content Delivery Networks)', status: 'not-started', resources: ['https://www.cloudflare.com/learning/cdn/what-is-a-cdn/'] },
          { id: 'cache-3-4', title: 'Application-Level Caching', status: 'not-started', resources: ['https://spring.io/guides/gs/caching/'] }
        ]
      }
    ]
  },
  'microservices': {
    name: 'Microservices Architecture',
    topics: [
      {
        id: 'micro-1',
        title: 'Microservices Fundamentals',
        description: 'Understanding microservices architecture principles.',
        status: 'not-started',
        estimatedHours: 4,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'micro-1-1', title: 'Monolith vs Microservices', status: 'not-started', resources: ['https://microservices.io/patterns/monolithic.html'] },
          { id: 'micro-1-2', title: 'Service Decomposition', status: 'not-started', resources: ['https://microservices.io/patterns/decomposition/'] },
          { id: 'micro-1-3', title: 'Domain-Driven Design (DDD)', status: 'not-started', resources: ['https://martinfowler.com/tags/domain%20driven%20design.html'] },
          { id: 'micro-1-4', title: 'Bounded Contexts', status: 'not-started', resources: ['https://martinfowler.com/bliki/BoundedContext.html'] },
          { id: 'micro-1-5', title: 'Conway\'s Law', status: 'not-started', resources: ['https://www.melconway.com/Home/Conways_Law.html'] }
        ]
      },
      {
        id: 'micro-2',
        title: 'Service Communication',
        description: 'Communication patterns between microservices.',
        status: 'not-started',
        estimatedHours: 5,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'micro-2-1', title: 'Synchronous Communication (REST, GraphQL)', status: 'not-started', resources: ['https://restfulapi.net/', 'https://graphql.org/learn/'] },
          { id: 'micro-2-2', title: 'Asynchronous Communication (Message Queues)', status: 'not-started', resources: ['https://www.rabbitmq.com/tutorials/tutorial-one-python.html'] },
          { id: 'micro-2-3', title: 'Event-Driven Architecture', status: 'not-started', resources: ['https://martinfowler.com/articles/201701-event-driven.html'] },
          { id: 'micro-2-4', title: 'API Gateway Pattern', status: 'not-started', resources: ['https://microservices.io/patterns/apigateway.html'] },
          { id: 'micro-2-5', title: 'Service Mesh', status: 'not-started', resources: ['https://istio.io/latest/docs/concepts/what-is-istio/'] }
        ]
      },
      {
        id: 'micro-3',
        title: 'Data Management in Microservices',
        description: 'Managing data consistency and transactions across services.',
        status: 'not-started',
        estimatedHours: 4,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'micro-3-1', title: 'Database per Service', status: 'not-started', resources: ['https://microservices.io/patterns/data/database-per-service.html'] },
          { id: 'micro-3-2', title: 'Shared Database Anti-pattern', status: 'not-started', resources: ['https://microservices.io/patterns/data/shared-database.html'] },
          { id: 'micro-3-3', title: 'Event Sourcing', status: 'not-started', resources: ['https://martinfowler.com/eaaDev/EventSourcing.html'] },
          { id: 'micro-3-4', title: 'CQRS (Command Query Responsibility Segregation)', status: 'not-started', resources: ['https://martinfowler.com/bliki/CQRS.html'] },
          { id: 'micro-3-5', title: 'Distributed Transactions', status: 'not-started', resources: ['https://microservices.io/patterns/data/saga.html'] }
        ]
      }
    ]
  },
  'messaging': {
    name: 'Message Queues & Event Streaming',
    topics: [
      {
        id: 'msg-1',
        title: 'Message Queue Fundamentals',
        description: 'Understanding message queues and their benefits.',
        status: 'not-started',
        estimatedHours: 3,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'msg-1-1', title: 'Publisher-Subscriber Pattern', status: 'not-started', resources: ['https://aws.amazon.com/pub-sub-messaging/'] },
          { id: 'msg-1-2', title: 'Point-to-Point Messaging', status: 'not-started', resources: ['https://www.enterpriseintegrationpatterns.com/patterns/messaging/PointToPointChannel.html'] },
          { id: 'msg-1-3', title: 'Message Durability', status: 'not-started', resources: ['https://www.rabbitmq.com/persistence-conf.html'] },
          { id: 'msg-1-4', title: 'Message Ordering', status: 'not-started', resources: ['https://kafka.apache.org/documentation/#intro_guarantees'] }
        ]
      },
      {
        id: 'msg-2',
        title: 'Message Queue Technologies',
        description: 'Popular message queue and streaming platforms.',
        status: 'not-started',
        estimatedHours: 5,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'msg-2-1', title: 'Apache Kafka', status: 'not-started', resources: ['https://kafka.apache.org/quickstart', 'https://www.confluent.io/learn/'] },
          { id: 'msg-2-2', title: 'RabbitMQ', status: 'not-started', resources: ['https://www.rabbitmq.com/tutorials/', 'https://www.cloudamqp.com/blog/'] },
          { id: 'msg-2-3', title: 'Amazon SQS/SNS', status: 'not-started', resources: ['https://docs.aws.amazon.com/sqs/', 'https://docs.aws.amazon.com/sns/'] },
          { id: 'msg-2-4', title: 'Apache Pulsar', status: 'not-started', resources: ['https://pulsar.apache.org/docs/'] },
          { id: 'msg-2-5', title: 'Redis Pub/Sub', status: 'not-started', resources: ['https://redis.io/topics/pubsub'] }
        ]
      },
      {
        id: 'msg-3',
        title: 'Event Streaming Patterns',
        description: 'Advanced patterns for event-driven architectures.',
        status: 'not-started',
        estimatedHours: 4,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'msg-3-1', title: 'Event Store', status: 'not-started', resources: ['https://eventstore.com/'] },
          { id: 'msg-3-2', title: 'Change Data Capture (CDC)', status: 'not-started', resources: ['https://debezium.io/'] },
          { id: 'msg-3-3', title: 'Stream Processing', status: 'not-started', resources: ['https://kafka.apache.org/documentation/streams/'] },
          { id: 'msg-3-4', title: 'Dead Letter Queues', status: 'not-started', resources: ['https://aws.amazon.com/about-aws/whats-new/2014/01/30/amazon-sqs-announces-dead-letter-queues/'] }
        ]
      }
    ]
  },
  'security': {
    name: 'Security & Authentication',
    topics: [
      {
        id: 'sec-1',
        title: 'Authentication & Authorization',
        description: 'Securing access to systems and resources.',
        status: 'not-started',
        estimatedHours: 4,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'sec-1-1', title: 'OAuth 2.0 & OpenID Connect', status: 'not-started', resources: ['https://auth0.com/intro-to-iam/what-is-oauth-2/', 'https://openid.net/connect/'] },
          { id: 'sec-1-2', title: 'JWT (JSON Web Tokens)', status: 'not-started', resources: ['https://jwt.io/introduction/', 'https://auth0.com/learn/json-web-tokens/'] },
          { id: 'sec-1-3', title: 'Session Management', status: 'not-started', resources: ['https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html'] },
          { id: 'sec-1-4', title: 'Multi-Factor Authentication (MFA)', status: 'not-started', resources: ['https://www.nist.gov/itl/applied-cybersecurity/iad/list-projects/reducing-barriers-adoption-multi-factor-authentication'] },
          { id: 'sec-1-5', title: 'Single Sign-On (SSO)', status: 'not-started', resources: ['https://auth0.com/blog/what-is-and-how-does-single-sign-on-work/'] }
        ]
      },
      {
        id: 'sec-2',
        title: 'API Security',
        description: 'Securing APIs and web services.',
        status: 'not-started',
        estimatedHours: 3,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'sec-2-1', title: 'Rate Limiting & Throttling', status: 'not-started', resources: ['https://cloud.google.com/architecture/rate-limiting-strategies-techniques'] },
          { id: 'sec-2-2', title: 'API Keys & Access Tokens', status: 'not-started', resources: ['https://cloud.google.com/endpoints/docs/openapi/when-why-api-key'] },
          { id: 'sec-2-3', title: 'CORS (Cross-Origin Resource Sharing)', status: 'not-started', resources: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS'] },
          { id: 'sec-2-4', title: 'Input Validation & Sanitization', status: 'not-started', resources: ['https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html'] },
          { id: 'sec-2-5', title: 'HTTPS & TLS', status: 'not-started', resources: ['https://www.cloudflare.com/learning/ssl/what-is-https/'] }
        ]
      },
      {
        id: 'sec-3',
        title: 'Security Best Practices',
        description: 'General security principles and practices.',
        status: 'not-started',
        estimatedHours: 3,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'sec-3-1', title: 'Defense in Depth', status: 'not-started', resources: ['https://www.nist.gov/blogs/cybersecurity-insights/defense-depth-cybersecurity'] },
          { id: 'sec-3-2', title: 'Principle of Least Privilege', status: 'not-started', resources: ['https://www.cisa.gov/principle-least-privilege'] },
          { id: 'sec-3-3', title: 'Security by Design', status: 'not-started', resources: ['https://www.ncsc.gov.uk/collection/cyber-security-design-principles'] },
          { id: 'sec-3-4', title: 'Vulnerability Assessment', status: 'not-started', resources: ['https://owasp.org/www-project-top-ten/'] },
          { id: 'sec-3-5', title: 'Security Monitoring & Logging', status: 'not-started', resources: ['https://www.sans.org/white-papers/1168/'] }
        ]
      }
    ]
  },  'monitoring': {
    name: 'Monitoring & Observability',
    topics: [
      {
        id: 'mon-1',
        title: 'Observability Fundamentals',
        description: 'Understanding the three pillars of observability.',
        status: 'not-started',
        estimatedHours: 3,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'mon-1-1', title: 'Metrics, Logs, and Traces', status: 'not-started', resources: ['https://opentelemetry.io/docs/concepts/observability-primer/'] },
          { id: 'mon-1-2', title: 'SLI, SLO, SLA', status: 'not-started', resources: ['https://sre.google/sre-book/service-level-objectives/'] },
          { id: 'mon-1-3', title: 'Error Budgets', status: 'not-started', resources: ['https://sre.google/sre-book/embracing-risk/'] },
          { id: 'mon-1-4', title: 'Golden Signals', status: 'not-started', resources: ['https://sre.google/sre-book/monitoring-distributed-systems/'] }
        ]
      },
      {
        id: 'mon-2',
        title: 'Monitoring Tools & Technologies',
        description: 'Popular monitoring and observability tools.',
        status: 'not-started',
        estimatedHours: 5,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'mon-2-1', title: 'Prometheus & Grafana', status: 'not-started', resources: ['https://prometheus.io/docs/', 'https://grafana.com/docs/'] },
          { id: 'mon-2-2', title: 'ELK Stack (Elasticsearch, Logstash, Kibana)', status: 'not-started', resources: ['https://www.elastic.co/what-is/elk-stack'] },
          { id: 'mon-2-3', title: 'Jaeger for Distributed Tracing', status: 'not-started', resources: ['https://www.jaegertracing.io/docs/'] },
          { id: 'mon-2-4', title: 'APM Tools (New Relic, Datadog)', status: 'not-started', resources: ['https://newrelic.com/platform', 'https://www.datadoghq.com/'] },
          { id: 'mon-2-5', title: 'CloudWatch (AWS)', status: 'not-started', resources: ['https://docs.aws.amazon.com/cloudwatch/'] }
        ]
      },
      {
        id: 'mon-3',
        title: 'Alerting & Incident Management',
        description: 'Setting up alerts and managing incidents.',
        status: 'not-started',
        estimatedHours: 3,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'mon-3-1', title: 'Alert Design Principles', status: 'not-started', resources: ['https://sre.google/sre-book/monitoring-distributed-systems/'] },
          { id: 'mon-3-2', title: 'On-Call Practices', status: 'not-started', resources: ['https://landing.google.com/sre/sre-book/chapters/being-on-call/'] },
          { id: 'mon-3-3', title: 'Incident Response', status: 'not-started', resources: ['https://response.pagerduty.com/'] },
          { id: 'mon-3-4', title: 'Post-Mortem Analysis', status: 'not-started', resources: ['https://sre.google/sre-book/postmortem-culture/'] }
        ]
      }
    ]
  },
  'lld': {
    name: 'Low-Level Design (LLD)',
    topics: [
      {
        id: 'lld-1',
        title: 'Object-Oriented Programming Principles',
        description: 'Core OOP concepts essential for low-level design.',
        status: 'not-started',
        estimatedHours: 4,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'lld-1-1', title: 'Encapsulation', status: 'not-started', resources: ['https://www.geeksforgeeks.org/encapsulation-in-java/'] },
          { id: 'lld-1-2', title: 'Inheritance', status: 'not-started', resources: ['https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html'] },
          { id: 'lld-1-3', title: 'Polymorphism', status: 'not-started', resources: ['https://www.javatpoint.com/runtime-polymorphism-in-java'] },
          { id: 'lld-1-4', title: 'Abstraction', status: 'not-started', resources: ['https://www.programiz.com/java-programming/abstraction'] },
          { id: 'lld-1-5', title: 'Composition vs Inheritance', status: 'not-started', resources: ['https://www.baeldung.com/java-composition-aggregation-association'] }
        ]
      },
      {
        id: 'lld-2',
        title: 'SOLID Principles',
        description: 'Five design principles for maintainable object-oriented code.',
        status: 'not-started',
        estimatedHours: 5,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'lld-2-1', title: 'Single Responsibility Principle (SRP)', status: 'not-started', resources: ['https://blog.cleancoder.com/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html'] },
          { id: 'lld-2-2', title: 'Open/Closed Principle (OCP)', status: 'not-started', resources: ['https://stackify.com/solid-design-open-closed-principle/'] },
          { id: 'lld-2-3', title: 'Liskov Substitution Principle (LSP)', status: 'not-started', resources: ['https://www.baeldung.com/java-liskov-substitution-principle'] },
          { id: 'lld-2-4', title: 'Interface Segregation Principle (ISP)', status: 'not-started', resources: ['https://stackify.com/interface-segregation-principle/'] },
          { id: 'lld-2-5', title: 'Dependency Inversion Principle (DIP)', status: 'not-started', resources: ['https://stackify.com/dependency-inversion-principle/'] }
        ]
      },
      {
        id: 'lld-3',
        title: 'Design Patterns',
        description: 'Common design patterns for solving recurring design problems.',
        status: 'not-started',
        estimatedHours: 8,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'lld-3-1', title: 'Creational Patterns (Singleton, Factory, Builder)', status: 'not-started', resources: ['https://refactoring.guru/design-patterns/creational-patterns'] },
          { id: 'lld-3-2', title: 'Structural Patterns (Adapter, Decorator, Facade)', status: 'not-started', resources: ['https://refactoring.guru/design-patterns/structural-patterns'] },
          { id: 'lld-3-3', title: 'Behavioral Patterns (Observer, Strategy, Command)', status: 'not-started', resources: ['https://refactoring.guru/design-patterns/behavioral-patterns'] },
          { id: 'lld-3-4', title: 'MVC/MVP/MVVM Patterns', status: 'not-started', resources: ['https://www.geeksforgeeks.org/mvc-design-pattern/'] },
          { id: 'lld-3-5', title: 'Repository Pattern', status: 'not-started', resources: ['https://martinfowler.com/eaaCatalog/repository.html'] },
          { id: 'lld-3-6', title: 'Dependency Injection Pattern', status: 'not-started', resources: ['https://martinfowler.com/articles/injection.html'] }
        ]
      },
      {
        id: 'lld-4',
        title: 'UML and Class Diagrams',
        description: 'Visual modeling tools for software design documentation.',
        status: 'not-started',
        estimatedHours: 3,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'lld-4-1', title: 'Class Diagrams', status: 'not-started', resources: ['https://www.lucidchart.com/pages/uml-class-diagram'] },
          { id: 'lld-4-2', title: 'Sequence Diagrams', status: 'not-started', resources: ['https://www.geeksforgeeks.org/unified-modeling-language-uml-sequence-diagrams/'] },
          { id: 'lld-4-3', title: 'Use Case Diagrams', status: 'not-started', resources: ['https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-use-case-diagram/'] },
          { id: 'lld-4-4', title: 'Activity Diagrams', status: 'not-started', resources: ['https://www.lucidchart.com/pages/uml-activity-diagram'] },
          { id: 'lld-4-5', title: 'State Diagrams', status: 'not-started', resources: ['https://www.geeksforgeeks.org/unified-modeling-language-uml-state-diagrams/'] }
        ]
      },
      {
        id: 'lld-5',
        title: 'Code Organization & Architecture',
        description: 'Best practices for organizing and structuring code.',
        status: 'not-started',
        estimatedHours: 4,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'lld-5-1', title: 'Package and Module Design', status: 'not-started', resources: ['https://www.oracle.com/corporate/features/understanding-java-9-modules.html'] },
          { id: 'lld-5-2', title: 'Layered Architecture', status: 'not-started', resources: ['https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/ch01.html'] },
          { id: 'lld-5-3', title: 'Clean Architecture', status: 'not-started', resources: ['https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html'] },
          { id: 'lld-5-4', title: 'Hexagonal Architecture', status: 'not-started', resources: ['https://alistair.cockburn.us/hexagonal-architecture/'] },
          { id: 'lld-5-5', title: 'Separation of Concerns', status: 'not-started', resources: ['https://effectivesoftwaredesign.com/2012/02/05/separation-of-concerns/'] }
        ]
      },
      {
        id: 'lld-6',
        title: 'Error Handling & Exception Design',
        description: 'Designing robust error handling mechanisms.',
        status: 'not-started',
        estimatedHours: 3,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'lld-6-1', title: 'Exception Hierarchy Design', status: 'not-started', resources: ['https://docs.oracle.com/javase/tutorial/essential/exceptions/'] },
          { id: 'lld-6-2', title: 'Checked vs Unchecked Exceptions', status: 'not-started', resources: ['https://www.baeldung.com/java-checked-unchecked-exceptions'] },
          { id: 'lld-6-3', title: 'Error Codes vs Exceptions', status: 'not-started', resources: ['https://stackoverflow.com/questions/729379/why-not-use-exceptions-as-regular-flow-of-control'] },
          { id: 'lld-6-4', title: 'Fail-Fast vs Fail-Safe', status: 'not-started', resources: ['https://www.geeksforgeeks.org/fail-fast-fail-safe-iterators-java/'] },
          { id: 'lld-6-5', title: 'Circuit Breaker Pattern', status: 'not-started', resources: ['https://martinfowler.com/bliki/CircuitBreaker.html'] }
        ]
      },
      {
        id: 'lld-7',
        title: 'Testing & Testability',
        description: 'Designing code that is easy to test and maintain.',
        status: 'not-started',
        estimatedHours: 4,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'lld-7-1', title: 'Unit Testing Principles', status: 'not-started', resources: ['https://martinfowler.com/bliki/UnitTest.html'] },
          { id: 'lld-7-2', title: 'Test-Driven Development (TDD)', status: 'not-started', resources: ['https://martinfowler.com/bliki/TestDrivenDevelopment.html'] },
          { id: 'lld-7-3', title: 'Mocking and Dependency Injection', status: 'not-started', resources: ['https://site.mockito.org/'] },
          { id: 'lld-7-4', title: 'Test Doubles (Mocks, Stubs, Fakes)', status: 'not-started', resources: ['https://martinfowler.com/articles/mocksArentStubs.html'] },
          { id: 'lld-7-5', title: 'Integration Testing Strategies', status: 'not-started', resources: ['https://martinfowler.com/bliki/IntegrationTest.html'] }
        ]
      },
      {
        id: 'lld-8',
        title: 'Performance Considerations',
        description: 'Designing for performance at the code level.',
        status: 'not-started',
        estimatedHours: 3,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'lld-8-1', title: 'Algorithmic Complexity Analysis', status: 'not-started', resources: ['https://www.bigocheatsheet.com/'] },
          { id: 'lld-8-2', title: 'Memory Management', status: 'not-started', resources: ['https://www.oracle.com/webfolder/technetwork/tutorials/obe/java/gc01/index.html'] },
          { id: 'lld-8-3', title: 'Lazy Loading vs Eager Loading', status: 'not-started', resources: ['https://www.baeldung.com/hibernate-lazy-eager-loading'] },
          { id: 'lld-8-4', title: 'Object Pooling', status: 'not-started', resources: ['https://www.geeksforgeeks.org/object-pool-design-pattern/'] },
          { id: 'lld-8-5', title: 'Profiling and Performance Tuning', status: 'not-started', resources: ['https://docs.oracle.com/javase/8/docs/technotes/guides/troubleshoot/'] }
        ]
      }
    ]
  },
  'case-studies': {
    name: 'Real-World Case Studies',
    topics: [
      {
        id: 'case-1',
        title: 'Social Media Platform Design',
        description: 'Design a system like Twitter or Instagram.',
        status: 'not-started',
        estimatedHours: 6,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'case-1-1', title: 'User Timeline Generation', status: 'not-started', resources: ['https://www.educative.io/courses/grokking-the-system-design-interview/m2G48X18NDO'] },
          { id: 'case-1-2', title: 'Content Delivery & CDN', status: 'not-started', resources: ['https://github.com/donnemartin/system-design-primer#content-delivery-network'] },
          { id: 'case-1-3', title: 'Real-time Notifications', status: 'not-started', resources: ['https://www.educative.io/courses/grokking-the-system-design-interview/B815A0y2Wp4'] },
          { id: 'case-1-4', title: 'Search and Discovery', status: 'not-started', resources: ['https://www.elastic.co/guide/en/elasticsearch/guide/current/index.html'] },
          { id: 'case-1-5', title: 'Analytics & Metrics Collection', status: 'not-started', resources: ['https://kafka.apache.org/uses#website_activity_tracking'] }
        ]
      },      {
        id: 'case-2',
        title: 'Chat Application Design',
        description: 'Design a real-time chat system like WhatsApp or Slack.',
        status: 'not-started',
        estimatedHours: 5,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'case-2-1', title: 'Real-time Messaging (WebSockets)', status: 'not-started', resources: ['https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API'] },
          { id: 'case-2-2', title: 'Message Storage & Retrieval', status: 'not-started', resources: ['https://cassandra.apache.org/doc/latest/'] },
          { id: 'case-2-3', title: 'Online Presence & Status', status: 'not-started', resources: ['https://redis.io/topics/pubsub'] },
          { id: 'case-2-4', title: 'Push Notifications', status: 'not-started', resources: ['https://firebase.google.com/docs/cloud-messaging'] },
          { id: 'case-2-5', title: 'End-to-End Encryption', status: 'not-started', resources: ['https://signal.org/docs/'] },
          { id: 'case-2-6', title: 'Group Chat & Channels', status: 'not-started', resources: ['https://discord.com/developers/docs'] },
          { id: 'case-2-7', title: 'File Sharing & Media Handling', status: 'not-started', resources: ['https://aws.amazon.com/s3/'] }
        ]
      },
      {
        id: 'case-3',
        title: 'Video Streaming Platform',
        description: 'Design a system like YouTube or Netflix.',
        status: 'not-started',
        estimatedHours: 7,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'case-3-1', title: 'Video Upload & Processing', status: 'not-started', resources: ['https://aws.amazon.com/media-services/'] },
          { id: 'case-3-2', title: 'Video Storage & CDN', status: 'not-started', resources: ['https://aws.amazon.com/cloudfront/'] },
          { id: 'case-3-3', title: 'Video Streaming Protocols (HLS, DASH)', status: 'not-started', resources: ['https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery'] },
          { id: 'case-3-4', title: 'Recommendation System', status: 'not-started', resources: ['https://developers.google.com/machine-learning/recommendation'] },
          { id: 'case-3-5', title: 'Analytics & View Tracking', status: 'not-started', resources: ['https://github.com/donnemartin/system-design-primer#analytics'] },
          { id: 'case-3-6', title: 'Video Quality Adaptation', status: 'not-started', resources: ['https://bitmovin.com/adaptive-streaming/'] },
          { id: 'case-3-7', title: 'Content Moderation System', status: 'not-started', resources: ['https://aws.amazon.com/rekognition/'] }
        ]
      },
      {
        id: 'case-4',
        title: 'E-commerce Platform Design',
        description: 'Design a system like Amazon or eBay.',
        status: 'not-started',
        estimatedHours: 8,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'case-4-1', title: 'Product Catalog & Search', status: 'not-started', resources: ['https://www.elastic.co/solutions/ecommerce'] },
          { id: 'case-4-2', title: 'Inventory Management', status: 'not-started', resources: ['https://microservices.io/patterns/data/database-per-service.html'] },
          { id: 'case-4-3', title: 'Shopping Cart & Checkout', status: 'not-started', resources: ['https://stripe.com/docs/payments'] },
          { id: 'case-4-4', title: 'Order Processing & Fulfillment', status: 'not-started', resources: ['https://microservices.io/patterns/data/saga.html'] },
          { id: 'case-4-5', title: 'Payment Processing', status: 'not-started', resources: ['https://stripe.com/docs/connect'] },
          { id: 'case-4-6', title: 'Recommendation Engine', status: 'not-started', resources: ['https://aws.amazon.com/personalize/'] },
          { id: 'case-4-7', title: 'Review & Rating System', status: 'not-started', resources: ['https://www.mongodb.com/blog/post/building-with-patterns-the-schema-versioning-pattern'] },
          { id: 'case-4-8', title: 'Flash Sales & High Traffic Events', status: 'not-started', resources: ['https://netflixtechblog.com/performance-under-load-3e6fa9a60581'] }
        ]
      },
      {
        id: 'case-5',
        title: 'URL Shortener Design',
        description: 'Design a system like bit.ly or tinyurl.',
        status: 'not-started',
        estimatedHours: 4,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'case-5-1', title: 'URL Encoding Algorithms', status: 'not-started', resources: ['https://www.educative.io/courses/grokking-the-system-design-interview/m2ygV4E81AR'] },
          { id: 'case-5-2', title: 'Database Schema Design', status: 'not-started', resources: ['https://github.com/donnemartin/system-design-primer#design-pastebin'] },
          { id: 'case-5-3', title: 'Caching Strategy', status: 'not-started', resources: ['https://redis.io/docs/manual/patterns/'] },
          { id: 'case-5-4', title: 'Analytics & Click Tracking', status: 'not-started', resources: ['https://clickhouse.com/docs/en/'] },
          { id: 'case-5-5', title: 'Rate Limiting', status: 'not-started', resources: ['https://konghq.com/blog/how-to-design-a-scalable-rate-limiting-algorithm/'] },
          { id: 'case-5-6', title: 'Custom Domain Support', status: 'not-started', resources: ['https://www.cloudflare.com/ssl/'] }
        ]
      },
      {
        id: 'case-6',
        title: 'Ride-Sharing Service Design',
        description: 'Design a system like Uber or Lyft.',
        status: 'not-started',
        estimatedHours: 7,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'case-6-1', title: 'Real-time Location Tracking', status: 'not-started', resources: ['https://eng.uber.com/h3/'] },
          { id: 'case-6-2', title: 'Driver-Rider Matching Algorithm', status: 'not-started', resources: ['https://eng.uber.com/geospatial-indexing-at-uber/'] },
          { id: 'case-6-3', title: 'Route Optimization', status: 'not-started', resources: ['https://developers.google.com/maps/documentation/directions/overview'] },
          { id: 'case-6-4', title: 'Dynamic Pricing (Surge Pricing)', status: 'not-started', resources: ['https://eng.uber.com/machine-learning-marketplace/'] },
          { id: 'case-6-5', title: 'Payment Processing', status: 'not-started', resources: ['https://stripe.com/docs/connect/destination-charges'] },
          { id: 'case-6-6', title: 'Trip Management & State Machine', status: 'not-started', resources: ['https://eng.uber.com/trip-data-architecture/'] },
          { id: 'case-6-7', title: 'ETA Calculation', status: 'not-started', resources: ['https://eng.uber.com/neural-networks/'] }
        ]
      },
      {
        id: 'case-7',
        title: 'Food Delivery Platform',
        description: 'Design a system like DoorDash or Zomato.',
        status: 'not-started',
        estimatedHours: 6,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'case-7-1', title: 'Restaurant & Menu Management', status: 'not-started', resources: ['https://doordash.engineering/'] },
          { id: 'case-7-2', title: 'Order Processing Pipeline', status: 'not-started', resources: ['https://blog.doordash.com/building-faster-indexing-with-apache-kafka-and-elasticsearch-1c6c7f82482'] },
          { id: 'case-7-3', title: 'Delivery Partner Assignment', status: 'not-started', resources: ['https://doordash.engineering/2020/02/28/next-generation-optimization-for-dasher-dispatch-at-doordash/'] },
          { id: 'case-7-4', title: 'Real-time Order Tracking', status: 'not-started', resources: ['https://eng.uber.com/real-time-push-platform/'] },
          { id: 'case-7-5', title: 'Inventory Management', status: 'not-started', resources: ['https://blog.doordash.com/powering-machine-learning-with-amazon-redshift-7aacc9fc8e95'] },
          { id: 'case-7-6', title: 'Search & Recommendation Engine', status: 'not-started', resources: ['https://doordash.engineering/2017/07/06/doordash-ml-platform/'] }
        ]
      },
      {
        id: 'case-8',
        title: 'Online Gaming Platform',
        description: 'Design a multiplayer gaming system.',
        status: 'not-started',
        estimatedHours: 6,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'case-8-1', title: 'Real-time Game State Synchronization', status: 'not-started', resources: ['https://www.gamasutra.com/view/feature/131781/1500_archers_on_a_288_network_.php'] },
          { id: 'case-8-2', title: 'Matchmaking System', status: 'not-started', resources: ['https://technology.riotgames.com/news/deep-dive-riot-messaging-service'] },
          { id: 'case-8-3', title: 'Leaderboards & Rankings', status: 'not-started', resources: ['https://redis.io/commands/zadd'] },
          { id: 'case-8-4', title: 'Anti-Cheat System', status: 'not-started', resources: ['https://technology.riotgames.com/news/riots-approach-anti-cheat'] },
          { id: 'case-8-5', title: 'Game Analytics & Telemetry', status: 'not-started', resources: ['https://aws.amazon.com/gameanalytics/'] },
          { id: 'case-8-6', title: 'In-game Purchase System', status: 'not-started', resources: ['https://developer.apple.com/in-app-purchase/'] }
        ]
      },
      {
        id: 'case-9',
        title: 'Collaborative Document Editor',
        description: 'Design a system like Google Docs or Notion.',
        status: 'not-started',
        estimatedHours: 6,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'case-9-1', title: 'Operational Transformation (OT)', status: 'not-started', resources: ['https://en.wikipedia.org/wiki/Operational_transformation'] },
          { id: 'case-9-2', title: 'Conflict-free Replicated Data Types (CRDTs)', status: 'not-started', resources: ['https://crdt.tech/'] },
          { id: 'case-9-3', title: 'Real-time Collaboration', status: 'not-started', resources: ['https://yjs.dev/'] },
          { id: 'case-9-4', title: 'Version History & Document Snapshots', status: 'not-started', resources: ['https://www.notion.so/help/version-history'] },
          { id: 'case-9-5', title: 'Permissions & Access Control', status: 'not-started', resources: ['https://developers.google.com/drive/api/v3/about-permissions'] },
          { id: 'case-9-6', title: 'Rich Text Storage & Rendering', status: 'not-started', resources: ['https://quilljs.com/'] }
        ]
      },
      {
        id: 'case-10',
        title: 'Live Streaming Platform',
        description: 'Design a system like Twitch or YouTube Live.',
        status: 'not-started',
        estimatedHours: 7,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'case-10-1', title: 'Video Ingestion & Encoding', status: 'not-started', resources: ['https://aws.amazon.com/media-services/'] },
          { id: 'case-10-2', title: 'Real-time Video Distribution', status: 'not-started', resources: ['https://blog.twitch.tv/en/2017/10/10/live-video-transmuxing-transcoding-ffmpeg-vs-twitchtranscoder-part-i-489c1c125f28/'] },
          { id: 'case-10-3', title: 'Chat & Real-time Interactions', status: 'not-started', resources: ['https://blog.twitch.tv/en/2019/04/10/chat-architecture-at-twitch-38f04e8a2df/'] },
          { id: 'case-10-4', title: 'Low Latency Streaming', status: 'not-started', resources: ['https://blog.twitch.tv/en/2016/11/03/how-twitch-reduces-video-latency-part-1-418148e5b1f0/'] },
          { id: 'case-10-5', title: 'Content Moderation', status: 'not-started', resources: ['https://blog.twitch.tv/en/2020/12/09/how-we-use-machine-learning-to-improve-discovery-and-safety-2c8116b9ecaa/'] },
          { id: 'case-10-6', title: 'Monetization & Virtual Gifts', status: 'not-started', resources: ['https://dev.twitch.tv/docs/api/reference#get-bits-leaderboard'] },
          { id: 'case-10-7', title: 'Global CDN & Edge Servers', status: 'not-started', resources: ['https://blog.twitch.tv/en/2016/04/13/video-delivery-architecture-at-twitch-8ed78710a32e/'] }
        ]
      },
      {
        id: 'case-11',
        title: 'Distributed File Storage System',
        description: 'Design a system like Google Drive or Dropbox.',
        status: 'not-started',
        estimatedHours: 7,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'case-11-1', title: 'File Chunking & Deduplication', status: 'not-started', resources: ['https://dropbox.tech/infrastructure/streaming-file-synchronization'] },
          { id: 'case-11-2', title: 'Metadata Management', status: 'not-started', resources: ['https://dropbox.tech/infrastructure/rewriting-the-heart-of-our-sync-engine'] },
          { id: 'case-11-3', title: 'Synchronization Algorithm', status: 'not-started', resources: ['https://dropbox.tech/infrastructure/inside-the-magic-pocket'] },
          { id: 'case-11-4', title: 'Conflict Resolution', status: 'not-started', resources: ['https://dropbox.tech/infrastructure/lessons-learned-from-creating-a-secure-network-service-mesh'] },
          { id: 'case-11-5', title: 'File Versioning', status: 'not-started', resources: ['https://help.dropbox.com/files-folders/restore-delete/version-history'] },
          { id: 'case-11-6', title: 'Sharing & Permissions', status: 'not-started', resources: ['https://developers.google.com/drive/api/v3/about-permissions'] },
          { id: 'case-11-7', title: 'Client-Side Optimization', status: 'not-started', resources: ['https://dropbox.tech/infrastructure/optimizing-web-servers-for-high-throughput'] }
        ]
      },
      {
        id: 'case-12',
        title: 'Job Scheduling System',
        description: 'Design a distributed job scheduler like Airflow.',
        status: 'not-started',
        estimatedHours: 5,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'case-12-1', title: 'Job Queue Management', status: 'not-started', resources: ['https://airflow.apache.org/docs/apache-airflow/stable/concepts/dags.html'] },
          { id: 'case-12-2', title: 'Task Dependency Resolution', status: 'not-started', resources: ['https://airflow.apache.org/docs/apache-airflow/stable/concepts/tasks.html'] },
          { id: 'case-12-3', title: 'Worker Node Management', status: 'not-started', resources: ['https://airflow.apache.org/docs/apache-airflow/stable/concepts/executor/index.html'] },
          { id: 'case-12-4', title: 'Job Prioritization & SLA', status: 'not-started', resources: ['https://airflow.apache.org/docs/apache-airflow/stable/concepts/pools.html'] },
          { id: 'case-12-5', title: 'Failure Handling & Retry Logic', status: 'not-started', resources: ['https://airflow.apache.org/docs/apache-airflow/stable/concepts/tasks.html#retries'] },
          { id: 'case-12-6', title: 'Monitoring & Alerting', status: 'not-started', resources: ['https://airflow.apache.org/docs/apache-airflow/stable/logging-monitoring/index.html'] }
        ]
      }
    ]
  }
};

export default systemDesignRoadmapData;
