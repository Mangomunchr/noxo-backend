const rankPerks = [
  { rank: "Renderling", perk: "Basic vault access" },
  { rank: "Rendar", perk: "+10% XP on all rituals" },
  { rank: "NodeMonk", perk: "Unlock Chaos Button rituals" },
  { rank: "Ascended", perk: "+1 Mango War vote weight" },
  { rank: "Mythic", perk: "Summon 2x speed, double vault power" }
];

function getRankPerks() {
  return rankPerks;
}

module.exports = { getRankPerks };