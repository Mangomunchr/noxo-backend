function getRoleList() {
  return [
    { id: 'r1', name: 'Renderling', threshold: 0 },
    { id: 'r2', name: 'Rendar', threshold: 100 },
    { id: 'r3', name: 'NodeMonk', threshold: 500 },
    { id: 'r4', name: 'Mythic', threshold: 1000 }
  ];
}

module.exports = { getRoleList };