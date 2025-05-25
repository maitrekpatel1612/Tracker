// DevOps Roadmap Data
export const roadmapData = {
  'learn-linux': {
    name: 'Learn Linux Basics',
    topics: [
      {
        id: 'linux-1',
        title: 'Command Line Basics',
        description: 'Learn basic Linux commands and navigation',
        status: 'not-started',
        estimatedHours: 5,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'linux-1-1', title: 'File System Navigation', status: 'not-started', resources: ['https://www.digitalocean.com/community/tutorials/basic-linux-navigation-and-file-management'] },
          { id: 'linux-1-2', title: 'Text Manipulation Commands', status: 'not-started', resources: ['https://www.geeksforgeeks.org/linux-commands/'] },
          { id: 'linux-1-3', title: 'I/O Redirection', status: 'not-started', resources: ['https://www.digitalocean.com/community/tutorials/an-introduction-to-linux-i-o-redirection'] },
          { id: 'linux-1-4', title: 'Pipes and Filters', status: 'not-started', resources: ['https://www.geeksforgeeks.org/piping-in-unix-or-linux/'] },
          { id: 'linux-1-5', title: 'File Management Commands', status: 'not-started', resources: ['https://linuxize.com/post/basic-linux-commands/'] },
          { id: 'linux-1-6', title: 'Directory Operations', status: 'not-started', resources: ['https://linuxhandbook.com/basic-linux-commands/'] },
          { id: 'linux-1-7', title: 'Command Line Shortcuts', status: 'not-started', resources: ['https://www.redhat.com/sysadmin/top-10-shortcuts'] },
          { id: 'linux-1-8', title: 'Environment Variables', status: 'not-started', resources: ['https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-linux'] },
          { id: 'linux-1-9', title: 'Command History', status: 'not-started', resources: ['https://www.tecmint.com/history-command-examples/'] },
          { id: 'linux-1-10', title: 'Man Pages & Documentation', status: 'not-started', resources: ['https://www.howtogeek.com/663440/how-to-use-linuxs-man-command-hidden-secrets-and-basics/'] },
          { id: 'linux-1-11', title: 'Terminal Multiplexers (screen, tmux)', status: 'not-started', resources: ['https://linuxize.com/post/getting-started-with-tmux/'] },
          { id: 'linux-1-12', title: 'Command Line Text Editors', status: 'not-started', resources: ['https://www.linuxjournal.com/content/linux-command-line-text-editors'] }
        ]
      },
      {
        id: 'linux-2',
        title: 'File Permissions',
        description: 'Understanding Linux file permissions and ownership',
        status: 'not-started',
        estimatedHours: 3,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'linux-2-1', title: 'User and Group Management', status: 'not-started', resources: ['https://www.digitalocean.com/community/tutorials/an-introduction-to-linux-permissions'] },
          { id: 'linux-2-2', title: 'File Permissions (chmod)', status: 'not-started', resources: ['https://www.geeksforgeeks.org/chmod-command-linux/'] },
          { id: 'linux-2-3', title: 'File Ownership (chown)', status: 'not-started', resources: ['https://linuxize.com/post/linux-chown-command/'] }
        ]
      },
      {
        id: 'linux-3',
        title: 'Process Management',
        description: 'Working with processes and services',
        status: 'not-started',
        estimatedHours: 4,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'linux-3-1', title: 'Process Monitoring (ps, top, htop)', status: 'not-started', resources: ['https://www.howtogeek.com/107217/how-to-manage-processes-from-the-linux-terminal/'] },
          { id: 'linux-3-2', title: 'Process Control (kill, nice)', status: 'not-started', resources: ['https://www.geeksforgeeks.org/kill-command-in-linux-with-examples/'] },
          { id: 'linux-3-3', title: 'Systemd Service Management', status: 'not-started', resources: ['https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units'] },
          { id: 'linux-3-4', title: 'Background Jobs', status: 'not-started', resources: ['https://www.tecmint.com/run-linux-command-process-in-background-detach-process/'] }
        ]
      },
      {
        id: 'linux-4',
        title: 'Bash Scripting',
        description: 'Basic shell scripting for automation',
        status: 'not-started',
        estimatedHours: 8,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'linux-4-1', title: 'Script Basics and Structure', status: 'not-started', resources: ['https://linuxconfig.org/bash-scripting-tutorial-for-beginners'] },
          { id: 'linux-4-2', title: 'Variables and Data Types', status: 'not-started', resources: ['https://tldp.org/LDP/abs/html/variables.html'] },
          { id: 'linux-4-3', title: 'Control Structures', status: 'not-started', resources: ['https://tldp.org/LDP/Bash-Beginners-Guide/html/chap_07.html'] },
          { id: 'linux-4-4', title: 'Functions', status: 'not-started', resources: ['https://www.tutorialspoint.com/unix/unix-shell-functions.htm'] },
          { id: 'linux-4-5', title: 'Script Automation', status: 'not-started', resources: ['https://www.shellscript.sh/'] }
        ]
      }
    ]
  },
  'networking': {
    name: 'Networking',
    topics: [
      {
        id: 'net-1',
        title: 'OSI Model',
        description: 'Understanding the 7 layers of the OSI model',
        status: 'not-started',
        estimatedHours: 3,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'net-1-1', title: 'Physical Layer', status: 'not-started', resources: ['https://www.cloudflare.com/learning/network-layer/what-is-the-physical-layer/'] },
          { id: 'net-1-2', title: 'Data Link Layer', status: 'not-started', resources: ['https://www.cloudflare.com/learning/network-layer/what-is-a-data-link-layer/'] },
          { id: 'net-1-3', title: 'Network Layer', status: 'not-started', resources: ['https://www.cloudflare.com/learning/network-layer/what-is-the-network-layer/'] },
          { id: 'net-1-4', title: 'Transport Layer', status: 'not-started', resources: ['https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/'] },
          { id: 'net-1-5', title: 'Session Layer', status: 'not-started', resources: ['https://www.geeksforgeeks.org/session-layer-in-osi-model/'] },
          { id: 'net-1-6', title: 'Presentation Layer', status: 'not-started', resources: ['https://www.geeksforgeeks.org/presentation-layer-in-osi-model/'] },
          { id: 'net-1-7', title: 'Application Layer', status: 'not-started', resources: ['https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/'] }
        ]
      }
    ]
  },
  'version-control': {
    name: 'Version Control Systems',
    topics: [
      {
        id: 'vcs-1',
        title: 'Git Basics',
        description: 'Core Git concepts and commands',
        status: 'not-started',
        estimatedHours: 5,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'vcs-1-1', title: 'Repository Setup', status: 'not-started', resources: ['https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository'] },
          { id: 'vcs-1-2', title: 'Basic Commands', status: 'not-started', resources: ['https://git-scm.com/docs'] },
          { id: 'vcs-1-3', title: 'Branching and Merging', status: 'not-started', resources: ['https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell'] }
        ]
      }
    ]
  },
  'devops-foundations': {
    name: 'DevOps Foundations',
    topics: [
      {
        id: 'devops-1',
        title: 'Understand DevOps Basics',
        description: 'Learn the culture, principles, and lifecycle of DevOps.',
        status: 'not-started',
        estimatedHours: 2,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'devops-1-1', title: 'What is DevOps?', status: 'not-started', resources: [] },
          { id: 'devops-1-2', title: 'Key Principles: CI, CD, IaC, Monitoring, Automation', status: 'not-started', resources: [] },
          { id: 'devops-1-3', title: 'DevOps Lifecycle: Plan, Code, Build, Test, Release, Deploy, Operate, Monitor', status: 'not-started', resources: [] },
          { id: 'devops-1-4', title: 'Resources: The Phoenix Project, DevOps blogs', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'devops-2',
        title: 'Linux Basics',
        description: 'Master Linux commands and server basics for DevOps.',
        status: 'not-started',
        estimatedHours: 3,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'devops-2-1', title: 'File system navigation: ls, cd, pwd, mkdir, rm', status: 'not-started', resources: [] },
          { id: 'devops-2-2', title: 'File manipulation: cat, nano, vim, chmod, chown', status: 'not-started', resources: [] },
          { id: 'devops-2-3', title: 'Process management: ps, top, kill', status: 'not-started', resources: [] },
          { id: 'devops-2-4', title: 'Networking: ping, netstat, curl, wget', status: 'not-started', resources: [] },
          { id: 'devops-2-5', title: 'Package management: apt, yum, dnf', status: 'not-started', resources: [] },
          { id: 'devops-2-6', title: 'Tools: Ubuntu, CentOS, WSL', status: 'not-started', resources: [] },
          { id: 'devops-2-7', title: 'Practice: Set up a Linux VM and practice basic commands', status: 'not-started', resources: [] },
          { id: 'devops-2-8', title: 'Resources: Linux Journey, The Linux Command Line', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'devops-3',
        title: 'Version Control with Git',
        description: 'Learn Git for source code management and collaboration.',
        status: 'not-started',
        estimatedHours: 2,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'devops-3-1', title: 'Commands: git init, git clone, git commit, git push, git pull', status: 'not-started', resources: [] },
          { id: 'devops-3-2', title: 'Branching: git branch, git merge, git rebase', status: 'not-started', resources: [] },
          { id: 'devops-3-3', title: 'Workflows: GitFlow, Trunk-Based Development', status: 'not-started', resources: [] },
          { id: 'devops-3-4', title: 'Tools: Git, GitHub, GitLab, Bitbucket', status: 'not-started', resources: [] },
          { id: 'devops-3-5', title: 'Practice: Create a GitHub repository and collaborate', status: 'not-started', resources: [] },
          { id: 'devops-3-6', title: 'Resources: Pro Git book, GitHub Docs', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'devops-4',
        title: 'Basic Scripting',
        description: 'Automate tasks with Bash and Python scripting.',
        status: 'not-started',
        estimatedHours: 2,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'devops-4-1', title: 'Bash: For Linux automation', status: 'not-started', resources: [] },
          { id: 'devops-4-2', title: 'Python: For complex automation', status: 'not-started', resources: [] },
          { id: 'devops-4-3', title: 'Topics: Variables, loops, conditionals, functions', status: 'not-started', resources: [] },
          { id: 'devops-4-4', title: 'Practice: Write a Bash or Python script', status: 'not-started', resources: [] },
          { id: 'devops-4-5', title: 'Resources: Learn Python the Hard Way, Bash Scripting Tutorial', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'devops-5',
        title: 'Networking Fundamentals',
        description: 'Understand system communication and networking tools.',
        status: 'not-started',
        estimatedHours: 2,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'devops-5-1', title: 'OSI model, TCP/IP, DNS, HTTP/HTTPS, SSH', status: 'not-started', resources: [] },
          { id: 'devops-5-2', title: 'Ports: 80, 443, 22', status: 'not-started', resources: [] },
          { id: 'devops-5-3', title: 'Firewalls and security groups', status: 'not-started', resources: [] },
          { id: 'devops-5-4', title: 'Tools: nmap, tcpdump, Wireshark', status: 'not-started', resources: [] },
          { id: 'devops-5-5', title: 'Practice: Set up an Apache/Nginx server', status: 'not-started', resources: [] },
          { id: 'devops-5-6', title: 'Resources: Computer Networking: A Top-Down Approach', status: 'not-started', resources: [] }
        ]
      }
    ]
  },
  'devops-core': {
    name: 'Core DevOps Skills',
    topics: [
      {
        id: 'devops-6',
        title: 'Containerization with Docker',
        description: 'Standardize application deployment with Docker.',
        status: 'not-started',
        estimatedHours: 3,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'devops-6-1', title: 'Docker basics: Images, containers, Dockerfiles', status: 'not-started', resources: [] },
          { id: 'devops-6-2', title: 'Commands: docker build, docker run, docker push', status: 'not-started', resources: [] },
          { id: 'devops-6-3', title: 'Docker Compose for multi-container apps', status: 'not-started', resources: [] },
          { id: 'devops-6-4', title: 'Networking and storage', status: 'not-started', resources: [] },
          { id: 'devops-6-5', title: 'Practice: Containerize a Node.js/Flask app', status: 'not-started', resources: [] },
          { id: 'devops-6-6', title: 'Resources: Docker Documentation, Docker Deep Dive', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'devops-7',
        title: 'Continuous Integration/Continuous Deployment (CI/CD)',
        description: 'Automate code integration and deployment.',
        status: 'not-started',
        estimatedHours: 3,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'devops-7-1', title: 'Tools: Jenkins, GitHub Actions, GitLab CI, CircleCI', status: 'not-started', resources: [] },
          { id: 'devops-7-2', title: 'Pipeline setup for build, test, deploy', status: 'not-started', resources: [] },
          { id: 'devops-7-3', title: 'Writing pipeline scripts (Jenkinsfile, YAML)', status: 'not-started', resources: [] },
          { id: 'devops-7-4', title: 'Automated testing', status: 'not-started', resources: [] },
          { id: 'devops-7-5', title: 'Practice: Deploy a static website to AWS S3', status: 'not-started', resources: [] },
          { id: 'devops-7-6', title: 'Resources: Jenkins Documentation, GitHub Actions Docs', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'devops-8',
        title: 'Cloud Platforms',
        description: 'Learn core cloud services and deployment.',
        status: 'not-started',
        estimatedHours: 3,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'devops-8-1', title: 'Providers: AWS, Azure, GCP', status: 'not-started', resources: [] },
          { id: 'devops-8-2', title: 'Core services: EC2, S3, VPC, Load Balancers', status: 'not-started', resources: [] },
          { id: 'devops-8-3', title: 'CLI and SDKs: AWS CLI, Azure CLI', status: 'not-started', resources: [] },
          { id: 'devops-8-4', title: 'Practice: Deploy a containerized app to AWS ECS or Azure App Service', status: 'not-started', resources: [] },
          { id: 'devops-8-5', title: 'Certifications: AWS Certified Cloud Practitioner, Azure Fundamentals', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'devops-9',
        title: 'Infrastructure as Code (IaC)',
        description: 'Automate infrastructure setup with code.',
        status: 'not-started',
        estimatedHours: 3,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'devops-9-1', title: 'Tools: Terraform, AWS CloudFormation, Ansible', status: 'not-started', resources: [] },
          { id: 'devops-9-2', title: 'Terraform configurations (.tf files)', status: 'not-started', resources: [] },
          { id: 'devops-9-3', title: 'Ansible playbooks', status: 'not-started', resources: [] },
          { id: 'devops-9-4', title: 'Practice: Provision an EC2 instance with Terraform and configure it with Ansible', status: 'not-started', resources: [] },
          { id: 'devops-9-5', title: 'Resources: Terraform Docs, Ansible Galaxy', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'devops-10',
        title: 'Monitoring and Logging',
        description: 'Monitor system health and centralize logs.',
        status: 'not-started',
        estimatedHours: 2,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'devops-10-1', title: 'Tools: Prometheus, Grafana, ELK Stack, CloudWatch', status: 'not-started', resources: [] },
          { id: 'devops-10-2', title: 'Monitoring dashboards', status: 'not-started', resources: [] },
          { id: 'devops-10-3', title: 'Alerts for CPU, memory, disk', status: 'not-started', resources: [] },
          { id: 'devops-10-4', title: 'Centralized logging', status: 'not-started', resources: [] },
          { id: 'devops-10-5', title: 'Practice: Monitor a Dockerized app with Prometheus and Grafana', status: 'not-started', resources: [] },
          { id: 'devops-10-6', title: 'Resources: Prometheus Docs, Grafana Tutorials', status: 'not-started', resources: [] }
        ]
      }
    ]
  },
  'devops-intermediate': {
    name: 'Intermediate DevOps',
    topics: [
      {
        id: 'devops-11',
        title: 'Container Orchestration with Kubernetes',
        description: 'Manage containers at scale with Kubernetes.',
        status: 'not-started',
        estimatedHours: 4,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'devops-11-1', title: 'Architecture: Pods, Deployments, Services, Ingress', status: 'not-started', resources: [] },
          { id: 'devops-11-2', title: 'kubectl and YAML manifests', status: 'not-started', resources: [] },
          { id: 'devops-11-3', title: 'Cluster setup: Minikube, EKS, AKS, GKE', status: 'not-started', resources: [] },
          { id: 'devops-11-4', title: 'Practice: Deploy a multi-container app with Ingress', status: 'not-started', resources: [] },
          { id: 'devops-11-5', title: 'Resources: Kubernetes Documentation, Kubernetes in Action', status: 'not-started', resources: [] },
          { id: 'devops-11-6', title: 'Certifications: Certified Kubernetes Administrator (CKA)', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'devops-12',
        title: 'Advanced CI/CD',
        description: 'Learn advanced deployment strategies and pipeline security.',
        status: 'not-started',
        estimatedHours: 2,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'devops-12-1', title: 'Blue-Green deployments, Canary releases', status: 'not-started', resources: [] },
          { id: 'devops-12-2', title: 'Pipeline optimization', status: 'not-started', resources: [] },
          { id: 'devops-12-3', title: 'Security scans (Snyk, Trivy)', status: 'not-started', resources: [] },
          { id: 'devops-12-4', title: 'Practice: Implement a Canary deployment', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'devops-13',
        title: 'Cloud-Native Development',
        description: 'Explore microservices, serverless, and service meshes.',
        status: 'not-started',
        estimatedHours: 2,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'devops-13-1', title: 'Microservices architecture', status: 'not-started', resources: [] },
          { id: 'devops-13-2', title: 'Serverless: AWS Lambda, Azure Functions', status: 'not-started', resources: [] },
          { id: 'devops-13-3', title: 'Service meshes: Istio, Linkerd', status: 'not-started', resources: [] },
          { id: 'devops-13-4', title: 'Practice: Build a serverless API with AWS Lambda', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'devops-14',
        title: 'Security in DevOps (DevSecOps)',
        description: 'Secure pipelines, containers, and networks.',
        status: 'not-started',
        estimatedHours: 2,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'devops-14-1', title: 'Securing pipelines (HashiCorp Vault)', status: 'not-started', resources: [] },
          { id: 'devops-14-2', title: 'Container security', status: 'not-started', resources: [] },
          { id: 'devops-14-3', title: 'Network security (IAM, WAF)', status: 'not-started', resources: [] },
          { id: 'devops-14-4', title: 'Practice: Use AWS Secrets Manager in a pipeline', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'devops-15',
        title: 'Advanced Monitoring',
        description: 'Distributed tracing, APM, and log aggregation.',
        status: 'not-started',
        estimatedHours: 2,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'devops-15-1', title: 'Distributed tracing (Jaeger, Zipkin)', status: 'not-started', resources: [] },
          { id: 'devops-15-2', title: 'APM with New Relic/Datadog', status: 'not-started', resources: [] },
          { id: 'devops-15-3', title: 'Log aggregation with ELK/Loki', status: 'not-started', resources: [] },
          { id: 'devops-15-4', title: 'Practice: Set up tracing for a microservices app', status: 'not-started', resources: [] }
        ]
      }
    ]
  },
  'devops-advanced': {
    name: 'Advanced DevOps',
    topics: [
      {
        id: 'devops-16',
        title: 'GitOps',
        description: 'Use Git as the source of truth for deployments.',
        status: 'not-started',
        estimatedHours: 2,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'devops-16-1', title: 'Tools: ArgoCD, Flux', status: 'not-started', resources: [] },
          { id: 'devops-16-2', title: 'Topics: Declarative deployments, cluster syncing', status: 'not-started', resources: [] },
          { id: 'devops-16-3', title: 'Practice: Deploy a Kubernetes app with ArgoCD', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'devops-17',
        title: 'Chaos Engineering',
        description: 'Test system resilience with chaos experiments.',
        status: 'not-started',
        estimatedHours: 1,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'devops-17-1', title: 'Tools: Chaos Monkey, LitmusChaos', status: 'not-started', resources: [] },
          { id: 'devops-17-2', title: 'Topics: Designing chaos experiments', status: 'not-started', resources: [] },
          { id: 'devops-17-3', title: 'Practice: Test a Kubernetes app with LitmusChaos', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'devops-18',
        title: 'Site Reliability Engineering (SRE)',
        description: 'Learn SRE principles, error budgets, and incident response.',
        status: 'not-started',
        estimatedHours: 2,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'devops-18-1', title: 'SLIs, SLOs, SLAs', status: 'not-started', resources: [] },
          { id: 'devops-18-2', title: 'Error budgets, incident response', status: 'not-started', resources: [] },
          { id: 'devops-18-3', title: 'Resources: Site Reliability Engineering by Google', status: 'not-started', resources: [] },
          { id: 'devops-18-4', title: 'Practice: Define SLOs and set up alerts', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'devops-19',
        title: 'Advanced Cloud Architectures',
        description: 'Design multi-cloud, hybrid, and disaster recovery solutions.',
        status: 'not-started',
        estimatedHours: 2,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'devops-19-1', title: 'Multi-cloud/hybrid cloud', status: 'not-started', resources: [] },
          { id: 'devops-19-2', title: 'Cost optimization', status: 'not-started', resources: [] },
          { id: 'devops-19-3', title: 'Disaster recovery', status: 'not-started', resources: [] },
          { id: 'devops-19-4', title: 'Practice: Design a multi-region deployment with AWS Route 53', status: 'not-started', resources: [] }
        ]
      },
      {
        id: 'devops-20',
        title: 'Leadership and Culture',
        description: 'Lead DevOps transformations and foster collaboration.',
        status: 'not-started',
        estimatedHours: 1,
        startDate: null,
        completionDate: null,
        notes: '',
        subtopics: [
          { id: 'devops-20-1', title: 'Collaboration between Dev and Ops', status: 'not-started', resources: [] },
          { id: 'devops-20-2', title: 'Leading DevOps transformations', status: 'not-started', resources: [] },
          { id: 'devops-20-3', title: 'Practice: Document a process improvement plan', status: 'not-started', resources: [] }
        ]
      }
    ]
  }
  // Other categories from the original data would continue here
};

export default roadmapData;
