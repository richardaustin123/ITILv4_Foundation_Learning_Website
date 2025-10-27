export type Question = {
  id: number;
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation?: string;
  topic?: string;
};

export const QUESTIONS: Question[] = [
  // SVS
  {
    id: 1,
    prompt: 'What is the purpose of the Service Value System (SVS)?',
    options: [
      'To describe how all components and activities work together to facilitate value creation',
      'To define processes for incident and change management',
      'To specify the roles and responsibilities of service owners',
      'To measure and report on service performance only'
    ],
    answerIndex: 0,
    explanation: 'The SVS shows how all components and activities of an organization function together to create value.',
    topic: 'SVS'
  },
  {
    id: 2,
    prompt: 'Which element is NOT part of the SVS?',
    options: [
      'Guiding principles',
      'Governance',
      'Service value chain',
      'CSI Register'
    ],
    answerIndex: 3,
    explanation: 'The SVS includes guiding principles, governance, service value chain, practices, and continual improvement.',
    topic: 'SVS'
  },
  // Four Dimensions
  {
    id: 3,
    prompt: 'Which is NOT one of the four dimensions of service management?',
    options: [
      'Organizations and People',
      'Information and Technology',
      'Partners and Suppliers',
      'Governance and Risk'
    ],
    answerIndex: 3,
    explanation: 'The four dimensions are: Organizations and People; Information and Technology; Partners and Suppliers; Value Streams and Processes.',
    topic: 'Four Dimensions'
  },
  {
    id: 4,
    prompt: 'Which dimension considers workflows, activities, controls, and procedures needed to achieve agreed objectives?',
    options: [
      'Value Streams and Processes',
      'Information and Technology',
      'Partners and Suppliers',
      'Organizations and People'
    ],
    answerIndex: 0,
    explanation: 'Value Streams and Processes focus on how work flows and is controlled to enable value co-creation.',
    topic: 'Four Dimensions'
  },
  // Guiding Principles
  {
    id: 5,
    prompt: 'Which guiding principle recommends focusing on delivering value to stakeholders?',
    options: [
      'Start where you are',
      'Focus on value',
      'Progress iteratively with feedback',
      'Keep it simple and practical'
    ],
    answerIndex: 1,
    explanation: 'Focus on value is about maximizing outcomes for customers and stakeholders.',
    topic: 'Guiding Principles'
  },
  {
    id: 6,
    prompt: 'Which guiding principle advises using existing services, processes, and tools when possible?',
    options: [
      'Optimize and automate',
      'Start where you are',
      'Collaborate and promote visibility',
      'Think and work holistically'
    ],
    answerIndex: 1,
    explanation: 'Start where you are: do not build something new without first evaluating what currently exists.',
    topic: 'Guiding Principles'
  },
  {
    id: 7,
    prompt: 'Which guiding principle recommends organizing work into smaller, manageable sections?',
    options: [
      'Progress iteratively with feedback',
      'Keep it simple and practical',
      'Collaborate and promote visibility',
      'Focus on value'
    ],
    answerIndex: 0,
    explanation: 'Progress iteratively with feedback reduces risk and allows for course correction.',
    topic: 'Guiding Principles'
  },
  // Practices (selected)
  {
    id: 8,
    prompt: 'What is the purpose of the Incident Management practice?',
    options: [
      'To minimize the negative impact of incidents by restoring normal service operation as quickly as possible',
      'To make new and changed services available for use',
      'To align the organization’s practices and services with changing business needs',
      'To ensure that risks are properly assessed and authorized'
    ],
    answerIndex: 0,
    explanation: 'Incident management focuses on rapid restoration to minimize impact on business operations.',
    topic: 'Practices'
  },
  {
    id: 9,
    prompt: 'Change Enablement focuses on…',
    options: [
      'Maximizing the number of successful service and product changes',
      'Eliminating all risk before a change is deployed',
      'Automating incident resolution',
      'Tracking agreements with suppliers'
    ],
    answerIndex: 0,
    explanation: 'Change Enablement aims to maximize value and reduce risk from changes by ensuring changes are assessed and authorized.',
    topic: 'Practices'
  },
  {
    id: 10,
    prompt: 'Which practice is responsible for moving new or changed hardware, software, documentation, processes, or any other component to live environments?',
    options: [
      'Deployment Management',
      'Release Management',
      'Service Request Management',
      'Problem Management'
    ],
    answerIndex: 0,
    explanation: 'Deployment management moves changes to live or other target environments.',
    topic: 'Practices'
  },
  {
    id: 11,
    prompt: 'What is the primary purpose of Problem Management?',
    options: [
      'To reduce the likelihood and impact of incidents by identifying actual and potential causes',
      'To resolve incidents as quickly as possible',
      'To handle service requests from users',
      'To authorize changes to services'
    ],
    answerIndex: 0,
    explanation: 'Problem management manages the lifecycle of all problems to prevent incidents from happening and minimize impact of incidents that cannot be prevented.',
    topic: 'Practices'
  },
  // Value chain
  {
    id: 12,
    prompt: 'Which value chain activity ensures that services are delivered and supported according to agreed specifications and stakeholders’ expectations?',
    options: [
      'Deliver and Support',
      'Engage',
      'Obtain/Build',
      'Plan'
    ],
    answerIndex: 0,
    explanation: 'Deliver and Support provides ongoing delivery and support of services.',
    topic: 'Value Chain'
  },
  {
    id: 13,
    prompt: 'Which value chain activity aligns shared understanding of vision, current status, and improvement direction for all products and services?',
    options: [
      'Plan',
      'Design and Transition',
      'Engage',
      'Improve'
    ],
    answerIndex: 0,
    explanation: 'Plan ensures a shared understanding of the vision, current status, and improvement direction.',
    topic: 'Value Chain'
  },
  // Extra misc
  {
    id: 14,
    prompt: 'Utility is best described as…',
    options: [
      'The assurance that a service will meet agreed requirements',
      'The functionality offered by a product or service to meet a particular need',
      'A measure of service reliability',
      'The agreed level of performance of a service'
    ],
    answerIndex: 1,
    explanation: 'Utility (fit for purpose) is what the service does; warranty (fit for use) is how the service performs.',
    topic: 'Value'
  },
  {
    id: 15,
    prompt: 'Warranty is best described as…',
    options: [
      'The assurance that a service will meet agreed requirements',
      'The functionality offered by a product or service to meet a particular need',
      'The cost of providing a service',
      'A measure of service availability only'
    ],
    answerIndex: 0,
    explanation: 'Warranty relates to availability, capacity, continuity, and security to assure the service meets agreed requirements.',
    topic: 'Value'
  }
];
