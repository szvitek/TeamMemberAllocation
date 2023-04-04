import { useState } from 'react';

const GroupedTeamMembers = ({ employees, selectedTeam, setSelectedTeam }) => {
  function groupTeamMembers() {
    const teams = [];

    const teamNames = Array.from(new Set(employees.map((e) => e.teamName)));

    teamNames.forEach((teamName) => {
      const teamMembers = employees.filter(
        (employee) => employee.teamName === teamName
      );
      teams.push({
        team: teamName,
        members: teamMembers,
        collapsed: selectedTeam === teamName ? false : true,
      });
    });
    return teams;
  }

  const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers());

  function handleTeamClick(event) {
    const transformedGroupData = groupedEmployees.map((groupedData) =>
      groupedData.team === event.currentTarget.id
        ? { ...groupedData, collapsed: !groupedData.collapsed }
        : groupedData
    );
    setGroupedEmployees(transformedGroupData);
    setSelectedTeam(event.currentTarget.id);
  }

  return (
    <main className="container">
      {groupedEmployees.map((item) => (
        <div
          key={item.team}
          className="card mt-2"
          style={{ cursor: 'pointer' }}
        >
          <h4
            id={item.team}
            className="card-header text-secondary bg-white"
            onClick={handleTeamClick}
          >
            Team Name: {item.team}
          </h4>
          <div
            id={`collapse_${item.team}`}
            className={item.collapsed === true ? 'collapse' : ''}
          >
            <hr />
            {item.members.map((member) => (
              <div key={member.id} className="mt-2">
                <h2 className="card-title mt-2">
                  <span className="text-dark">Full Name: </span>{' '}
                  {member.fullName}
                </h2>
                <p>Designation: {member.designation}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
};

export default GroupedTeamMembers;
