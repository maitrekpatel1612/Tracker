// Database Management System (DBMS) Roadmap Data
export const dbmsRoadmapData = {
  'database-fundamentals': {
    name: 'Database Fundamentals',
    topics: [
      {
        id: 'dbf-1',
        title: 'Introduction to Databases',
        description: 'Learn the basic concepts and importance of database systems.',
        status: 'not-started',
        estimatedHours: 4,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'dbf-1-1', title: 'What is a Database', status: 'not-started', resources: [] },
          { id: 'dbf-1-2', title: 'Database vs File System', status: 'not-started', resources: [] },
          { id: 'dbf-1-3', title: 'Database Applications', status: 'not-started', resources: [] },
          { id: 'dbf-1-4', title: 'Database System Architecture', status: 'not-started', resources: [] },
          { id: 'dbf-1-5', title: 'Three-Schema Architecture', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'dbf-2',
        title: 'Data Models',
        description: 'Understand different data models used in database systems.',
        status: 'not-started',
        estimatedHours: 6,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'dbf-2-1', title: 'Hierarchical Data Model', status: 'not-started', resources: [] },
          { id: 'dbf-2-2', title: 'Network Data Model', status: 'not-started', resources: [] },
          { id: 'dbf-2-3', title: 'Relational Data Model', status: 'not-started', resources: [] },
          { id: 'dbf-2-4', title: 'Object-Oriented Data Model', status: 'not-started', resources: [] },
          { id: 'dbf-2-5', title: 'Entity-Relationship (ER) Model', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'dbf-3',
        title: 'Database Languages',
        description: 'Learn about DDL, DML, DCL, and TCL in database systems.',
        status: 'not-started',
        estimatedHours: 5,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'dbf-3-1', title: 'Data Definition Language (DDL)', status: 'not-started', resources: [] },
          { id: 'dbf-3-2', title: 'Data Manipulation Language (DML)', status: 'not-started', resources: [] },
          { id: 'dbf-3-3', title: 'Data Control Language (DCL)', status: 'not-started', resources: [] },
          { id: 'dbf-3-4', title: 'Transaction Control Language (TCL)', status: 'not-started', resources: [] },
          { id: 'dbf-3-5', title: 'Query Languages', status: 'not-started', resources: [] }
        ]
      }
    ]
  },
  'relational-model': {
    name: 'Relational Model',
    topics: [
      {
        id: 'rm-1',
        title: 'Relational Algebra',
        description: 'Learn the theoretical foundation of relational databases.',
        status: 'not-started',
        estimatedHours: 7,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'rm-1-1', title: 'Basic Operations (Select, Project, Union)', status: 'not-started', resources: [] },
          { id: 'rm-1-2', title: 'Set Operations (Intersection, Difference)', status: 'not-started', resources: [] },
          { id: 'rm-1-3', title: 'Join Operations', status: 'not-started', resources: [] },
          { id: 'rm-1-4', title: 'Division Operation', status: 'not-started', resources: [] },
          { id: 'rm-1-5', title: 'Extended Operations', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'rm-2',
        title: 'SQL Fundamentals',
        description: 'Master SQL for database querying and manipulation.',
        status: 'not-started',
        estimatedHours: 10,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'rm-2-1', title: 'Basic SQL Queries (SELECT, FROM, WHERE)', status: 'not-started', resources: [] },
          { id: 'rm-2-2', title: 'Sorting and Grouping (ORDER BY, GROUP BY)', status: 'not-started', resources: [] },
          { id: 'rm-2-3', title: 'SQL Joins (INNER, OUTER, CROSS)', status: 'not-started', resources: [] },
          { id: 'rm-2-4', title: 'Subqueries and Nested Queries', status: 'not-started', resources: [] },
          { id: 'rm-2-5', title: 'Aggregate Functions and Window Functions', status: 'not-started', resources: [] },
          { id: 'rm-2-6', title: 'Data Modification (INSERT, UPDATE, DELETE)', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'rm-3',
        title: 'Advanced SQL',
        description: 'Learn advanced SQL concepts and techniques.',
        status: 'not-started',
        estimatedHours: 8,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'rm-3-1', title: 'Views and Materialized Views', status: 'not-started', resources: [] },
          { id: 'rm-3-2', title: 'Stored Procedures and Functions', status: 'not-started', resources: [] },
          { id: 'rm-3-3', title: 'Triggers and Events', status: 'not-started', resources: [] },
          { id: 'rm-3-4', title: 'Cursors and Dynamic SQL', status: 'not-started', resources: [] },
          { id: 'rm-3-5', title: 'Common Table Expressions (CTE)', status: 'not-started', resources: [] }
        ]
      }
    ]
  },
  'database-design': {
    name: 'Database Design',
    topics: [
      {
        id: 'dd-1',
        title: 'ER Modeling',
        description: 'Learn to design databases using Entity-Relationship diagrams.',
        status: 'not-started',
        estimatedHours: 6,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'dd-1-1', title: 'Entities, Attributes, and Relationships', status: 'not-started', resources: [] },
          { id: 'dd-1-2', title: 'ER Diagram Notation', status: 'not-started', resources: [] },
          { id: 'dd-1-3', title: 'Cardinality and Participation Constraints', status: 'not-started', resources: [] },
          { id: 'dd-1-4', title: 'Weak Entities and Identifying Relationships', status: 'not-started', resources: [] },
          { id: 'dd-1-5', title: 'ER to Relational Mapping', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'dd-2',
        title: 'Normalization',
        description: 'Understand database normalization and normal forms.',
        status: 'not-started',
        estimatedHours: 8,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'dd-2-1', title: 'Functional Dependencies', status: 'not-started', resources: [] },
          { id: 'dd-2-2', title: 'First Normal Form (1NF)', status: 'not-started', resources: [] },
          { id: 'dd-2-3', title: 'Second Normal Form (2NF)', status: 'not-started', resources: [] },
          { id: 'dd-2-4', title: 'Third Normal Form (3NF)', status: 'not-started', resources: [] },
          { id: 'dd-2-5', title: 'Boyce-Codd Normal Form (BCNF)', status: 'not-started', resources: [] },
          { id: 'dd-2-6', title: 'Higher Normal Forms (4NF, 5NF)', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'dd-3',
        title: 'Schema Design',
        description: 'Learn best practices for database schema design.',
        status: 'not-started',
        estimatedHours: 5,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'dd-3-1', title: 'Logical vs Physical Design', status: 'not-started', resources: [] },
          { id: 'dd-3-2', title: 'Denormalization Strategies', status: 'not-started', resources: [] },
          { id: 'dd-3-3', title: 'Indexing Strategies', status: 'not-started', resources: [] },
          { id: 'dd-3-4', title: 'Partitioning and Sharding', status: 'not-started', resources: [] }
        ]
      }
    ]
  },
  'transactions': {
    name: 'Transactions & Concurrency',
    topics: [
      {
        id: 'tc-1',
        title: 'Transaction Management',
        description: 'Learn about database transactions and ACID properties.',
        status: 'not-started',
        estimatedHours: 6,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'tc-1-1', title: 'ACID Properties', status: 'not-started', resources: [] },
          { id: 'tc-1-2', title: 'Transaction States and Operations', status: 'not-started', resources: [] },
          { id: 'tc-1-3', title: 'Commit and Rollback', status: 'not-started', resources: [] },
          { id: 'tc-1-4', title: 'Savepoints and Nested Transactions', status: 'not-started', resources: [] },
          { id: 'tc-1-5', title: 'Transaction Logs', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'tc-2',
        title: 'Concurrency Control',
        description: 'Understand how databases handle concurrent access.',
        status: 'not-started',
        estimatedHours: 8,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'tc-2-1', title: 'Concurrency Problems (Lost Update, Dirty Read)', status: 'not-started', resources: [] },
          { id: 'tc-2-2', title: 'Locking Mechanisms', status: 'not-started', resources: [] },
          { id: 'tc-2-3', title: 'Two-Phase Locking (2PL)', status: 'not-started', resources: [] },
          { id: 'tc-2-4', title: 'Deadlock Detection and Prevention', status: 'not-started', resources: [] },
          { id: 'tc-2-5', title: 'Isolation Levels', status: 'not-started', resources: [] },
          { id: 'tc-2-6', title: 'Optimistic vs Pessimistic Concurrency', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'tc-3',
        title: 'Recovery Systems',
        description: 'Learn about database recovery and backup strategies.',
        status: 'not-started',
        estimatedHours: 6,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'tc-3-1', title: 'Failure Classification', status: 'not-started', resources: [] },
          { id: 'tc-3-2', title: 'Log-based Recovery', status: 'not-started', resources: [] },
          { id: 'tc-3-3', title: 'Checkpoint and Recovery', status: 'not-started', resources: [] },
          { id: 'tc-3-4', title: 'ARIES Recovery Algorithm', status: 'not-started', resources: [] },
          { id: 'tc-3-5', title: 'Backup and Restore Strategies', status: 'not-started', resources: [] }
        ]
      }
    ]
  },
  'indexing-optimization': {
    name: 'Indexing & Optimization',
    topics: [
      {
        id: 'io-1',
        title: 'Indexing Techniques',
        description: 'Learn about different indexing methods and structures.',
        status: 'not-started',
        estimatedHours: 7,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'io-1-1', title: 'Primary and Secondary Indexes', status: 'not-started', resources: [] },
          { id: 'io-1-2', title: 'B-Tree and B+ Tree Indexes', status: 'not-started', resources: [] },
          { id: 'io-1-3', title: 'Hash Indexing', status: 'not-started', resources: [] },
          { id: 'io-1-4', title: 'Bitmap Indexes', status: 'not-started', resources: [] },
          { id: 'io-1-5', title: 'Clustered vs Non-clustered Indexes', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'io-2',
        title: 'Query Optimization',
        description: 'Understand query processing and optimization techniques.',
        status: 'not-started',
        estimatedHours: 8,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'io-2-1', title: 'Query Processing Steps', status: 'not-started', resources: [] },
          { id: 'io-2-2', title: 'Query Execution Plans', status: 'not-started', resources: [] },
          { id: 'io-2-3', title: 'Cost-based Optimization', status: 'not-started', resources: [] },
          { id: 'io-2-4', title: 'Join Algorithms', status: 'not-started', resources: [] },
          { id: 'io-2-5', title: 'Statistics and Histograms', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'io-3',
        title: 'Performance Tuning',
        description: 'Learn database performance monitoring and tuning.',
        status: 'not-started',
        estimatedHours: 6,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'io-3-1', title: 'Performance Metrics and Monitoring', status: 'not-started', resources: [] },
          { id: 'io-3-2', title: 'Query Performance Analysis', status: 'not-started', resources: [] },
          { id: 'io-3-3', title: 'Index Optimization', status: 'not-started', resources: [] },
          { id: 'io-3-4', title: 'Database Configuration Tuning', status: 'not-started', resources: [] }
        ]
      }
    ]
  },
  'nosql-modern': {
    name: 'NoSQL & Modern Databases',
    topics: [
      {
        id: 'nm-1',
        title: 'NoSQL Database Types',
        description: 'Learn about different types of NoSQL databases.',
        status: 'not-started',
        estimatedHours: 6,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'nm-1-1', title: 'Document Databases (MongoDB)', status: 'not-started', resources: [] },
          { id: 'nm-1-2', title: 'Key-Value Stores (Redis, DynamoDB)', status: 'not-started', resources: [] },
          { id: 'nm-1-3', title: 'Column-Family (Cassandra, HBase)', status: 'not-started', resources: [] },
          { id: 'nm-1-4', title: 'Graph Databases (Neo4j)', status: 'not-started', resources: [] },
          { id: 'nm-1-5', title: 'Multi-model Databases', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'nm-2',
        title: 'Distributed Databases',
        description: 'Understand distributed database concepts and CAP theorem.',
        status: 'not-started',
        estimatedHours: 7,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'nm-2-1', title: 'CAP Theorem', status: 'not-started', resources: [] },
          { id: 'nm-2-2', title: 'Consistency Models', status: 'not-started', resources: [] },
          { id: 'nm-2-3', title: 'Partitioning and Replication', status: 'not-started', resources: [] },
          { id: 'nm-2-4', title: 'Consensus Algorithms (Raft, Paxos)', status: 'not-started', resources: [] },
          { id: 'nm-2-5', title: 'Eventual Consistency', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'nm-3',
        title: 'Big Data & Analytics',
        description: 'Learn about databases for big data and analytics.',
        status: 'not-started',
        estimatedHours: 5,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'nm-3-1', title: 'Data Warehousing Concepts', status: 'not-started', resources: [] },
          { id: 'nm-3-2', title: 'OLTP vs OLAP', status: 'not-started', resources: [] },
          { id: 'nm-3-3', title: 'ETL Processes', status: 'not-started', resources: [] },
          { id: 'nm-3-4', title: 'Columnar Databases', status: 'not-started', resources: [] }
        ]
      }
    ]
  }
};
