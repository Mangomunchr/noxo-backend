const summonMatrix = {
  mode: "Swarm-2x",
  burst: "Overload I",
  activeNodes: [
    { nodeName: "NodeMonkX", status: "Linked" },
    { nodeName: "Renderling42", status: "Linking" },
    { nodeName: "VaultGhost", status: "Anchored" }
  ]
};

function getSummonMatrix() {
  return summonMatrix;
}

module.exports = { getSummonMatrix };