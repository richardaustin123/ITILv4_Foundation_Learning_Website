export type Flashcard = {
  id: number;
  front: string; // question/term
  back: string;  // answer/definition
  topic?: string;
};

export const FLASHCARDS: Flashcard[] = [
  // --- Service Value System (SVS) ---
  { id: 1, front: 'Service Value System (SVS)', back: 'Describes how all the components and activities of an organisation work together as a system to enable value creation.', topic: 'SVS' },
  { id: 2, front: 'Components of the SVS', back: 'Guiding principles, governance, service value chain, practices, and continual improvement.', topic: 'SVS' },
  { id: 3, front: 'Purpose of the SVS', back: 'To ensure the organisation continually co-creates value with all stakeholders through the use and management of products and services.', topic: 'SVS' },
  { id: 4, front: 'Opportunity and Demand', back: 'Inputs to the SVS which represent potential value creation and triggers for the service value chain.', topic: 'SVS' },
  { id: 5, front: 'Value', back: 'The perceived benefits, usefulness, and importance of something.', topic: 'SVS' },

  // --- Service Value Chain ---
  { id: 10, front: 'Service Value Chain', back: 'A set of interconnected activities that an organisation performs to deliver a valuable product or service to its consumers and facilitate value realisation.', topic: 'Service Value Chain' },
  { id: 11, front: 'Plan', back: 'Ensures a shared understanding of the vision, current status, and improvement direction for all four dimensions and all products and services.', topic: 'Service Value Chain' },
  { id: 12, front: 'Improve', back: 'Ensures continual improvement of products, services, and practices across all value chain activities.', topic: 'Service Value Chain' },
  { id: 13, front: 'Engage', back: 'Provides a good understanding of stakeholder needs, transparency, and continual engagement and feedback.', topic: 'Service Value Chain' },
  { id: 14, front: 'Design and Transition', back: 'Ensures products and services continually meet stakeholder expectations for quality, cost, and time to market.', topic: 'Service Value Chain' },
  { id: 15, front: 'Obtain or Build', back: 'Ensures that service components are available when and where needed, and meet agreed specifications.', topic: 'Service Value Chain' },
  { id: 16, front: 'Deliver and Support', back: 'Ensures that services are delivered and supported according to agreed specifications and stakeholder expectations.', topic: 'Service Value Chain' },

  // --- Four Dimensions of Service Management ---
  { id: 20, front: 'Four Dimensions of Service Management', back: 'Organisations and People; Information and Technology; Partners and Suppliers; Value Streams and Processes.', topic: 'Dimensions' },
  { id: 21, front: 'Organisations and People', back: 'Covers roles, responsibilities, culture, and communication required for value creation.', topic: 'Dimensions' },
  { id: 22, front: 'Information and Technology', back: 'Includes information, knowledge, and technologies required for the management of services.', topic: 'Dimensions' },
  { id: 23, front: 'Partners and Suppliers', back: 'Covers relationships with third parties involved in the design, delivery, support, and improvement of services.', topic: 'Dimensions' },
  { id: 24, front: 'Value Streams and Processes', back: 'Defines how the various parts of the organisation work together in an integrated and coordinated way to enable value creation.', topic: 'Dimensions' },

  // --- Guiding Principles ---
  { id: 30, front: 'Guiding Principles', back: 'Recommendations that guide an organisation in all circumstances, regardless of changes in its goals, strategies, or management structure.', topic: 'Guiding Principles' },
  { id: 31, front: 'Focus on value', back: 'Everything the organisation does should link directly or indirectly to value for stakeholders.', topic: 'Guiding Principles' },
  { id: 32, front: 'Start where you are', back: 'Assess the current state objectively and use what already exists to the best advantage.', topic: 'Guiding Principles' },
  { id: 33, front: 'Progress iteratively with feedback', back: 'Work in small, manageable increments and build on feedback before proceeding.', topic: 'Guiding Principles' },
  { id: 34, front: 'Collaborate and promote visibility', back: 'Work together across boundaries and make activities and results visible to improve trust and communication.', topic: 'Guiding Principles' },
  { id: 35, front: 'Think and work holistically', back: 'Recognise that all parts of an organisation work together as a system to create value.', topic: 'Guiding Principles' },
  { id: 36, front: 'Keep it simple and practical', back: 'Always use the minimum number of steps needed to achieve an objective.', topic: 'Guiding Principles' },
  { id: 37, front: 'Optimise and automate', back: 'Maximise the value of human and technical resources by optimising processes and automating where possible.', topic: 'Guiding Principles' },

  // --- Governance and Continual Improvement ---
  { id: 40, front: 'Governance', back: 'The means by which an organisation is directed and controlled.', topic: 'Governance' },
  { id: 41, front: 'Continual Improvement', back: 'A recurring organisational activity performed at all levels to ensure performance continually meets stakeholders’ expectations.', topic: 'Continual Improvement' },
  { id: 42, front: 'Continual Improvement Model', back: 'A structured approach to identifying and implementing improvements, consisting of seven steps: What is the vision? Where are we now? Where do we want to be? How do we get there? Take action; Did we get there? How do we keep the momentum going?', topic: 'Continual Improvement' },

  // --- Value Concepts ---
  { id: 50, front: 'Value Co-creation', back: 'Joint activities performed by a service provider and a service consumer to create value.', topic: 'Value' },
  { id: 51, front: 'Utility', back: '“Fit for purpose” – what the service does; the functionality offered to meet a need.', topic: 'Value' },
  { id: 52, front: 'Warranty', back: '“Fit for use” – how the service performs, covering availability, capacity, continuity, and security.', topic: 'Value' },
  { id: 53, front: 'Service Relationship', back: 'A co-operative connection between a service provider and a service consumer.', topic: 'Value' },
  { id: 54, front: 'Service Offering', back: 'A formal description of one or more services designed to address the needs of a target consumer group.', topic: 'Value' },

  // --- Key Practices (from ITIL 4 Foundation syllabus) ---
  { id: 60, front: 'Change Enablement', back: 'Ensures that risks are properly assessed, authorises changes to proceed, and manages the change schedule to maximise successful changes.', topic: 'Practices' },
  { id: 61, front: 'Incident Management', back: 'Minimises the negative impact of incidents by restoring normal service operation as quickly as possible.', topic: 'Practices' },
  { id: 62, front: 'Problem Management', back: 'Reduces the likelihood and impact of incidents by identifying actual and potential causes and managing workarounds.', topic: 'Practices' },
  { id: 63, front: 'Service Request Management', back: 'Supports the agreed quality of a service by handling pre-defined, user-initiated service requests effectively.', topic: 'Practices' },
  { id: 64, front: 'Service Level Management', back: 'Sets clear, business-based targets for service performance and ensures delivery and measurement against these targets.', topic: 'Practices' },
  { id: 65, front: 'Release Management', back: 'Makes new and changed services and features available for use in line with stakeholder expectations.', topic: 'Practices' },
  { id: 66, front: 'Deployment Management', back: 'Moves new or changed components to live environments or other target environments.', topic: 'Practices' },
  { id: 67, front: 'IT Asset Management', back: 'Plans and manages the full lifecycle of all IT assets to maximise value, control costs, manage risks, and support decision-making.', topic: 'Practices' },
  { id: 68, front: 'Monitoring and Event Management', back: 'Observes services and components, records and reports selected changes of state as events, and determines appropriate responses.', topic: 'Practices' },
  { id: 69, front: 'Continual Improvement Practice', back: 'Ensures that the organisation’s practices and services are aligned with changing business needs through ongoing improvement.', topic: 'Practices' },
];