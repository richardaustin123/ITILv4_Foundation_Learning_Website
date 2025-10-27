export type Flashcard = {
  id: number;
  front: string; // question/term
  back: string; // answer/definition
  topic?: string;
};

export const FLASHCARDS: Flashcard[] = [
  // SVS
  { id: 1, front: 'Service Value System (SVS)', back: 'Shows how all components and activities of the organization work together to facilitate value creation.', topic: 'SVS' },
  { id: 2, front: 'Service Value Chain', back: 'A set of interconnected activities that an organization performs to deliver a valuable product or service to its consumers.', topic: 'SVS' },
  { id: 3, front: 'Continual Improvement', back: 'A recurring organizational activity performed at all levels to ensure performance continually meets stakeholders’ expectations.', topic: 'SVS' },

  // Dimensions
  { id: 10, front: 'Four Dimensions', back: 'Organizations and People; Information and Technology; Partners and Suppliers; Value Streams and Processes.', topic: 'Dimensions' },
  { id: 11, front: 'Value Streams and Processes', back: 'How the parts of the organization work in an integrated and coordinated way to enable value creation.', topic: 'Dimensions' },

  // Guiding Principles
  { id: 20, front: 'Focus on value', back: 'Everything the organization does should link back to value for stakeholders.', topic: 'Guiding Principles' },
  { id: 21, front: 'Start where you are', back: 'Assess the current state and reuse what is useful; do not start from scratch.', topic: 'Guiding Principles' },
  { id: 22, front: 'Progress iteratively with feedback', back: 'Work in smaller, manageable sections and get feedback frequently.', topic: 'Guiding Principles' },
  { id: 23, front: 'Collaborate and promote visibility', back: 'Work together across boundaries and make work transparent.', topic: 'Guiding Principles' },
  { id: 24, front: 'Think and work holistically', back: 'Recognize the complexity of systems and the need for end-to-end visibility.', topic: 'Guiding Principles' },
  { id: 25, front: 'Keep it simple and practical', back: 'If a process, service, action or metric provides no value or useful outcome, eliminate it.', topic: 'Guiding Principles' },
  { id: 26, front: 'Optimize and automate', back: 'Maximize the value of the work carried out by human and technical resources.', topic: 'Guiding Principles' },

  // Practices (examples)
  { id: 30, front: 'Incident Management', back: 'Minimize negative impact by restoring service operation as quickly as possible.', topic: 'Practices' },
  { id: 31, front: 'Problem Management', back: 'Reduce likelihood and impact of incidents by identifying causes and workarounds.', topic: 'Practices' },
  { id: 32, front: 'Change Enablement', back: 'Maximize successful changes by properly assessing and authorizing them.', topic: 'Practices' },
  { id: 33, front: 'Release Management', back: 'Make new and changed services and features available for use.', topic: 'Practices' },
  { id: 34, front: 'Deployment Management', back: 'Move new or changed components to live or other target environments.', topic: 'Practices' },
  { id: 35, front: 'Service Request Management', back: 'Handle pre-defined, user-initiated service requests.', topic: 'Practices' },
  { id: 36, front: 'Service Level Management', back: 'Set clear business-based targets and ensure delivery and measurement.', topic: 'Practices' },
  { id: 37, front: 'IT Asset Management', back: 'Plan and manage the full lifecycle of all IT assets.', topic: 'Practices' },

  // Value concepts
  { id: 40, front: 'Utility', back: 'Fit for purpose – what the service does.', topic: 'Value' },
  { id: 41, front: 'Warranty', back: 'Fit for use – how the service performs (availability, capacity, continuity, security).', topic: 'Value' },
];
