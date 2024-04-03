import React from 'react';
import AgentCard from './AgentCards.jsx';

export default function AppointmentAgent() {
  // Sample agent data
  const agent1 = {
    initials: 'J',
    name: 'Jacab Smith',
    date: 'September 14, 2016',
    image: '/path/to/agent1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac metus eros.',
  };

  const agent2 = {
    initials: 'S',
    name: 'Sam Anderson',
    date: 'September 15, 2016',
    image: '/path/to/agent2.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac metus eros.',
  };

  const agent3 = {
    initials: 'Z',
    name: 'Zoe Holland',
    date: 'September 15, 2016',
    image: '/path/to/agent3.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac metus eros.',
  };

  const agent4 = {
    initials: 'N',
    name: 'Nick Adams',
    date: 'September 15, 2016',
    image: '/path/to/agent4.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac metus eros.',
  };

  const agent5 = {
    initials: 'V',
    name: 'Vector Cruz',
    date: 'September 15, 2016',
    image: '/path/to/agent5.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac metus eros.',
  };

  const agent6 = {
    initials: 'K',
    name: 'Kane Dennis',
    date: 'September 15, 2016',
    image: '/path/to/agent6.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac metus eros.',
  };

  return (
    <div style={{ padding: '20px', backgroundColor: 'black' }}>
      <div className='w-full p-4' style={{ height: '700px', borderTopLeftRadius: '30px', borderTopRightRadius: '30px', borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
        <div className="max-w-full mx-auto flex flex-wrap justify-center"> {/* Flex container */}
          {/* Agent 1 */}
          <AgentCard
            agentData={agent1}
          />
          {/* Agent 2 */}
          <AgentCard
            agentData={agent2}
          />
          {/* Agent 3 */}
          <AgentCard
            agentData={agent3}
          />
          {/* Agent 4 */}
          <AgentCard
            agentData={agent4}
          />
          {/* Agent 5 */}
          <AgentCard
            agentData={agent5}
          />
          {/* Agent 6 */}
          <AgentCard
            agentData={agent6}
          />
        </div>
      </div>
    </div>
  );
}
