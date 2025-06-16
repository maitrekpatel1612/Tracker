// Operating System Roadmap Data
export const operatingSystemRoadmapData = {
  'os-fundamentals': {
    name: 'OS Fundamentals',
    topics: [
      {
        id: 'osf-1',
        title: 'Introduction to Operating Systems',
        description: 'Learn the basic concepts and functions of operating systems.',
        status: 'not-started',
        estimatedHours: 4,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'osf-1-1', title: 'What is an Operating System', status: 'not-started', resources: [] },
          { id: 'osf-1-2', title: 'Types of Operating Systems', status: 'not-started', resources: [] },
          { id: 'osf-1-3', title: 'OS Components and Architecture', status: 'not-started', resources: [] },
          { id: 'osf-1-4', title: 'System Calls and APIs', status: 'not-started', resources: [] },
          { id: 'osf-1-5', title: 'Kernel vs User Mode', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'osf-2',
        title: 'Computer System Structure',
        description: 'Understand computer hardware and its interaction with OS.',
        status: 'not-started',
        estimatedHours: 5,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'osf-2-1', title: 'CPU and Instruction Execution', status: 'not-started', resources: [] },
          { id: 'osf-2-2', title: 'Memory Hierarchy', status: 'not-started', resources: [] },
          { id: 'osf-2-3', title: 'I/O Devices and Controllers', status: 'not-started', resources: [] },
          { id: 'osf-2-4', title: 'Interrupts and Exceptions', status: 'not-started', resources: [] },
          { id: 'osf-2-5', title: 'Bus Architecture', status: 'not-started', resources: [] }
        ]
      }
    ]
  },
  'process-management': {
    name: 'Process Management',
    topics: [
      {
        id: 'pm-1',
        title: 'Processes and Threads',
        description: 'Learn about process creation, execution, and thread management.',
        status: 'not-started',
        estimatedHours: 8,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'pm-1-1', title: 'Process Concept and States', status: 'not-started', resources: [] },
          { id: 'pm-1-2', title: 'Process Creation and Termination', status: 'not-started', resources: [] },
          { id: 'pm-1-3', title: 'Process Control Block (PCB)', status: 'not-started', resources: [] },
          { id: 'pm-1-4', title: 'Threads and Multithreading', status: 'not-started', resources: [] },
          { id: 'pm-1-5', title: 'Inter-process Communication (IPC)', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'pm-2',
        title: 'CPU Scheduling',
        description: 'Understand various CPU scheduling algorithms and policies.',
        status: 'not-started',
        estimatedHours: 6,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'pm-2-1', title: 'Scheduling Criteria', status: 'not-started', resources: [] },
          { id: 'pm-2-2', title: 'First-Come, First-Served (FCFS)', status: 'not-started', resources: [] },
          { id: 'pm-2-3', title: 'Shortest Job First (SJF)', status: 'not-started', resources: [] },
          { id: 'pm-2-4', title: 'Round Robin (RR)', status: 'not-started', resources: [] },
          { id: 'pm-2-5', title: 'Priority and Multilevel Queue Scheduling', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'pm-3',
        title: 'Synchronization',
        description: 'Learn about process synchronization and coordination.',
        status: 'not-started',
        estimatedHours: 7,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'pm-3-1', title: 'Race Conditions and Critical Sections', status: 'not-started', resources: [] },
          { id: 'pm-3-2', title: 'Mutex and Semaphores', status: 'not-started', resources: [] },
          { id: 'pm-3-3', title: 'Monitors and Condition Variables', status: 'not-started', resources: [] },
          { id: 'pm-3-4', title: 'Deadlock Prevention and Detection', status: 'not-started', resources: [] },
          { id: 'pm-3-5', title: 'Classic Synchronization Problems', status: 'not-started', resources: [] }
        ]
      }
    ]
  },
  'memory-management': {
    name: 'Memory Management',
    topics: [
      {
        id: 'mm-1',
        title: 'Memory Allocation',
        description: 'Understand memory allocation strategies and techniques.',
        status: 'not-started',
        estimatedHours: 6,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'mm-1-1', title: 'Contiguous Memory Allocation', status: 'not-started', resources: [] },
          { id: 'mm-1-2', title: 'Fragmentation and Compaction', status: 'not-started', resources: [] },
          { id: 'mm-1-3', title: 'Paging and Page Tables', status: 'not-started', resources: [] },
          { id: 'mm-1-4', title: 'Segmentation', status: 'not-started', resources: [] },
          { id: 'mm-1-5', title: 'Combined Paging and Segmentation', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'mm-2',
        title: 'Virtual Memory',
        description: 'Learn about virtual memory concepts and implementation.',
        status: 'not-started',
        estimatedHours: 7,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'mm-2-1', title: 'Virtual Memory Concept', status: 'not-started', resources: [] },
          { id: 'mm-2-2', title: 'Demand Paging', status: 'not-started', resources: [] },
          { id: 'mm-2-3', title: 'Page Replacement Algorithms', status: 'not-started', resources: [] },
          { id: 'mm-2-4', title: 'Working Set and Locality', status: 'not-started', resources: [] },
          { id: 'mm-2-5', title: 'Memory-Mapped Files', status: 'not-started', resources: [] }
        ]
      }
    ]
  },
  'storage-management': {
    name: 'Storage Management',
    topics: [
      {
        id: 'sm-1',
        title: 'File Systems',
        description: 'Understand file system organization and implementation.',
        status: 'not-started',
        estimatedHours: 8,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'sm-1-1', title: 'File Concept and Operations', status: 'not-started', resources: [] },
          { id: 'sm-1-2', title: 'Directory Structure', status: 'not-started', resources: [] },
          { id: 'sm-1-3', title: 'File Allocation Methods', status: 'not-started', resources: [] },
          { id: 'sm-1-4', title: 'Free Space Management', status: 'not-started', resources: [] },
          { id: 'sm-1-5', title: 'File System Performance', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'sm-2',
        title: 'I/O Systems',
        description: 'Learn about input/output hardware and software.',
        status: 'not-started',
        estimatedHours: 5,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'sm-2-1', title: 'I/O Hardware Architecture', status: 'not-started', resources: [] },
          { id: 'sm-2-2', title: 'I/O Software Layers', status: 'not-started', resources: [] },
          { id: 'sm-2-3', title: 'Disk Scheduling Algorithms', status: 'not-started', resources: [] },
          { id: 'sm-2-4', title: 'RAID Systems', status: 'not-started', resources: [] }
        ]
      }
    ]
  },
  'security-protection': {
    name: 'Security & Protection',
    topics: [
      {
        id: 'sp-1',
        title: 'Protection Mechanisms',
        description: 'Learn about OS protection and access control.',
        status: 'not-started',
        estimatedHours: 5,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'sp-1-1', title: 'Protection Domain and Access Matrix', status: 'not-started', resources: [] },
          { id: 'sp-1-2', title: 'Access Control Lists (ACL)', status: 'not-started', resources: [] },
          { id: 'sp-1-3', title: 'Capability-based Protection', status: 'not-started', resources: [] },
          { id: 'sp-1-4', title: 'Role-based Access Control', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'sp-2',
        title: 'System Security',
        description: 'Understand OS security threats and countermeasures.',
        status: 'not-started',
        estimatedHours: 6,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'sp-2-1', title: 'Authentication and Authorization', status: 'not-started', resources: [] },
          { id: 'sp-2-2', title: 'Buffer Overflow Attacks', status: 'not-started', resources: [] },
          { id: 'sp-2-3', title: 'Malware and Virus Protection', status: 'not-started', resources: [] },
          { id: 'sp-2-4', title: 'Intrusion Detection', status: 'not-started', resources: [] },
          { id: 'sp-2-5', title: 'Cryptographic File Systems', status: 'not-started', resources: [] }
        ]
      }
    ]
  },
  'distributed-systems': {
    name: 'Distributed Systems',
    topics: [
      {
        id: 'ds-1',
        title: 'Distributed OS Concepts',
        description: 'Learn about distributed operating systems and networking.',
        status: 'not-started',
        estimatedHours: 6,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'ds-1-1', title: 'Distributed System Models', status: 'not-started', resources: [] },
          { id: 'ds-1-2', title: 'Remote Procedure Calls (RPC)', status: 'not-started', resources: [] },
          { id: 'ds-1-3', title: 'Distributed File Systems', status: 'not-started', resources: [] },
          { id: 'ds-1-4', title: 'Distributed Coordination', status: 'not-started', resources: [] },
          { id: 'ds-1-5', title: 'Fault Tolerance', status: 'not-started', resources: [] }
        ]
      }
    ]
  }
};
