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
          { id: 'fund-1-1', title: 'Horizontal vs Vertical Scaling', status: 'not-started', resources: ['https://www.geeksforgeeks.org/horizontal-and-vertical-scaling/', 'https://aws.amazon.com/blogs/database/scaling-your-amazon-rds-instance-vertically-and-horizontally/', 'https://docs.microsoft.com/en-us/azure/architecture/guide/design-principles/scale-out'] },
          { id: 'fund-1-2', title: 'Load Balancing Concepts', status: 'not-started', resources: ['https://www.nginx.com/resources/glossary/load-balancing/', 'https://aws.amazon.com/elasticloadbalancing/', 'https://cloud.google.com/load-balancing/docs/load-balancing-overview'] },
          { id: 'fund-1-3', title: 'Stateless vs Stateful Applications', status: 'not-started', resources: ['https://www.redhat.com/en/topics/cloud-native-apps/stateful-vs-stateless', 'https://12factor.net/processes', 'https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/'] },
          { id: 'fund-1-4', title: 'CAP Theorem', status: 'not-started', resources: ['https://www.ibm.com/topics/cap-theorem', 'https://martin.kleppmann.com/2015/05/11/please-stop-calling-databases-cp-or-ap.html', 'https://codahale.com/you-cant-sacrifice-partition-tolerance/'] },
          { id: 'fund-1-5', title: 'ACID Properties', status: 'not-started', resources: ['https://www.geeksforgeeks.org/acid-properties-in-dbms/', 'https://neo4j.com/developer/guide-acid-consistency/', 'https://fauna.com/blog/demystifying-database-systems-correctness-anomalies-under-serializable-isolation'] },
          { id: 'fund-1-6', title: 'Auto-scaling & Elasticity', status: 'not-started', resources: ['https://aws.amazon.com/autoscaling/', 'https://cloud.google.com/compute/docs/autoscaler', 'https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/'] },
          { id: 'fund-1-7', title: 'CDN & Edge Computing', status: 'not-started', resources: ['https://www.cloudflare.com/learning/cdn/what-is-a-cdn/', 'https://aws.amazon.com/cloudfront/', 'https://developer.fastly.com/learning/concepts/edge/'] }
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
          { id: 'fund-2-1', title: 'Requirements Gathering (Functional & Non-Functional)', status: 'not-started', resources: ['https://www.educative.io/courses/grokking-the-system-design-interview', 'https://github.com/donnemartin/system-design-primer#step-1-outline-use-cases-constraints-and-assumptions', 'https://www.interviewbit.com/system-design-interview-questions/'] },
          { id: 'fund-2-2', title: 'Capacity Planning and Estimation', status: 'not-started', resources: ['https://github.com/donnemartin/system-design-primer#step-2-estimate-the-scale', 'https://aws.amazon.com/blogs/aws/s3-simple-storage-service/', 'https://highscalability.com/blog/2011/1/26/google-pro-tip-use-back-of-the-envelope-calculations-to-choo.html'] },
          { id: 'fund-2-3', title: 'High-Level Design', status: 'not-started', resources: ['https://www.interviewbit.com/system-design-interview-questions/', 'https://github.com/donnemartin/system-design-primer#step-3-design-high-level', 'https://www.educative.io/courses/grokking-the-system-design-interview/m2ygV4E81AR'] },
          { id: 'fund-2-4', title: 'Detailed Design', status: 'not-started', resources: ['https://leetcode.com/discuss/interview-question/system-design/', 'https://github.com/donnemartin/system-design-primer#step-4-design-core-components', 'https://www.educative.io/courses/grokking-the-system-design-interview'] },
          { id: 'fund-2-5', title: 'Identifying and Resolving Bottlenecks', status: 'not-started', resources: ['https://aws.amazon.com/architecture/well-architected/', 'https://github.com/donnemartin/system-design-primer#step-5-scale-the-design', 'https://netflixtechblog.com/performance-under-load-3e6fa9a60581'] }
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
          { id: 'fund-3-1', title: 'Latency vs Throughput', status: 'not-started', resources: ['https://www.cloudflare.com/learning/performance/latency-vs-throughput/', 'https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/', 'https://netflixtechblog.com/performance-under-load-3e6fa9a60581'] },
          { id: 'fund-3-2', title: 'Availability and Reliability', status: 'not-started', resources: ['https://sre.google/sre-book/availability-table/', 'https://aws.amazon.com/blogs/architecture/disaster-recovery-dr-architecture-on-aws/', 'https://landing.google.com/sre/sre-book/chapters/availability/'] },
          { id: 'fund-3-3', title: 'Consistency Models', status: 'not-started', resources: ['https://jepsen.io/consistency', 'https://aphyr.com/posts/313-strong-consistency-models', 'https://martin.kleppmann.com/2015/05/11/please-stop-calling-databases-cp-or-ap.html'] },
          { id: 'fund-3-4', title: 'SLA, SLO, and SLI', status: 'not-started', resources: ['https://sre.google/sre-book/service-level-objectives/', 'https://aws.amazon.com/blogs/mt/implementing-service-level-objectives/', 'https://landing.google.com/sre/sre-book/chapters/service-level-objectives/'] }
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
          { id: 'db-1-1', title: 'Relational Databases (RDBMS)', status: 'not-started', resources: ['https://www.postgresql.org/docs/', 'https://dev.mysql.com/doc/', 'https://sqlite.org/docs.html'] },
          { id: 'db-1-2', title: 'NoSQL Databases (Document, Key-Value, Graph)', status: 'not-started', resources: ['https://docs.mongodb.com/', 'https://redis.io/documentation', 'https://neo4j.com/docs/'] },
          { id: 'db-1-3', title: 'Time Series Databases', status: 'not-started', resources: ['https://docs.influxdata.com/influxdb/', 'https://prometheus.io/docs/', 'https://docs.timescale.com/'] },
          { id: 'db-1-4', title: 'Search Engines (Elasticsearch)', status: 'not-started', resources: ['https://www.elastic.co/guide/', 'https://solr.apache.org/guide/', 'https://opensearch.org/docs/'] },
          { id: 'db-1-5', title: 'Database Selection Criteria', status: 'not-started', resources: ['https://aws.amazon.com/products/databases/', 'https://www.mongodb.com/compare', 'https://db-engines.com/en/ranking'] }
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
          { id: 'db-2-1', title: 'Read Replicas', status: 'not-started', resources: ['https://aws.amazon.com/rds/features/read-replicas/', 'https://dev.mysql.com/doc/refman/8.0/en/replication.html', 'https://www.postgresql.org/docs/current/warm-standby.html'] },
          { id: 'db-2-2', title: 'Database Sharding', status: 'not-started', resources: ['https://www.mongodb.com/features/database-sharding-explained', 'https://vitess.io/docs/', 'https://aws.amazon.com/blogs/database/sharding-with-amazon-relational-database-service/'] },
          { id: 'db-2-3', title: 'Federation', status: 'not-started', resources: ['https://github.com/donnemartin/system-design-primer#federation', 'https://www.citusdata.com/blog/2018/01/10/query-all-your-tables-with-postgresql-foreign-data-wrappers/', 'https://docs.microsoft.com/en-us/sql/relational-databases/polybase/'] },
          { id: 'db-2-4', title: 'Denormalization', status: 'not-started', resources: ['https://www.geeksforgeeks.org/denormalization-in-databases/', 'https://www.studytonight.com/dbms/denormalization-in-dbms.php', 'https://www.tutorialspoint.com/dbms/dbms_denormalization.htm'] },
          { id: 'db-2-5', title: 'SQL Tuning and Optimization', status: 'not-started', resources: ['https://use-the-index-luke.com/', 'https://www.postgresql.org/docs/current/performance-tips.html', 'https://dev.mysql.com/doc/refman/8.0/en/optimization.html'] }
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
          { id: 'db-3-1', title: 'ACID vs BASE', status: 'not-started', resources: ['https://www.geeksforgeeks.org/acid-vs-base-in-databases/', 'https://neo4j.com/blog/acid-vs-base-consistency-models-explained/', 'https://fauna.com/blog/acid-transactions-in-a-globally-distributed-database'] },
          { id: 'db-3-2', title: 'Two-Phase Commit (2PC)', status: 'not-started', resources: ['https://www.cs.princeton.edu/courses/archive/fall16/cos418/docs/L6-2pc.pdf', 'https://en.wikipedia.org/wiki/Two-phase_commit_protocol', 'https://martinfowler.com/articles/patterns-of-distributed-systems/two-phase-commit.html'] },
          { id: 'db-3-3', title: 'Eventual Consistency', status: 'not-started', resources: ['https://aws.amazon.com/builders-library/challenges-with-distributed-systems/', 'https://www.allthingsdistributed.com/2008/12/eventually_consistent.html', 'https://docs.microsoft.com/en-us/azure/cosmos-db/consistency-levels'] },
          { id: 'db-3-4', title: 'Saga Pattern', status: 'not-started', resources: ['https://microservices.io/patterns/data/saga.html', 'https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/saga/saga', 'https://blog.couchbase.com/saga-pattern-implement-business-transactions-using-microservices-part/'] }
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
          { id: 'cache-1-1', title: 'Cache Hit vs Cache Miss', status: 'not-started', resources: ['https://www.cloudflare.com/learning/cdn/what-is-caching/', 'https://aws.amazon.com/caching/', 'https://redis.io/docs/manual/eviction/'] },
          { id: 'cache-1-2', title: 'Cache Eviction Policies (LRU, LFU, FIFO)', status: 'not-started', resources: ['https://www.geeksforgeeks.org/lru-cache-implementation/', 'https://redis.io/docs/manual/eviction/', 'https://en.wikipedia.org/wiki/Cache_replacement_policies'] },
          { id: 'cache-1-3', title: 'Cache Levels (L1, L2, L3)', status: 'not-started', resources: ['https://www.tutorialspoint.com/computer_organization_and_architecture/cache_memory.htm', 'https://www.geeksforgeeks.org/cache-memory-in-computer-organization/', 'https://cs.stanford.edu/people/eroberts/courses/soco/projects/risc/caches/'] },
          { id: 'cache-1-4', title: 'Cache Coherence', status: 'not-started', resources: ['https://www.geeksforgeeks.org/cache-coherence/', 'https://en.wikipedia.org/wiki/Cache_coherence', 'https://courses.cs.washington.edu/courses/cse378/09wi/lectures/lec15.pdf'] }
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
          { id: 'cache-2-1', title: 'Cache-Aside (Lazy Loading)', status: 'not-started', resources: ['https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/Strategies.html', 'https://docs.microsoft.com/en-us/azure/architecture/patterns/cache-aside', 'https://hazelcast.com/blog/a-hitchhikers-guide-to-caching-patterns/'] },
          { id: 'cache-2-2', title: 'Write-Through Cache', status: 'not-started', resources: ['https://redis.io/docs/manual/patterns/', 'https://www.baeldung.com/spring-cache-tutorial', 'https://docs.oracle.com/middleware/1221/coherence/develop-applications/cache_rtwtwbra.htm'] },
          { id: 'cache-2-3', title: 'Write-Behind (Write-Back) Cache', status: 'not-started', resources: ['https://hazelcast.com/blog/a-hitchhikers-guide-to-caching-patterns/', 'https://docs.oracle.com/middleware/1221/coherence/develop-applications/cache_rtwtwbra.htm', 'https://redis.io/docs/manual/patterns/'] },
          { id: 'cache-2-4', title: 'Refresh-Ahead Cache', status: 'not-started', resources: ['https://docs.oracle.com/middleware/1221/coherence/develop-applications/cache_rtwtwbra.htm', 'https://hazelcast.com/blog/a-hitchhikers-guide-to-caching-patterns/', 'https://www.ehcache.org/documentation/3.8/caching-patterns.html'] },
          { id: 'cache-2-5', title: 'Distributed Caching', status: 'not-started', resources: ['https://redis.io/topics/cluster-tutorial', 'https://hazelcast.com/use-cases/caching/', 'https://www.memcached.org/'] }
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
          { id: 'cache-3-1', title: 'Redis', status: 'not-started', resources: ['https://redis.io/documentation', 'https://try.redis.io/', 'https://www.tutorialspoint.com/redis/'] },
          { id: 'cache-3-2', title: 'Memcached', status: 'not-started', resources: ['https://memcached.org/', 'https://github.com/memcached/memcached/wiki', 'https://www.tutorialspoint.com/memcached/'] },
          { id: 'cache-3-3', title: 'CDN (Content Delivery Networks)', status: 'not-started', resources: ['https://www.cloudflare.com/learning/cdn/what-is-a-cdn/', 'https://aws.amazon.com/cloudfront/', 'https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching'] },
          { id: 'cache-3-4', title: 'Application-Level Caching', status: 'not-started', resources: ['https://spring.io/guides/gs/caching/', 'https://docs.djangoproject.com/en/4.0/topics/cache/', 'https://expressjs.com/en/advanced/best-practice-performance.html#use-caching'] }
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
          { id: 'micro-1-1', title: 'Monolith vs Microservices', status: 'not-started', resources: ['https://microservices.io/patterns/monolithic.html', 'https://martinfowler.com/articles/microservices.html', 'https://www.atlassian.com/microservices/microservices-architecture/microservices-vs-monolith'] },
          { id: 'micro-1-2', title: 'Service Decomposition', status: 'not-started', resources: ['https://microservices.io/patterns/decomposition/', 'https://martinfowler.com/articles/microservice-trade-offs.html', 'https://docs.microsoft.com/en-us/azure/architecture/microservices/model/microservice-boundaries'] },
          { id: 'micro-1-3', title: 'Domain-Driven Design (DDD)', status: 'not-started', resources: ['https://martinfowler.com/tags/domain%20driven%20design.html', 'https://www.domainlanguage.com/ddd/', 'https://vaadin.com/learn/tutorials/ddd'] },
          { id: 'micro-1-4', title: 'Bounded Contexts', status: 'not-started', resources: ['https://martinfowler.com/bliki/BoundedContext.html', 'https://docs.microsoft.com/en-us/azure/architecture/microservices/model/domain-analysis', 'https://www.culttt.com/2014/11/26/bounded-contexts/'] },
          { id: 'micro-1-5', title: 'Conway\'s Law', status: 'not-started', resources: ['https://www.melconway.com/Home/Conways_Law.html', 'https://martinfowler.com/bliki/ConwaysLaw.html', 'https://blog.octo.com/en/conways-law-and-system-design/'] }
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
          { id: 'micro-2-1', title: 'Synchronous Communication (REST, GraphQL)', status: 'not-started', resources: ['https://restfulapi.net/', 'https://graphql.org/learn/', 'https://grpc.io/docs/'] },
          { id: 'micro-2-2', title: 'Asynchronous Communication (Message Queues)', status: 'not-started', resources: ['https://www.rabbitmq.com/tutorials/tutorial-one-python.html', 'https://kafka.apache.org/quickstart', 'https://aws.amazon.com/sqs/'] },
          { id: 'micro-2-3', title: 'Event-Driven Architecture', status: 'not-started', resources: ['https://martinfowler.com/articles/201701-event-driven.html', 'https://aws.amazon.com/event-driven-architecture/', 'https://www.confluent.io/learn/event-driven-architecture/'] },
          { id: 'micro-2-4', title: 'API Gateway Pattern', status: 'not-started', resources: ['https://microservices.io/patterns/apigateway.html', 'https://aws.amazon.com/api-gateway/', 'https://konghq.com/learning-center/api-gateway/'] },
          { id: 'micro-2-5', title: 'Service Mesh', status: 'not-started', resources: ['https://istio.io/latest/docs/concepts/what-is-istio/', 'https://linkerd.io/2.11/overview/', 'https://www.redhat.com/en/topics/microservices/what-is-a-service-mesh'] }
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
          { id: 'micro-3-1', title: 'Database per Service', status: 'not-started', resources: ['https://microservices.io/patterns/data/database-per-service.html', 'https://martinfowler.com/bliki/DatabasePerService.html', 'https://docs.microsoft.com/en-us/azure/architecture/microservices/design/data-considerations'] },
          { id: 'micro-3-2', title: 'Shared Database Anti-pattern', status: 'not-started', resources: ['https://microservices.io/patterns/data/shared-database.html', 'https://martinfowler.com/articles/microservices.html#DecentralizedDataManagement', 'https://www.nginx.com/blog/microservices-at-netflix-architectural-best-practices/'] },
          { id: 'micro-3-3', title: 'Event Sourcing', status: 'not-started', resources: ['https://martinfowler.com/eaaDev/EventSourcing.html', 'https://www.eventstore.com/event-sourcing', 'https://microservices.io/patterns/data/event-sourcing.html'] },
          { id: 'micro-3-4', title: 'CQRS (Command Query Responsibility Segregation)', status: 'not-started', resources: ['https://martinfowler.com/bliki/CQRS.html', 'https://docs.microsoft.com/en-us/azure/architecture/patterns/cqrs', 'https://www.eventstore.com/cqrs-pattern'] },
          { id: 'micro-3-5', title: 'Distributed Transactions', status: 'not-started', resources: ['https://microservices.io/patterns/data/saga.html', 'https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/saga/saga', 'https://blog.couchbase.com/saga-pattern-implement-business-transactions-using-microservices-part/'] }
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
          { id: 'msg-1-1', title: 'Publisher-Subscriber Pattern', status: 'not-started', resources: ['https://aws.amazon.com/pub-sub-messaging/', 'https://cloud.google.com/pubsub/docs/overview', 'https://redis.io/topics/pubsub'] },
          { id: 'msg-1-2', title: 'Point-to-Point Messaging', status: 'not-started', resources: ['https://www.enterpriseintegrationpatterns.com/patterns/messaging/PointToPointChannel.html', 'https://aws.amazon.com/sqs/', 'https://www.rabbitmq.com/tutorials/tutorial-two-python.html'] },
          { id: 'msg-1-3', title: 'Message Durability', status: 'not-started', resources: ['https://www.rabbitmq.com/persistence-conf.html', 'https://kafka.apache.org/documentation/#persistence', 'https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-durability.html'] },
          { id: 'msg-1-4', title: 'Message Ordering', status: 'not-started', resources: ['https://kafka.apache.org/documentation/#intro_guarantees', 'https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html', 'https://www.rabbitmq.com/confirms.html'] }
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
          { id: 'msg-2-1', title: 'Apache Kafka', status: 'not-started', resources: ['https://kafka.apache.org/quickstart', 'https://www.confluent.io/learn/', 'https://kafka.apache.org/documentation/'] },
          { id: 'msg-2-2', title: 'RabbitMQ', status: 'not-started', resources: ['https://www.rabbitmq.com/tutorials/', 'https://www.cloudamqp.com/blog/', 'https://www.rabbitmq.com/documentation.html'] },
          { id: 'msg-2-3', title: 'Amazon SQS/SNS', status: 'not-started', resources: ['https://docs.aws.amazon.com/sqs/', 'https://docs.aws.amazon.com/sns/', 'https://aws.amazon.com/getting-started/hands-on/send-messages-distributed-applications/'] },
          { id: 'msg-2-4', title: 'Apache Pulsar', status: 'not-started', resources: ['https://pulsar.apache.org/docs/', 'https://pulsar.apache.org/docs/en/concepts-overview/', 'https://www.splunk.com/en_us/blog/learn/apache-pulsar.html'] },
          { id: 'msg-2-5', title: 'Redis Pub/Sub', status: 'not-started', resources: ['https://redis.io/topics/pubsub', 'https://redis.io/commands/publish', 'https://www.tutorialspoint.com/redis/redis_pub_sub.htm'] }
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
          { id: 'msg-3-1', title: 'Event Store', status: 'not-started', resources: ['https://eventstore.com/', 'https://www.eventstore.com/blog/what-is-an-event-store', 'https://github.com/EventStore/EventStore'] },
          { id: 'msg-3-2', title: 'Change Data Capture (CDC)', status: 'not-started', resources: ['https://debezium.io/', 'https://kafka.apache.org/documentation/#connect', 'https://docs.confluent.io/kafka-connect-jdbc/current/source-connector/index.html'] },
          { id: 'msg-3-3', title: 'Stream Processing', status: 'not-started', resources: ['https://kafka.apache.org/documentation/streams/', 'https://flink.apache.org/', 'https://spark.apache.org/streaming/'] },
          { id: 'msg-3-4', title: 'Dead Letter Queues', status: 'not-started', resources: ['https://aws.amazon.com/about-aws/whats-new/2014/01/30/amazon-sqs-announces-dead-letter-queues/', 'https://www.rabbitmq.com/dlx.html', 'https://cloud.google.com/pubsub/docs/dead-letter-topics'] }
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
          { id: 'sec-1-1', title: 'OAuth 2.0 & OpenID Connect', status: 'not-started', resources: ['https://auth0.com/intro-to-iam/what-is-oauth-2/', 'https://openid.net/connect/', 'https://oauth.net/2/'] },
          { id: 'sec-1-2', title: 'JWT (JSON Web Tokens)', status: 'not-started', resources: ['https://jwt.io/introduction/', 'https://auth0.com/learn/json-web-tokens/', 'https://tools.ietf.org/html/rfc7519'] },
          { id: 'sec-1-3', title: 'Session Management', status: 'not-started', resources: ['https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html', 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies', 'https://portswigger.net/web-security/authentication/other-mechanisms'] },
          { id: 'sec-1-4', title: 'Multi-Factor Authentication (MFA)', status: 'not-started', resources: ['https://www.nist.gov/itl/applied-cybersecurity/iad/list-projects/reducing-barriers-adoption-multi-factor-authentication', 'https://auth0.com/blog/multi-factor-authentication/', 'https://www.okta.com/identity-101/what-is-multi-factor-authentication/'] },
          { id: 'sec-1-5', title: 'Single Sign-On (SSO)', status: 'not-started', resources: ['https://auth0.com/blog/what-is-and-how-does-single-sign-on-work/', 'https://www.okta.com/identity-101/what-is-sso/', 'https://docs.microsoft.com/en-us/azure/active-directory/manage-apps/what-is-single-sign-on'] }
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
          { id: 'sec-2-1', title: 'Rate Limiting & Throttling', status: 'not-started', resources: ['https://cloud.google.com/architecture/rate-limiting-strategies-techniques', 'https://konghq.com/blog/how-to-design-a-scalable-rate-limiting-algorithm/', 'https://stripe.com/blog/rate-limiters'] },
          { id: 'sec-2-2', title: 'API Keys & Access Tokens', status: 'not-started', resources: ['https://cloud.google.com/endpoints/docs/openapi/when-why-api-key', 'https://auth0.com/blog/a-look-at-the-latest-draft-for-oauth-token-exchange/', 'https://nordicapis.com/why-api-keys-are-not-enough/'] },
          { id: 'sec-2-3', title: 'CORS (Cross-Origin Resource Sharing)', status: 'not-started', resources: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS', 'https://web.dev/cross-origin-resource-sharing/', 'https://portswigger.net/web-security/cors'] },
          { id: 'sec-2-4', title: 'Input Validation & Sanitization', status: 'not-started', resources: ['https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html', 'https://owasp.org/www-project-top-ten/2017/A1_2017-Injection', 'https://portswigger.net/web-security/sql-injection'] },
          { id: 'sec-2-5', title: 'HTTPS & TLS', status: 'not-started', resources: ['https://www.cloudflare.com/learning/ssl/what-is-https/', 'https://letsencrypt.org/how-it-works/', 'https://blog.cloudflare.com/rfc-8446-aka-tls-1-3/'] }
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
          { id: 'sec-3-1', title: 'Defense in Depth', status: 'not-started', resources: ['https://www.nist.gov/blogs/cybersecurity-insights/defense-depth-cybersecurity', 'https://www.sans.org/white-papers/1169/', 'https://owasp.org/www-community/controls/Defense_in_depth'] },
          { id: 'sec-3-2', title: 'Principle of Least Privilege', status: 'not-started', resources: ['https://www.cisa.gov/principle-least-privilege', 'https://www.nist.gov/blogs/cybersecurity-insights/getting-ready-zero-trust-architecture', 'https://owasp.org/www-community/Access_Control'] },
          { id: 'sec-3-3', title: 'Security by Design', status: 'not-started', resources: ['https://www.ncsc.gov.uk/collection/cyber-security-design-principles', 'https://owasp.org/www-project-secure-by-design/', 'https://www.sans.org/white-papers/2140/'] },
          { id: 'sec-3-4', title: 'Vulnerability Assessment', status: 'not-started', resources: ['https://owasp.org/www-project-top-ten/', 'https://owasp.org/www-project-web-security-testing-guide/', 'https://www.sans.org/white-papers/33901/'] },
          { id: 'sec-3-5', title: 'Security Monitoring & Logging', status: 'not-started', resources: ['https://www.sans.org/white-papers/1168/', 'https://owasp.org/www-project-logging-cheat-sheet/', 'https://csrc.nist.gov/publications/detail/sp/800-92/final'] }
        ]
      }
    ]
  }, 'monitoring': {
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
          { id: 'mon-1-1', title: 'Metrics, Logs, and Traces', status: 'not-started', resources: ['https://opentelemetry.io/docs/concepts/observability-primer/', 'https://www.honeycomb.io/blog/observability-101-terminology-and-concepts/', 'https://grafana.com/blog/2021/02/03/how-to-think-about-observability-vs.-three-pillars/'] },
          { id: 'mon-1-2', title: 'SLI, SLO, SLA', status: 'not-started', resources: ['https://sre.google/sre-book/service-level-objectives/', 'https://www.atlassian.com/incident-management/kpis/sla-vs-slo-vs-sli', 'https://newrelic.com/blog/best-practices/best-practices-for-setting-slos-and-slis-for-modern-complex-systems'] },
          { id: 'mon-1-3', title: 'Error Budgets', status: 'not-started', resources: ['https://sre.google/sre-book/embracing-risk/', 'https://cloud.google.com/blog/products/gcp/consequences-of-sre-error-budgets', 'https://www.blameless.com/blog/error-budget-policy'] },
          { id: 'mon-1-4', title: 'Golden Signals', status: 'not-started', resources: ['https://sre.google/sre-book/monitoring-distributed-systems/', 'https://grafana.com/blog/2018/08/02/the-red-method-how-to-instrument-your-services/', 'https://www.weave.works/blog/the-red-method-key-metrics-for-microservices-architecture/'] }
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
          { id: 'mon-2-1', title: 'Prometheus & Grafana', status: 'not-started', resources: ['https://prometheus.io/docs/', 'https://grafana.com/docs/', 'https://grafana.com/blog/2019/12/04/how-to-explore-prometheus-with-easy-hello-world-projects/'] },
          { id: 'mon-2-2', title: 'ELK Stack (Elasticsearch, Logstash, Kibana)', status: 'not-started', resources: ['https://www.elastic.co/what-is/elk-stack', 'https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html', 'https://logz.io/learn/complete-guide-elk-stack/'] },
          { id: 'mon-2-3', title: 'Jaeger for Distributed Tracing', status: 'not-started', resources: ['https://www.jaegertracing.io/docs/', 'https://opentracing.io/docs/', 'https://medium.com/jaegertracing/jaeger-tracing-a-friendly-guide-for-beginners-7b53a4a568ca'] },
          { id: 'mon-2-4', title: 'APM Tools (New Relic, Datadog)', status: 'not-started', resources: ['https://newrelic.com/platform', 'https://www.datadoghq.com/', 'https://docs.dynatrace.com/'] },
          { id: 'mon-2-5', title: 'CloudWatch (AWS)', status: 'not-started', resources: ['https://docs.aws.amazon.com/cloudwatch/', 'https://aws.amazon.com/cloudwatch/getting-started/', 'https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/'] }
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
          { id: 'mon-3-1', title: 'Alert Design Principles', status: 'not-started', resources: ['https://sre.google/sre-book/monitoring-distributed-systems/', 'https://docs.honeycomb.io/working-with-your-data/alerting/', 'https://www.pagerduty.com/resources/learn/what-is-alert-fatigue/'] },
          { id: 'mon-3-2', title: 'On-Call Practices', status: 'not-started', resources: ['https://landing.google.com/sre/sre-book/chapters/being-on-call/', 'https://www.pagerduty.com/resources/learn/what-is-on-call/', 'https://increment.com/on-call/'] },
          { id: 'mon-3-3', title: 'Incident Response', status: 'not-started', resources: ['https://response.pagerduty.com/', 'https://www.atlassian.com/incident-management', 'https://sre.google/sre-book/emergency-response/'] },
          { id: 'mon-3-4', title: 'Post-Mortem Analysis', status: 'not-started', resources: ['https://sre.google/sre-book/postmortem-culture/', 'https://www.atlassian.com/incident-management/postmortem', 'https://github.com/danluu/post-mortems'] }
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
          { id: 'lld-1-1', title: 'Encapsulation', status: 'not-started', resources: ['https://www.geeksforgeeks.org/encapsulation-in-java/', 'https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html', 'https://www.tutorialspoint.com/java/java_encapsulation.htm'] },
          { id: 'lld-1-2', title: 'Inheritance', status: 'not-started', resources: ['https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html', 'https://www.geeksforgeeks.org/inheritance-in-java/', 'https://www.javatpoint.com/inheritance-in-java'] },
          { id: 'lld-1-3', title: 'Polymorphism', status: 'not-started', resources: ['https://www.javatpoint.com/runtime-polymorphism-in-java', 'https://docs.oracle.com/javase/tutorial/java/IandI/polymorphism.html', 'https://www.geeksforgeeks.org/polymorphism-in-java/'] },
          { id: 'lld-1-4', title: 'Abstraction', status: 'not-started', resources: ['https://www.programiz.com/java-programming/abstraction', 'https://www.geeksforgeeks.org/abstraction-in-java-2/', 'https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html'] },
          { id: 'lld-1-5', title: 'Composition vs Inheritance', status: 'not-started', resources: ['https://www.baeldung.com/java-composition-aggregation-association', 'https://stackoverflow.com/questions/49002/prefer-composition-over-inheritance', 'https://www.thoughtworks.com/insights/blog/composition-vs-inheritance-how-to-choose'] }
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
          { id: 'lld-2-1', title: 'Single Responsibility Principle (SRP)', status: 'not-started', resources: ['https://blog.cleancoder.com/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html', 'https://stackify.com/solid-design-principles/', 'https://www.baeldung.com/solid/principles'] },
          { id: 'lld-2-2', title: 'Open/Closed Principle (OCP)', status: 'not-started', resources: ['https://stackify.com/solid-design-open-closed-principle/', 'https://www.baeldung.com/java-open-closed-principle', 'https://blog.cleancoder.com/uncle-bob/2014/05/12/TheOpenClosedPrinciple.html'] },
          { id: 'lld-2-3', title: 'Liskov Substitution Principle (LSP)', status: 'not-started', resources: ['https://www.baeldung.com/java-liskov-substitution-principle', 'https://stackify.com/liskov-substitution-principle/', 'https://blog.cleancoder.com/uncle-bob/2014/05/15/TheLiskovSubstitutionPrinciple.html'] },
          { id: 'lld-2-4', title: 'Interface Segregation Principle (ISP)', status: 'not-started', resources: ['https://stackify.com/interface-segregation-principle/', 'https://www.baeldung.com/java-interface-segregation', 'https://blog.cleancoder.com/uncle-bob/2014/05/16/TheInterfaceSegregationPrinciple.html'] },
          { id: 'lld-2-5', title: 'Dependency Inversion Principle (DIP)', status: 'not-started', resources: ['https://stackify.com/dependency-inversion-principle/', 'https://www.baeldung.com/java-dependency-inversion-principle', 'https://blog.cleancoder.com/uncle-bob/2014/05/17/TheDependencyInversionPrinciple.html'] }
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
          { id: 'lld-3-1', title: 'Creational Patterns (Singleton, Factory, Builder)', status: 'not-started', resources: ['https://refactoring.guru/design-patterns/creational-patterns', 'https://www.geeksforgeeks.org/creational-design-patterns/', 'https://sourcemaking.com/design_patterns/creational_patterns'] },
          { id: 'lld-3-2', title: 'Structural Patterns (Adapter, Decorator, Facade)', status: 'not-started', resources: ['https://refactoring.guru/design-patterns/structural-patterns', 'https://www.geeksforgeeks.org/structural-design-patterns/', 'https://sourcemaking.com/design_patterns/structural_patterns'] },
          { id: 'lld-3-3', title: 'Behavioral Patterns (Observer, Strategy, Command)', status: 'not-started', resources: ['https://refactoring.guru/design-patterns/behavioral-patterns', 'https://www.geeksforgeeks.org/behavioral-design-patterns/', 'https://sourcemaking.com/design_patterns/behavioral_patterns'] },
          { id: 'lld-3-4', title: 'MVC/MVP/MVVM Patterns', status: 'not-started', resources: ['https://www.geeksforgeeks.org/mvc-design-pattern/', 'https://martinfowler.com/eaaDev/uiArchs.html', 'https://docs.microsoft.com/en-us/xamarin/xamarin-forms/enterprise-application-patterns/mvvm'] },
          { id: 'lld-3-5', title: 'Repository Pattern', status: 'not-started', resources: ['https://martinfowler.com/eaaCatalog/repository.html', 'https://www.baeldung.com/java-dao-pattern', 'https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design'] },
          { id: 'lld-3-6', title: 'Dependency Injection Pattern', status: 'not-started', resources: ['https://martinfowler.com/articles/injection.html', 'https://www.baeldung.com/inversion-control-and-dependency-injection', 'https://spring.io/understanding/dependency-injection'] }
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
          { id: 'lld-4-1', title: 'Class Diagrams', status: 'not-started', resources: ['https://www.lucidchart.com/pages/uml-class-diagram', 'https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-class-diagram-tutorial/', 'https://creately.com/blog/diagrams/class-diagram-tutorial/'] },
          { id: 'lld-4-2', title: 'Sequence Diagrams', status: 'not-started', resources: ['https://www.geeksforgeeks.org/unified-modeling-language-uml-sequence-diagrams/', 'https://www.lucidchart.com/pages/uml-sequence-diagram', 'https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-sequence-diagram/'] },
          { id: 'lld-4-3', title: 'Use Case Diagrams', status: 'not-started', resources: ['https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-use-case-diagram/', 'https://www.lucidchart.com/pages/uml-use-case-diagram', 'https://creately.com/blog/diagrams/use-case-diagram-tutorial/'] },
          { id: 'lld-4-4', title: 'Activity Diagrams', status: 'not-started', resources: ['https://www.lucidchart.com/pages/uml-activity-diagram', 'https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-activity-diagram/', 'https://creately.com/blog/diagrams/activity-diagram-tutorial/'] },
          { id: 'lld-4-5', title: 'State Diagrams', status: 'not-started', resources: ['https://www.geeksforgeeks.org/unified-modeling-language-uml-state-diagrams/', 'https://www.lucidchart.com/pages/uml-state-machine-diagram', 'https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-state-machine-diagram/'] }
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
          { id: 'lld-5-1', title: 'Package and Module Design', status: 'not-started', resources: ['https://www.oracle.com/corporate/features/understanding-java-9-modules.html', 'https://docs.oracle.com/javase/9/docs/api/java.base/module-summary.html', 'https://www.baeldung.com/java-9-modularity'] },
          { id: 'lld-5-2', title: 'Layered Architecture', status: 'not-started', resources: ['https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/ch01.html', 'https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier', 'https://martinfowler.com/bliki/PresentationDomainDataLayering.html'] },
          { id: 'lld-5-3', title: 'Clean Architecture', status: 'not-started', resources: ['https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html', 'https://www.baeldung.com/spring-boot-clean-architecture', 'https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures'] },
          { id: 'lld-5-4', title: 'Hexagonal Architecture', status: 'not-started', resources: ['https://alistair.cockburn.us/hexagonal-architecture/', 'https://netflixtechblog.com/ready-for-changes-with-hexagonal-architecture-b315ec967749', 'https://www.baeldung.com/hexagonal-architecture-ddd-spring'] },
          { id: 'lld-5-5', title: 'Separation of Concerns', status: 'not-started', resources: ['https://effectivesoftwaredesign.com/2012/02/05/separation-of-concerns/', 'https://en.wikipedia.org/wiki/Separation_of_concerns', 'https://www.baeldung.com/cs/separation-of-concerns'] }
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
          { id: 'lld-6-1', title: 'Exception Hierarchy Design', status: 'not-started', resources: ['https://docs.oracle.com/javase/tutorial/essential/exceptions/', 'https://www.baeldung.com/java-exceptions', 'https://www.geeksforgeeks.org/exceptions-in-java/'] },
          { id: 'lld-6-2', title: 'Checked vs Unchecked Exceptions', status: 'not-started', resources: ['https://www.baeldung.com/java-checked-unchecked-exceptions', 'https://docs.oracle.com/javase/tutorial/essential/exceptions/runtime.html', 'https://www.geeksforgeeks.org/checked-vs-unchecked-exceptions-in-java/'] },
          { id: 'lld-6-3', title: 'Error Codes vs Exceptions', status: 'not-started', resources: ['https://stackoverflow.com/questions/729379/why-not-use-exceptions-as-regular-flow-of-control', 'https://blog.cleancoder.com/uncle-bob/2012/12/21/The-Error-Code-Tragedy.html', 'https://www.joelonsoftware.com/2003/10/13/13/'] },
          { id: 'lld-6-4', title: 'Fail-Fast vs Fail-Safe', status: 'not-started', resources: ['https://www.geeksforgeeks.org/fail-fast-fail-safe-iterators-java/', 'https://www.baeldung.com/java-fail-safe-vs-fail-fast-iterator', 'https://stackoverflow.com/questions/17377407/what-are-fail-safe-fail-fast-iterators-in-java'] },
          { id: 'lld-6-5', title: 'Circuit Breaker Pattern', status: 'not-started', resources: ['https://martinfowler.com/bliki/CircuitBreaker.html', 'https://docs.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker', 'https://resilience4j.readme.io/docs/circuitbreaker'] }
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
          { id: 'lld-7-1', title: 'Unit Testing Principles', status: 'not-started', resources: ['https://martinfowler.com/bliki/UnitTest.html', 'https://www.baeldung.com/java-unit-testing-best-practices', 'https://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.html'] },
          { id: 'lld-7-2', title: 'Test-Driven Development (TDD)', status: 'not-started', resources: ['https://martinfowler.com/bliki/TestDrivenDevelopment.html', 'https://www.agilealliance.org/glossary/tdd/', 'https://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html'] },
          { id: 'lld-7-3', title: 'Mocking and Dependency Injection', status: 'not-started', resources: ['https://site.mockito.org/', 'https://www.baeldung.com/mockito-series', 'https://martinfowler.com/articles/injection.html'] },
          { id: 'lld-7-4', title: 'Test Doubles (Mocks, Stubs, Fakes)', status: 'not-started', resources: ['https://martinfowler.com/articles/mocksArentStubs.html', 'https://blog.cleancoder.com/uncle-bob/2014/05/14/TheLittleMocker.html', 'https://www.baeldung.com/java-testing-with-doubles'] },
          { id: 'lld-7-5', title: 'Integration Testing Strategies', status: 'not-started', resources: ['https://martinfowler.com/bliki/IntegrationTest.html', 'https://www.baeldung.com/integration-testing-in-spring', 'https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-testing'] }
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
          { id: 'lld-8-1', title: 'Algorithmic Complexity Analysis', status: 'not-started', resources: ['https://www.bigocheatsheet.com/', 'https://www.geeksforgeeks.org/analysis-algorithms-big-o-analysis/', 'https://stackoverflow.com/questions/487258/what-is-a-plain-english-explanation-of-big-o-notation'] },
          { id: 'lld-8-2', title: 'Memory Management', status: 'not-started', resources: ['https://www.oracle.com/webfolder/technetwork/tutorials/obe/java/gc01/index.html', 'https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/', 'https://plumbr.io/java-garbage-collection-handbook'] },
          { id: 'lld-8-3', title: 'Lazy Loading vs Eager Loading', status: 'not-started', resources: ['https://www.baeldung.com/hibernate-lazy-eager-loading', 'https://vladmihalcea.com/eager-lazy-loading-jpa-hibernate/', 'https://thoughts-on-java.org/entity-mappings-introduction-jpa-fetchtypes/'] },
          { id: 'lld-8-4', title: 'Object Pooling', status: 'not-started', resources: ['https://www.geeksforgeeks.org/object-pool-design-pattern/', 'https://sourcemaking.com/design_patterns/object_pool', 'https://www.baeldung.com/java-connection-pooling'] },
          { id: 'lld-8-5', title: 'Profiling and Performance Tuning', status: 'not-started', resources: ['https://docs.oracle.com/javase/8/docs/technotes/guides/troubleshoot/', 'https://www.baeldung.com/java-profilers', 'https://blog.jetbrains.com/idea/2020/03/profiling-tools-and-intellij-idea-ultimate/'] }
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
          { id: 'case-1-1', title: 'User Timeline Generation', status: 'not-started', resources: ['https://www.educative.io/courses/grokking-the-system-design-interview/m2G48X18NDO', 'https://github.com/donnemartin/system-design-primer#design-the-twitter-timeline-and-search', 'https://blog.twitter.com/engineering/en_us/topics/architecture/2017/the-infrastructure-behind-twitter-scale.html'] },
          { id: 'case-1-2', title: 'Content Delivery & CDN', status: 'not-started', resources: ['https://github.com/donnemartin/system-design-primer#content-delivery-network', 'https://netflixtechblog.com/serving-100-gbps-from-an-open-connect-appliance-cdb51dda3b99', 'https://blog.twitter.com/engineering/en_us/topics/infrastructure/2017/how-we-built-twitter-lite.html'] },
          { id: 'case-1-3', title: 'Real-time Notifications', status: 'not-started', resources: ['https://www.educative.io/courses/grokking-the-system-design-interview/B815A0y2Wp4', 'https://instagram-engineering.com/building-real-time-infrastructure-at-instagram-492dcacd9090', 'https://blog.twitter.com/engineering/en_us/topics/infrastructure/2017/the-infrastructure-behind-twitter-scale.html'] },
          { id: 'case-1-4', title: 'Search and Discovery', status: 'not-started', resources: ['https://www.elastic.co/guide/en/elasticsearch/guide/current/index.html', 'https://blog.twitter.com/engineering/en_us/topics/infrastructure/2016/elasticsearch-at-twitter.html', 'https://instagram-engineering.com/search-architecture-eeb34a936d3a'] },
          { id: 'case-1-5', title: 'Analytics & Metrics Collection', status: 'not-started', resources: ['https://kafka.apache.org/uses#website_activity_tracking', 'https://blog.twitter.com/engineering/en_us/topics/insights/2016/building-a-real-time-analytics-pipeline-at-twitter.html', 'https://instagram-engineering.com/types-for-python-http-apis-an-instagram-story-d3c3a207fdb7'] }
        ]
      }, {
        id: 'case-2',
        title: 'Chat Application Design',
        description: 'Design a real-time chat system like WhatsApp or Slack.',
        status: 'not-started',
        estimatedHours: 5,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'case-2-1', title: 'Real-time Messaging (WebSockets)', status: 'not-started', resources: ['https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API', 'https://socket.io/docs/', 'https://blog.discord.com/how-discord-stores-billions-of-messages-7fa6ec7ee4c7'] },
          { id: 'case-2-2', title: 'Message Storage & Retrieval', status: 'not-started', resources: ['https://cassandra.apache.org/doc/latest/', 'https://blog.discord.com/how-discord-stores-billions-of-messages-7fa6ec7ee4c7', 'https://engineering.fb.com/2016/02/09/core-data/building-mobile-first-infrastructure-for-messenger/'] },
          { id: 'case-2-3', title: 'Online Presence & Status', status: 'not-started', resources: ['https://redis.io/topics/pubsub', 'https://blog.discord.com/how-discord-resizes-150-million-images-every-day-with-go-and-c-c9e98731c65d', 'https://slack.engineering/flannel-an-application-level-edge-cache-to-make-slack-scale/'] },
          { id: 'case-2-4', title: 'Push Notifications', status: 'not-started', resources: ['https://firebase.google.com/docs/cloud-messaging', 'https://developer.apple.com/documentation/usernotifications', 'https://blog.discord.com/how-discord-maintains-performance-while-adding-features-28ddaf044333'] },
          { id: 'case-2-5', title: 'End-to-End Encryption', status: 'not-started', resources: ['https://signal.org/docs/', 'https://engineering.fb.com/2016/07/08/security/messenger-end-to-end-encryption/', 'https://www.whatsapp.com/security/WhatsApp-Security-Whitepaper.pdf'] },
          { id: 'case-2-6', title: 'Group Chat & Channels', status: 'not-started', resources: ['https://discord.com/developers/docs', 'https://slack.engineering/real-time-messaging/', 'https://engineering.fb.com/2016/02/09/core-data/building-mobile-first-infrastructure-for-messenger/'] },
          { id: 'case-2-7', title: 'File Sharing & Media Handling', status: 'not-started', resources: ['https://aws.amazon.com/s3/', 'https://blog.discord.com/how-discord-resizes-150-million-images-every-day-with-go-and-c-c9e98731c65d', 'https://slack.engineering/flannel-an-application-level-edge-cache-to-make-slack-scale/'] }
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
  },
  'api-design': {
    name: 'API Design & Communication',
    topics: [
      {
        id: 'api-1',
        title: 'API Design Patterns',
        description: 'Understanding different API design approaches and best practices.',
        status: 'not-started',
        estimatedHours: 4,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'api-1-1', title: 'REST API Design', status: 'not-started', resources: ['https://restfulapi.net/', 'https://www.restapitutorial.com/', 'https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design'] },
          { id: 'api-1-2', title: 'GraphQL Design', status: 'not-started', resources: ['https://graphql.org/learn/', 'https://www.apollographql.com/docs/', 'https://relay.dev/docs/'] },
          { id: 'api-1-3', title: 'gRPC and Protocol Buffers', status: 'not-started', resources: ['https://grpc.io/docs/', 'https://developers.google.com/protocol-buffers', 'https://grpc.io/docs/languages/go/basics/'] },
          { id: 'api-1-4', title: 'API Versioning Strategies', status: 'not-started', resources: ['https://www.troyhunt.com/your-api-versioning-is-wrong-which-is/', 'https://stripe.com/blog/api-versioning', 'https://nordicapis.com/api-versioning-methods-a-brief-reference/'] },
          { id: 'api-1-5', title: 'API Documentation & Swagger', status: 'not-started', resources: ['https://swagger.io/docs/', 'https://redocly.com/docs/', 'https://apiblueprint.org/'] }
        ]
      },
      {
        id: 'api-2',
        title: 'API Gateway & Management',
        description: 'Centralized API management and gateway patterns.',
        status: 'not-started',
        estimatedHours: 3,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'api-2-1', title: 'API Gateway Pattern', status: 'not-started', resources: ['https://microservices.io/patterns/apigateway.html', 'https://aws.amazon.com/api-gateway/', 'https://konghq.com/learning-center/api-gateway/'] },
          { id: 'api-2-2', title: 'Request Routing & Load Balancing', status: 'not-started', resources: ['https://nginx.org/en/docs/http/load_balancing.html', 'https://www.envoyproxy.io/docs/envoy/latest/', 'https://istio.io/latest/docs/concepts/traffic-management/'] },
          { id: 'api-2-3', title: 'API Transformation & Aggregation', status: 'not-started', resources: ['https://docs.aws.amazon.com/apigateway/latest/developerguide/rest-api-data-transformations.html', 'https://www.nginx.com/blog/deploying-nginx-plus-as-an-api-gateway-part-2-protecting-backend-services/', 'https://blog.apigee.com/detail/api_design_aggregation_and_composition'] },
          { id: 'api-2-4', title: 'Service Discovery', status: 'not-started', resources: ['https://www.consul.io/docs/discovery', 'https://kubernetes.io/docs/concepts/services-networking/service/', 'https://netflix.github.io/eureka/'] }
        ]
      },
      {
        id: 'api-3',
        title: 'Asynchronous Communication',
        description: 'Event-driven and asynchronous communication patterns.',
        status: 'not-started',
        estimatedHours: 5,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'api-3-1', title: 'Event-Driven Architecture', status: 'not-started', resources: ['https://martinfowler.com/articles/201701-event-driven.html', 'https://aws.amazon.com/event-driven-architecture/', 'https://www.confluent.io/learn/event-driven-architecture/'] },
          { id: 'api-3-2', title: 'Publisher-Subscriber Pattern', status: 'not-started', resources: ['https://aws.amazon.com/pub-sub-messaging/', 'https://cloud.google.com/pubsub/docs/overview', 'https://redis.io/topics/pubsub'] },
          { id: 'api-3-3', title: 'Webhooks & Event Streaming', status: 'not-started', resources: ['https://zapier.com/engineering/webhook-design/', 'https://stripe.com/docs/webhooks', 'https://docs.github.com/en/developers/webhooks-and-events/webhooks'] },
          { id: 'api-3-4', title: 'Long Polling & Server-Sent Events', status: 'not-started', resources: ['https://javascript.info/long-polling', 'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events', 'https://www.html5rocks.com/en/tutorials/eventsource/basics/'] },
          { id: 'api-3-5', title: 'WebSockets & Real-time Communication', status: 'not-started', resources: ['https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API', 'https://socket.io/docs/', 'https://www.websocket.org/'] }
        ]
      }
    ]
  },
  'infrastructure': {
    name: 'Infrastructure & DevOps',
    topics: [
      {
        id: 'infra-1',
        title: 'Deployment Strategies',
        description: 'Different approaches to deploying applications safely.',
        status: 'not-started',
        estimatedHours: 4,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'infra-1-1', title: 'Blue-Green Deployments', status: 'not-started', resources: ['https://martinfowler.com/bliki/BlueGreenDeployment.html', 'https://docs.aws.amazon.com/whitepapers/latest/blue-green-deployments/welcome.html', 'https://www.redhat.com/en/topics/devops/what-is-blue-green-deployment'] },
          { id: 'infra-1-2', title: 'Canary Releases', status: 'not-started', resources: ['https://martinfowler.com/bliki/CanaryRelease.html', 'https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#canary-deployment', 'https://www.split.io/blog/what-is-a-canary-deployment/'] },
          { id: 'infra-1-3', title: 'Rolling Updates', status: 'not-started', resources: ['https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-update-deployment', 'https://docs.docker.com/engine/swarm/rolling-updates/', 'https://blog.container-solutions.com/kubernetes-deployment-strategies'] },
          { id: 'infra-1-4', title: 'Feature Flags & A/B Testing', status: 'not-started', resources: ['https://launchdarkly.com/blog/what-are-feature-flags/', 'https://www.optimizely.com/optimization-glossary/ab-testing/', 'https://martinfowler.com/articles/feature-toggles.html'] },
          { id: 'infra-1-5', title: 'Zero-Downtime Deployments', status: 'not-started', resources: ['https://www.digitalocean.com/community/tutorials/how-to-set-up-zero-downtime-rails-deployments-with-puma-and-foreman', 'https://blog.codeship.com/zero-downtime-deployment/', 'https://www.nginx.com/blog/nginx-plus-zero-downtime-load-balancing-deployments/'] }
        ]
      },
      {
        id: 'infra-2',
        title: 'Container Orchestration',
        description: 'Managing containerized applications at scale.',
        status: 'not-started',
        estimatedHours: 5,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'infra-2-1', title: 'Docker & Containerization', status: 'not-started', resources: ['https://docs.docker.com/get-started/', 'https://www.docker.com/resources/what-container/', 'https://docs.docker.com/develop/dev-best-practices/'] },
          { id: 'infra-2-2', title: 'Kubernetes Architecture', status: 'not-started', resources: ['https://kubernetes.io/docs/concepts/overview/components/', 'https://kubernetes.io/docs/concepts/architecture/', 'https://www.redhat.com/en/topics/containers/kubernetes-architecture'] },
          { id: 'infra-2-3', title: 'Service Mesh (Istio, Linkerd)', status: 'not-started', resources: ['https://istio.io/latest/docs/concepts/what-is-istio/', 'https://linkerd.io/2.11/overview/', 'https://www.redhat.com/en/topics/microservices/what-is-a-service-mesh'] },
          { id: 'infra-2-4', title: 'Container Networking', status: 'not-started', resources: ['https://kubernetes.io/docs/concepts/services-networking/', 'https://docs.docker.com/network/', 'https://www.weave.works/docs/net/latest/overview/'] },
          { id: 'infra-2-5', title: 'Persistent Storage in Containers', status: 'not-started', resources: ['https://kubernetes.io/docs/concepts/storage/', 'https://docs.docker.com/storage/', 'https://portworx.com/kubernetes-storage-101/'] }
        ]
      },
      {
        id: 'infra-3',
        title: 'Cloud Architecture Patterns',
        description: 'Designing applications for cloud environments.',
        status: 'not-started',
        estimatedHours: 6,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'infra-3-1', title: 'Multi-Region & Multi-AZ Design', status: 'not-started', resources: ['https://aws.amazon.com/blogs/architecture/disaster-recovery-dr-architecture-on-aws/', 'https://cloud.google.com/architecture/dr-scenarios-planning-guide', 'https://docs.microsoft.com/en-us/azure/architecture/reliability/'] },
          { id: 'infra-3-2', title: 'Auto-Scaling Strategies', status: 'not-started', resources: ['https://aws.amazon.com/autoscaling/', 'https://cloud.google.com/compute/docs/autoscaler', 'https://docs.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling'] },
          { id: 'infra-3-3', title: 'Serverless Architecture', status: 'not-started', resources: ['https://aws.amazon.com/lambda/', 'https://martinfowler.com/articles/serverless.html', 'https://cloud.google.com/functions/docs'] },
          { id: 'infra-3-4', title: 'Cloud Storage Patterns', status: 'not-started', resources: ['https://aws.amazon.com/s3/', 'https://cloud.google.com/storage/docs/storage-classes', 'https://docs.microsoft.com/en-us/azure/storage/'] },
          { id: 'infra-3-5', title: 'Infrastructure as Code', status: 'not-started', resources: ['https://www.terraform.io/docs/', 'https://docs.aws.amazon.com/cloudformation/', 'https://www.pulumi.com/docs/'] }
        ]
      }
    ]
  },
  'architecture-patterns': {
    name: 'Architecture Patterns & Design',
    topics: [
      {
        id: 'arch-1',
        title: 'Architectural Styles',
        description: 'Different architectural approaches and their trade-offs.',
        status: 'not-started',
        estimatedHours: 5,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'arch-1-1', title: 'Monolithic Architecture', status: 'not-started', resources: ['https://microservices.io/patterns/monolithic.html', 'https://martinfowler.com/bliki/MonolithFirst.html', 'https://www.atlassian.com/microservices/microservices-architecture/microservices-vs-monolith'] },
          { id: 'arch-1-2', title: 'Layered Architecture', status: 'not-started', resources: ['https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/ch01.html', 'https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier', 'https://martinfowler.com/bliki/PresentationDomainDataLayering.html'] },
          { id: 'arch-1-3', title: 'Hexagonal Architecture', status: 'not-started', resources: ['https://alistair.cockburn.us/hexagonal-architecture/', 'https://netflixtechblog.com/ready-for-changes-with-hexagonal-architecture-b315ec967749', 'https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html'] },
          { id: 'arch-1-4', title: 'Event-Driven Architecture', status: 'not-started', resources: ['https://martinfowler.com/articles/201701-event-driven.html', 'https://aws.amazon.com/event-driven-architecture/', 'https://www.confluent.io/learn/event-driven-architecture/'] },
          { id: 'arch-1-5', title: 'Domain-Driven Design (DDD)', status: 'not-started', resources: ['https://martinfowler.com/tags/domain%20driven%20design.html', 'https://www.domainlanguage.com/ddd/', 'https://vaadin.com/learn/tutorials/ddd'] }
        ]
      },
      {
        id: 'arch-2',
        title: 'Data Architecture Patterns',
        description: 'Patterns for managing data in distributed systems.',
        status: 'not-started',
        estimatedHours: 6,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'arch-2-1', title: 'CQRS (Command Query Responsibility Segregation)', status: 'not-started', resources: ['https://martinfowler.com/bliki/CQRS.html', 'https://docs.microsoft.com/en-us/azure/architecture/patterns/cqrs', 'https://www.eventstore.com/cqrs-pattern'] },
          { id: 'arch-2-2', title: 'Event Sourcing', status: 'not-started', resources: ['https://martinfowler.com/eaaDev/EventSourcing.html', 'https://www.eventstore.com/event-sourcing', 'https://microservices.io/patterns/data/event-sourcing.html'] },
          { id: 'arch-2-3', title: 'Saga Pattern', status: 'not-started', resources: ['https://microservices.io/patterns/data/saga.html', 'https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/saga/saga', 'https://blog.couchbase.com/saga-pattern-implement-business-transactions-using-microservices-part/'] },
          { id: 'arch-2-4', title: 'Outbox Pattern', status: 'not-started', resources: ['https://microservices.io/patterns/data/transactional-outbox.html', 'https://debezium.io/blog/2019/02/19/reliable-microservices-data-exchange-with-the-outbox-pattern/', 'https://www.kamilgrzybek.com/design/the-outbox-pattern/'] },
          { id: 'arch-2-5', title: 'Data Lake vs Data Warehouse', status: 'not-started', resources: ['https://aws.amazon.com/big-data/datalakes-and-analytics/what-is-a-data-lake/', 'https://www.snowflake.com/data-cloud/workloads/data-warehouse/', 'https://databricks.com/glossary/data-lakehouse'] }
        ]
      },
      {
        id: 'arch-3',
        title: 'Resilience Patterns',
        description: 'Building fault-tolerant and resilient systems.',
        status: 'not-started',
        estimatedHours: 4,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'arch-3-1', title: 'Circuit Breaker Pattern', status: 'not-started', resources: ['https://martinfowler.com/bliki/CircuitBreaker.html', 'https://docs.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker', 'https://resilience4j.readme.io/docs/circuitbreaker'] },
          { id: 'arch-3-2', title: 'Retry & Backoff Strategies', status: 'not-started', resources: ['https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/', 'https://docs.microsoft.com/en-us/azure/architecture/patterns/retry', 'https://cloud.google.com/iot/docs/how-tos/exponential-backoff'] },
          { id: 'arch-3-3', title: 'Bulkhead Pattern', status: 'not-started', resources: ['https://docs.microsoft.com/en-us/azure/architecture/patterns/bulkhead', 'https://martinfowler.com/bliki/Bulkhead.html', 'https://www.baeldung.com/hystrix-circuit-breaker'] },
          { id: 'arch-3-4', title: 'Timeout & Deadline Patterns', status: 'not-started', resources: ['https://grpc.io/blog/deadlines/', 'https://landing.google.com/sre/sre-book/chapters/handling-overload/', 'https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/'] },
          { id: 'arch-3-5', title: 'Graceful Degradation', status: 'not-started', resources: ['https://docs.microsoft.com/en-us/azure/architecture/patterns/throttling', 'https://netflixtechblog.com/fault-tolerance-in-a-high-volume-distributed-system-91ab4faae74a', 'https://aws.amazon.com/builders-library/avoiding-fallback-in-distributed-systems/'] }
        ]
      }
    ]
  },
  'advanced-topics': {
    name: 'Advanced System Design Topics',
    topics: [
      {
        id: 'adv-1',
        title: 'Distributed Systems Fundamentals',
        description: 'Core concepts for building distributed systems.',
        status: 'not-started',
        estimatedHours: 6,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'adv-1-1', title: 'Consensus Algorithms (Raft, Paxos)', status: 'not-started', resources: ['https://raft.github.io/', 'https://lamport.azurewebsites.net/pubs/paxos-simple.pdf', 'https://www.youtube.com/watch?v=UzLMhqg3_Wc'] },
          { id: 'adv-1-2', title: 'Vector Clocks & Logical Time', status: 'not-started', resources: ['https://en.wikipedia.org/wiki/Vector_clock', 'https://www.cs.princeton.edu/courses/archive/fall16/cos418/docs/L4-time.pdf', 'https://martinfowler.com/articles/patterns-of-distributed-systems/vector-clock.html'] },
          { id: 'adv-1-3', title: 'Distributed Locking', status: 'not-started', resources: ['https://redis.io/topics/distlock', 'https://martin.kleppmann.com/2016/02/08/how-to-do-distributed-locking.html', 'https://zookeeper.apache.org/doc/r3.1.2/recipes.html#sc_recipes_Locks'] },
          { id: 'adv-1-4', title: 'Byzantine Fault Tolerance', status: 'not-started', resources: ['https://en.wikipedia.org/wiki/Byzantine_fault', 'https://pmg.csail.mit.edu/papers/osdi99.pdf', 'https://blog.ethereum.org/2014/11/25/proof-stake-learned-love-weak-subjectivity/'] },
          { id: 'adv-1-5', title: 'Gossip Protocols', status: 'not-started', resources: ['https://en.wikipedia.org/wiki/Gossip_protocol', 'https://www.cs.cornell.edu/home/rvr/papers/flowgossip.pdf', 'https://cassandra.apache.org/doc/latest/architecture/gossip.html'] }
        ]
      },
      {
        id: 'adv-2',
        title: 'Performance Optimization',
        description: 'Advanced techniques for optimizing system performance.',
        status: 'not-started',
        estimatedHours: 5,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'adv-2-1', title: 'Profiling & Performance Monitoring', status: 'not-started', resources: ['https://github.com/google/pprof', 'https://jvns.ca/blog/2017/12/17/how-do-ruby-and-python-profilers-work/', 'https://netflixtechblog.com/java-in-flames-e763b3d32166'] },
          { id: 'adv-2-2', title: 'Memory Management & GC Tuning', status: 'not-started', resources: ['https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/', 'https://golang.org/doc/gc-guide', 'https://v8.dev/blog/concurrent-marking'] },
          { id: 'adv-2-3', title: 'CPU & I/O Optimization', status: 'not-started', resources: ['https://www.brendangregg.com/systems-performance-2nd-edition-book.html', 'https://netflixtechblog.com/linux-performance-analysis-in-60-000-milliseconds-accc10403c55', 'https://docs.kernel.org/admin-guide/perf/index.html'] },
          { id: 'adv-2-4', title: 'Network Optimization', status: 'not-started', resources: ['https://hpbn.co/', 'https://blog.cloudflare.com/http-3-the-past-present-and-future/', 'https://www.nginx.com/blog/nginx-caching-guide/'] },
          { id: 'adv-2-5', title: 'Database Performance Tuning', status: 'not-started', resources: ['https://use-the-index-luke.com/', 'https://www.postgresql.org/docs/current/performance-tips.html', 'https://dev.mysql.com/doc/refman/8.0/en/optimization.html'] }
        ]
      },
      {
        id: 'adv-3',
        title: 'Machine Learning Systems',
        description: 'Designing systems for ML workloads and inference.',
        status: 'not-started',
        estimatedHours: 6,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'adv-3-1', title: 'ML Model Serving & Inference', status: 'not-started', resources: ['https://www.tensorflow.org/tfx/guide/serving', 'https://pytorch.org/serve/', 'https://docs.seldon.io/projects/seldon-core/en/latest/'] },
          { id: 'adv-3-2', title: 'Feature Stores', status: 'not-started', resources: ['https://feast.dev/', 'https://www.tecton.ai/blog/what-is-a-feature-store/', 'https://aws.amazon.com/sagemaker/feature-store/'] },
          { id: 'adv-3-3', title: 'Model Versioning & A/B Testing', status: 'not-started', resources: ['https://mlflow.org/', 'https://dvc.org/', 'https://neptune.ai/blog/ml-model-testing-teams-share-how-they-test-models'] },
          { id: 'adv-3-4', title: 'Real-time ML Pipelines', status: 'not-started', resources: ['https://kafka.apache.org/documentation/streams/', 'https://flink.apache.org/ml/', 'https://beam.apache.org/documentation/ml/overview/'] },
          { id: 'adv-3-5', title: 'ML Infrastructure & MLOps', status: 'not-started', resources: ['https://ml-ops.org/', 'https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning', 'https://aws.amazon.com/sagemaker/mlops/'] }
        ]
      }
    ]
  }
};
