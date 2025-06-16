// Computer Networks Roadmap Data
export const computerNetworkRoadmapData = {
  'network-fundamentals': {
    name: 'Network Fundamentals',
    topics: [
      {
        id: 'nf-1',
        title: 'Introduction to Computer Networks',
        description: 'Learn the basics of computer networks and networking concepts.',
        status: 'not-started',
        estimatedHours: 4,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'nf-1-1', title: 'What is a Computer Network', status: 'not-started', resources: [] },
          { id: 'nf-1-2', title: 'Types of Networks (LAN, WAN, MAN, PAN)', status: 'not-started', resources: [] },
          { id: 'nf-1-3', title: 'Network Topologies (Star, Ring, Bus, Mesh)', status: 'not-started', resources: [] },
          { id: 'nf-1-4', title: 'Network Components (Router, Switch, Hub, Bridge)', status: 'not-started', resources: [] },
          { id: 'nf-1-5', title: 'Network Media (Copper, Fiber, Wireless)', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'nf-2',
        title: 'OSI Model',
        description: 'Understand the seven layers of the OSI reference model.',
        status: 'not-started',
        estimatedHours: 6,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'nf-2-1', title: 'Physical Layer', status: 'not-started', resources: [] },
          { id: 'nf-2-2', title: 'Data Link Layer', status: 'not-started', resources: [] },
          { id: 'nf-2-3', title: 'Network Layer', status: 'not-started', resources: [] },
          { id: 'nf-2-4', title: 'Transport Layer', status: 'not-started', resources: [] },
          { id: 'nf-2-5', title: 'Session Layer', status: 'not-started', resources: [] },
          { id: 'nf-2-6', title: 'Presentation Layer', status: 'not-started', resources: [] },
          { id: 'nf-2-7', title: 'Application Layer', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'nf-3',
        title: 'TCP/IP Model',
        description: 'Learn about the TCP/IP protocol suite and internet architecture.',
        status: 'not-started',
        estimatedHours: 5,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'nf-3-1', title: 'Network Interface Layer', status: 'not-started', resources: [] },
          { id: 'nf-3-2', title: 'Internet Layer (IP)', status: 'not-started', resources: [] },
          { id: 'nf-3-3', title: 'Transport Layer (TCP/UDP)', status: 'not-started', resources: [] },
          { id: 'nf-3-4', title: 'Application Layer', status: 'not-started', resources: [] },
          { id: 'nf-3-5', title: 'Comparison with OSI Model', status: 'not-started', resources: [] }
        ]
      }
    ]
  },
  'protocols': {
    name: 'Network Protocols',
    topics: [
      {
        id: 'np-1',
        title: 'Internet Protocol (IP)',
        description: 'Deep dive into IPv4 and IPv6 addressing and routing.',
        status: 'not-started',
        estimatedHours: 8,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'np-1-1', title: 'IPv4 Addressing and Subnetting', status: 'not-started', resources: [] },
          { id: 'np-1-2', title: 'IPv6 Addressing', status: 'not-started', resources: [] },
          { id: 'np-1-3', title: 'CIDR Notation', status: 'not-started', resources: [] },
          { id: 'np-1-4', title: 'Network Address Translation (NAT)', status: 'not-started', resources: [] },
          { id: 'np-1-5', title: 'DHCP and DNS', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'np-2',
        title: 'Transport Protocols',
        description: 'Learn about TCP, UDP, and their characteristics.',
        status: 'not-started',
        estimatedHours: 6,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'np-2-1', title: 'Transmission Control Protocol (TCP)', status: 'not-started', resources: [] },
          { id: 'np-2-2', title: 'User Datagram Protocol (UDP)', status: 'not-started', resources: [] },
          { id: 'np-2-3', title: 'TCP vs UDP Comparison', status: 'not-started', resources: [] },
          { id: 'np-2-4', title: 'Port Numbers and Sockets', status: 'not-started', resources: [] },
          { id: 'np-2-5', title: 'Connection Establishment and Termination', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'np-3',
        title: 'Application Layer Protocols',
        description: 'Explore HTTP, HTTPS, FTP, SMTP, and other application protocols.',
        status: 'not-started',
        estimatedHours: 7,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'np-3-1', title: 'HTTP and HTTPS', status: 'not-started', resources: [] },
          { id: 'np-3-2', title: 'File Transfer Protocol (FTP)', status: 'not-started', resources: [] },
          { id: 'np-3-3', title: 'Simple Mail Transfer Protocol (SMTP)', status: 'not-started', resources: [] },
          { id: 'np-3-4', title: 'Domain Name System (DNS)', status: 'not-started', resources: [] },
          { id: 'np-3-5', title: 'Telnet and SSH', status: 'not-started', resources: [] }
        ]
      }
    ]
  },
  'routing-switching': {
    name: 'Routing & Switching',
    topics: [
      {
        id: 'rs-1',
        title: 'Routing Fundamentals',
        description: 'Learn about routing algorithms and protocols.',
        status: 'not-started',
        estimatedHours: 8,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'rs-1-1', title: 'Static vs Dynamic Routing', status: 'not-started', resources: [] },
          { id: 'rs-1-2', title: 'Routing Information Protocol (RIP)', status: 'not-started', resources: [] },
          { id: 'rs-1-3', title: 'Open Shortest Path First (OSPF)', status: 'not-started', resources: [] },
          { id: 'rs-1-4', title: 'Border Gateway Protocol (BGP)', status: 'not-started', resources: [] },
          { id: 'rs-1-5', title: 'Routing Tables and Metrics', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'rs-2',
        title: 'Switching Concepts',
        description: 'Understand Ethernet switching and VLANs.',
        status: 'not-started',
        estimatedHours: 6,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'rs-2-1', title: 'Ethernet and MAC Addresses', status: 'not-started', resources: [] },
          { id: 'rs-2-2', title: 'Switching vs Hub-based Networks', status: 'not-started', resources: [] },
          { id: 'rs-2-3', title: 'Virtual LANs (VLANs)', status: 'not-started', resources: [] },
          { id: 'rs-2-4', title: 'Spanning Tree Protocol (STP)', status: 'not-started', resources: [] },
          { id: 'rs-2-5', title: 'VLAN Trunking Protocol (VTP)', status: 'not-started', resources: [] }
        ]
      }
    ]
  },
  'security': {
    name: 'Network Security',
    topics: [
      {
        id: 'ns-1',
        title: 'Security Fundamentals',
        description: 'Learn about network security threats and countermeasures.',
        status: 'not-started',
        estimatedHours: 6,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'ns-1-1', title: 'Common Network Attacks', status: 'not-started', resources: [] },
          { id: 'ns-1-2', title: 'Firewalls and Access Control Lists', status: 'not-started', resources: [] },
          { id: 'ns-1-3', title: 'Intrusion Detection Systems (IDS)', status: 'not-started', resources: [] },
          { id: 'ns-1-4', title: 'Virtual Private Networks (VPN)', status: 'not-started', resources: [] },
          { id: 'ns-1-5', title: 'Encryption and PKI', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'ns-2',
        title: 'Wireless Security',
        description: 'Understand wireless network security protocols and best practices.',
        status: 'not-started',
        estimatedHours: 4,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'ns-2-1', title: 'WEP, WPA, and WPA2/WPA3', status: 'not-started', resources: [] },
          { id: 'ns-2-2', title: 'Wireless Attack Vectors', status: 'not-started', resources: [] },
          { id: 'ns-2-3', title: 'Enterprise Wireless Security', status: 'not-started', resources: [] },
          { id: 'ns-2-4', title: 'Wireless Intrusion Detection', status: 'not-started', resources: [] }
        ]
      }
    ]
  },
  'performance': {
    name: 'Network Performance',
    topics: [
      {
        id: 'perf-1',
        title: 'Network Monitoring',
        description: 'Learn about network monitoring tools and techniques.',
        status: 'not-started',
        estimatedHours: 5,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'perf-1-1', title: 'SNMP and Network Management', status: 'not-started', resources: [] },
          { id: 'perf-1-2', title: 'Network Analyzers and Packet Capture', status: 'not-started', resources: [] },
          { id: 'perf-1-3', title: 'Bandwidth Monitoring', status: 'not-started', resources: [] },
          { id: 'perf-1-4', title: 'Quality of Service (QoS)', status: 'not-started', resources: [] },
          { id: 'perf-1-5', title: 'Network Troubleshooting', status: 'not-started', resources: [] }
        ]
      }
    ]
  }
};
