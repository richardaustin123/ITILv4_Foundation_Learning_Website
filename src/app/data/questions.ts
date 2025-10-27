export type Question = {
  id: number;
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation?: string;
  topic?: string;
};

export const QUESTIONS: Question[] = [
  // --- Service Value System (SVS) ---
  {
    id: 1,
    prompt: 'What is the purpose of the Service Value System (SVS)?',
    options: [
      'To describe how all components and activities of an organisation work together to enable value creation',
      'To define the processes for incident and change management',
      'To specify the roles and responsibilities of service owners',
      'To measure and report on service performance only'
    ],
    answerIndex: 0,
    explanation: 'The SVS ensures that all components and activities of an organisation work together as a system to co-create value.',
    topic: 'SVS'
  },
  {
    id: 2,
    prompt: 'Which of the following is NOT a component of the Service Value System (SVS)?',
    options: [
      'Guiding principles',
      'Practices',
      'Continual improvement',
      'Service catalogue'
    ],
    answerIndex: 3,
    explanation: 'The five components of the SVS are: guiding principles, governance, service value chain, practices, and continual improvement.',
    topic: 'SVS'
  },
  {
    id: 3,
    prompt: 'Which component of the SVS provides the central operating model for service creation, delivery, and improvement?',
    options: [
      'Service value chain',
      'Governance',
      'Guiding principles',
      'Practices'
    ],
    answerIndex: 0,
    explanation: 'The service value chain is at the heart of the SVS and describes how value is created through interconnected activities.',
    topic: 'SVS'
  },
  {
    id: 4,
    prompt: 'What are the inputs to the Service Value System?',
    options: [
      'Opportunity and demand',
      'Governance and policies',
      'Utility and warranty',
      'Practices and principles'
    ],
    answerIndex: 0,
    explanation: 'Opportunity and demand are the inputs to the SVS; value is its output.',
    topic: 'SVS'
  },

  // --- Four Dimensions of Service Management ---
  {
    id: 5,
    prompt: 'Which is NOT one of the four dimensions of service management?',
    options: [
      'Organisations and People',
      'Information and Technology',
      'Partners and Suppliers',
      'Governance and Risk'
    ],
    answerIndex: 3,
    explanation: 'The four dimensions are Organisations and People, Information and Technology, Partners and Suppliers, and Value Streams and Processes.',
    topic: 'Four Dimensions'
  },
  {
    id: 6,
    prompt: 'Which dimension focuses on the relationships with third parties that contribute to value co-creation?',
    options: [
      'Partners and Suppliers',
      'Organisations and People',
      'Information and Technology',
      'Value Streams and Processes'
    ],
    answerIndex: 0,
    explanation: 'Partners and Suppliers covers relationships with other organisations involved in the design, delivery, support, and improvement of services.',
    topic: 'Four Dimensions'
  },
  {
    id: 7,
    prompt: 'Which dimension considers workflows, activities, controls, and procedures needed to achieve agreed objectives?',
    options: [
      'Value Streams and Processes',
      'Organisations and People',
      'Information and Technology',
      'Partners and Suppliers'
    ],
    answerIndex: 0,
    explanation: 'Value Streams and Processes focus on how work is organised and controlled to enable value co-creation.',
    topic: 'Four Dimensions'
  },

  // --- Guiding Principles ---
  {
    id: 8,
    prompt: 'Which guiding principle recommends that everything the organisation does should link to value for stakeholders?',
    options: [
      'Focus on value',
      'Start where you are',
      'Progress iteratively with feedback',
      'Keep it simple and practical'
    ],
    answerIndex: 0,
    explanation: 'Focus on value means always considering what creates value for stakeholders in every activity.',
    topic: 'Guiding Principles'
  },
  {
    id: 9,
    prompt: 'Which guiding principle advises using existing services, processes, and tools when possible?',
    options: [
      'Start where you are',
      'Optimise and automate',
      'Collaborate and promote visibility',
      'Think and work holistically'
    ],
    answerIndex: 0,
    explanation: 'Start where you are: assess the current state objectively and reuse what already works.',
    topic: 'Guiding Principles'
  },
  {
    id: 10,
    prompt: 'Which guiding principle recommends dividing work into smaller, manageable sections?',
    options: [
      'Progress iteratively with feedback',
      'Keep it simple and practical',
      'Collaborate and promote visibility',
      'Focus on value'
    ],
    answerIndex: 0,
    explanation: 'Progress iteratively with feedback reduces risk and allows for regular adjustment.',
    topic: 'Guiding Principles'
  },
  {
    id: 11,
    prompt: 'Which guiding principle highlights the importance of working together across boundaries and making work transparent?',
    options: [
      'Collaborate and promote visibility',
      'Think and work holistically',
      'Optimise and automate',
      'Start where you are'
    ],
    answerIndex: 0,
    explanation: 'Collaboration and visibility increase trust and improve communication across the organisation.',
    topic: 'Guiding Principles'
  },
  {
    id: 12,
    prompt: 'Which guiding principle recommends using the minimum number of steps needed to achieve objectives?',
    options: [
      'Keep it simple and practical',
      'Focus on value',
      'Start where you are',
      'Progress iteratively with feedback'
    ],
    answerIndex: 0,
    explanation: 'Keep it simple and practical helps prevent over-complication and waste.',
    topic: 'Guiding Principles'
  },
  {
    id: 13,
    prompt: 'Which guiding principle suggests making the best use of human and technical resources?',
    options: [
      'Optimise and automate',
      'Collaborate and promote visibility',
      'Think and work holistically',
      'Focus on value'
    ],
    answerIndex: 0,
    explanation: 'Optimise and automate maximises efficiency and allows people to focus on higher-value work.',
    topic: 'Guiding Principles'
  },

  // --- Service Value Chain ---
  {
    id: 14,
    prompt: 'Which value chain activity ensures shared understanding of vision, current status, and improvement direction?',
    options: [
      'Plan',
      'Engage',
      'Design and Transition',
      'Improve'
    ],
    answerIndex: 0,
    explanation: 'The Plan activity creates a shared understanding of the organisation’s vision and direction.',
    topic: 'Service Value Chain'
  },
  {
    id: 15,
    prompt: 'Which value chain activity provides understanding of stakeholder needs and continual engagement?',
    options: [
      'Engage',
      'Deliver and Support',
      'Design and Transition',
      'Obtain or Build'
    ],
    answerIndex: 0,
    explanation: 'Engage ensures good understanding of stakeholder needs and fosters relationships and feedback.',
    topic: 'Service Value Chain'
  },
  {
    id: 16,
    prompt: 'Which value chain activity ensures products and services continually meet expectations for quality, cost, and time to market?',
    options: [
      'Design and Transition',
      'Plan',
      'Deliver and Support',
      'Improve'
    ],
    answerIndex: 0,
    explanation: 'Design and Transition ensures products and services meet stakeholder expectations and can be delivered effectively.',
    topic: 'Service Value Chain'
  },
  {
    id: 17,
    prompt: 'Which value chain activity ensures service components are available when and where needed?',
    options: [
      'Obtain or Build',
      'Deliver and Support',
      'Engage',
      'Plan'
    ],
    answerIndex: 0,
    explanation: 'Obtain or Build ensures that components and resources meet agreed specifications.',
    topic: 'Service Value Chain'
  },
  {
    id: 18,
    prompt: 'Which value chain activity ensures that services are delivered and supported according to agreed specifications and expectations?',
    options: [
      'Deliver and Support',
      'Engage',
      'Obtain or Build',
      'Improve'
    ],
    answerIndex: 0,
    explanation: 'Deliver and Support manages ongoing delivery and support of services.',
    topic: 'Service Value Chain'
  },
  {
    id: 19,
    prompt: 'Which value chain activity ensures continual improvement of products, services, and practices?',
    options: [
      'Improve',
      'Plan',
      'Engage',
      'Design and Transition'
    ],
    answerIndex: 0,
    explanation: 'The Improve activity ensures that continual improvement is applied to all activities and services.',
    topic: 'Service Value Chain'
  },

  // --- Governance & Continual Improvement ---
  {
    id: 20,
    prompt: 'What is governance in the context of the SVS?',
    options: [
      'The means by which an organisation is directed and controlled',
      'The operational management of services',
      'The measurement of service performance',
      'The process of change authorisation'
    ],
    answerIndex: 0,
    explanation: 'Governance refers to how the organisation is directed and controlled to achieve its objectives.',
    topic: 'Governance'
  },
  {
    id: 21,
    prompt: 'Which question is part of the Continual Improvement model?',
    options: [
      'Where are we now?',
      'Who is responsible for this process?',
      'What is the cost of change?',
      'Which supplier provides the service?'
    ],
    answerIndex: 0,
    explanation: 'The Continual Improvement model includes “Where are we now?” as one of its seven guiding questions.',
    topic: 'Continual Improvement'
  },

  // --- Value Concepts ---
  {
    id: 22,
    prompt: 'What is value?',
    options: [
      'The perceived benefits, usefulness, and importance of something',
      'A measurable output of a service',
      'A specific configuration of resources',
      'A contractual obligation between provider and consumer'
    ],
    answerIndex: 0,
    explanation: 'Value is defined as the perceived benefits, usefulness, and importance of something.',
    topic: 'Value'
  },
  {
    id: 23,
    prompt: 'What does “utility” describe?',
    options: [
      'The functionality offered by a product or service to meet a particular need',
      'The assurance that a service will meet agreed requirements',
      'The cost of providing the service',
      'The performance of the supplier'
    ],
    answerIndex: 0,
    explanation: 'Utility is “fit for purpose” – what the service does to meet a need.',
    topic: 'Value'
  },
  {
    id: 24,
    prompt: 'What does “warranty” describe?',
    options: [
      'The assurance that a service will meet agreed requirements for availability, capacity, continuity, and security',
      'The functionality offered by a service',
      'The value perceived by the customer',
      'The overall cost of ownership'
    ],
    answerIndex: 0,
    explanation: 'Warranty is “fit for use” – how the service performs to meet agreed requirements.',
    topic: 'Value'
  },
  {
    id: 25,
    prompt: 'What is a service relationship?',
    options: [
      'A co-operative connection between a service provider and a service consumer',
      'A contractual agreement between two suppliers',
      'A technical interface between systems',
      'An informal partnership between departments'
    ],
    answerIndex: 0,
    explanation: 'A service relationship exists between provider and consumer through service offering, consumption, and provision.',
    topic: 'Value'
  },

  // --- Practices (Foundation-level) ---
  {
    id: 26,
    prompt: 'What is the purpose of the Incident Management practice?',
    options: [
      'To minimise the negative impact of incidents by restoring normal service operation as quickly as possible',
      'To authorise and schedule changes',
      'To identify the root cause of recurring incidents',
      'To ensure supplier performance is monitored'
    ],
    answerIndex: 0,
    explanation: 'Incident Management focuses on rapid restoration to reduce business impact.',
    topic: 'Practices'
  },
  {
    id: 27,
    prompt: 'What is the purpose of the Problem Management practice?',
    options: [
      'To reduce the likelihood and impact of incidents by identifying actual and potential causes',
      'To handle user service requests',
      'To ensure agreed service levels are met',
      'To deploy changes to live environments'
    ],
    answerIndex: 0,
    explanation: 'Problem Management aims to identify and control the causes of incidents.',
    topic: 'Practices'
  },
  {
    id: 28,
    prompt: 'What is the purpose of the Change Enablement practice?',
    options: [
      'To maximise the number of successful changes by ensuring risks are properly assessed and authorised',
      'To eliminate all change-related risk',
      'To manage financial approval of budgets',
      'To record incidents and service requests'
    ],
    answerIndex: 0,
    explanation: 'Change Enablement balances the need for change with the need to manage risk effectively.',
    topic: 'Practices'
  },
  {
    id: 29,
    prompt: 'Which practice makes new or changed services and features available for use?',
    options: [
      'Release Management',
      'Deployment Management',
      'Change Enablement',
      'Service Request Management'
    ],
    answerIndex: 0,
    explanation: 'Release Management ensures new and changed services are made available for use.',
    topic: 'Practices'
  },
  {
    id: 30,
    prompt: 'Which practice moves new or changed components to live environments?',
    options: [
      'Deployment Management',
      'Release Management',
      'Incident Management',
      'Problem Management'
    ],
    answerIndex: 0,
    explanation: 'Deployment Management moves service components to live or target environments.',
    topic: 'Practices'
  },
  {
    id: 31,
    prompt: 'What is the purpose of Service Request Management?',
    options: [
      'To support the agreed quality of a service by handling pre-defined, user-initiated service requests',
      'To provide a single point of contact for users',
      'To investigate the root cause of incidents',
      'To deploy authorised changes'
    ],
    answerIndex: 0,
    explanation: 'Service Request Management efficiently handles standard user requests such as password resets or information queries.',
    topic: 'Practices'
  },
  {
    id: 32,
    prompt: 'Which practice sets clear, business-based targets for service performance?',
    options: [
      'Service Level Management',
      'Problem Management',
      'Change Enablement',
      'Incident Management'
    ],
    answerIndex: 0,
    explanation: 'Service Level Management ensures services are delivered to agreed performance targets.',
    topic: 'Practices'
  },
  {
    id: 33,
    prompt: 'Which practice ensures that the organisation’s assets are managed throughout their lifecycle?',
    options: [
      'IT Asset Management',
      'Service Level Management',
      'Deployment Management',
      'Monitoring and Event Management'
    ],
    answerIndex: 0,
    explanation: 'IT Asset Management tracks and manages IT assets to maximise value and control costs and risks.',
    topic: 'Practices'
  },
  {
    id: 34,
    prompt: 'Which practice is responsible for observing services and components and recording selected changes of state?',
    options: [
      'Monitoring and Event Management',
      'Incident Management',
      'Change Enablement',
      'Service Desk'
    ],
    answerIndex: 0,
    explanation: 'Monitoring and Event Management detects and interprets events to maintain normal service operation.',
    topic: 'Practices'
  },
  {
    id: 35,
    prompt: 'What is the purpose of the Continual Improvement practice?',
    options: [
      'To align the organisation’s practices and services with changing business needs through ongoing improvement',
      'To identify and manage service incidents',
      'To approve new service designs',
      'To monitor supplier performance'
    ],
    answerIndex: 0,
    explanation: 'Continual Improvement ensures that services and practices remain aligned with evolving needs.',
    topic: 'Practices'
  },
  {
    id: 36,
    prompt: 'Which practice provides a clear route for users to report issues, queries, and requests?',
    options: [
      'Service Desk',
      'Incident Management',
      'Problem Management',
      'Change Enablement'
    ],
    answerIndex: 0,
    explanation: 'The Service Desk acts as a single point of contact between the service provider and users.',
    topic: 'Practices'
  },
  {
    id: 37,
    prompt: 'Which practice ensures that suppliers and their performances are managed appropriately to support service provision?',
    options: [
      'Supplier Management',
      'Relationship Management',
      'Service Level Management',
      'IT Asset Management'
    ],
    answerIndex: 0,
    explanation: 'Supplier Management ensures supplier performance supports agreed service levels and objectives.',
    topic: 'Practices'
  },
  {
    id: 38,
    prompt: 'Which practice ensures positive relationships with stakeholders at strategic and tactical levels?',
    options: [
      'Relationship Management',
      'Service Desk',
      'Change Enablement',
      'Supplier Management'
    ],
    answerIndex: 0,
    explanation: 'Relationship Management maintains effective relationships between the organisation and its stakeholders.',
    topic: 'Practices'
  },
  {
    id: 39,
    prompt: 'Which practice protects the information needed by the organisation to conduct its business?',
    options: [
      'Information Security Management',
      'Change Enablement',
      'Continual Improvement',
      'IT Asset Management'
    ],
    answerIndex: 0,
    explanation: 'Information Security Management protects information’s confidentiality, integrity, and availability.',
    topic: 'Practices'
  },
];
