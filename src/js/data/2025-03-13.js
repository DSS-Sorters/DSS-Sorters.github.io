dataSetVersion = "2021-05-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Servant Class",
    key: "class",
    tooltip: "Check this to restrict to certain servant classes.",
    checked: true,
    sub: [
      { name: "Saber", tooltip: "filter Saber-Class Servants", key: "saber" },
      { name: "Archer", tooltip: "filter Archer-Class Servants", key: "archer" },
      { name: "Lancer", tooltip: "filter Lancer-Class Servants", key: "lancer" },
      { name: "Rider", tooltip: "filter Rider-Class Servants", key: "rider" },
      { name: "Caster", tooltip: "filter Caster-Class Servants", key: "caster" },
      { name: "Assassin", tooltip: "filter Assassin-Class Servants", key: "assassin" },
      { name: "Berserker", tooltip: "filter Berserker-Class Servants", key: "berserker" },
      { name: "Ruler", tooltip: "filter Ruler-Class Servants", key: "ruler" },
      { name: "Avenger", tooltip: "filter Avenger-Class Servants", key: "avenger" },
      { name: "Moon Cancer", tooltip: "filter Moon Cancer-Class Servants", key: "mooncancer" },
      { name: "Alter Ego", tooltip: "filter Alter Ego-Class Servants", key: "alterego" },
      { name: "Foreigner", tooltip: "filter Foreigner-Class Servants", key: "foreigner" },
      { name: "Pretender", tooltip: "filter Pretender-Class Servants", key: "pretender" },
      { name: "Shielder", tooltip: "filter Mash (lol)", key: "shielder" },
      { name: "Beast", tooltip: "filter Beast-Class Servants", key: "beast" },
    ]
  },
  {
    name: "Filter by Gender",
    key: "gender",
    tooltip: "Check this to restrict to characters based on gender.",
    checked: false,
    sub: [ { name: "Male", key: "m" }, { name: "Female", key: "f" }, { name: "Unknown", key: "u" },
    ]
  },
  {
    name: "Filter by Rarity",
    key: "rarity",
    tooltip: "Check this to restrict to characters of that rarity.",
    checked: false,
    sub: [ { name: "5-star", key: "5" }, { name: "4-star", key: "4" }, { name: "3-star", key: "3" }, { name: "2-star", key: "2" }, { name: "1-star", key: "1" }, { name: "0-star", tooltip: "Literally just Angra Mainyu", key: "0" },
    ]
  },
  {
    name: "Filter by \"-face\"",
    key: "face",
    tooltip: "Check this to restrict to saber/sakura/rin faces.",
    checked: false,
    sub: [
      { name: "Saber-face", tooltip: "filter to Saber-face Servants", key: "saber" },
      { name: "Sakura-face", tooltip: "filter to Sakura-face Servants", key: "sakura" },
      { name: "Rin-face", tooltip: "filter Rin-face Servants", key: "rin" },
    ]
  },
  {
    name: "Additional Filters:",
    key: "extra",
    tooltip: "Check this to restrict the pool to only servants given as event rewards.",
    checked: false,
    sub: [
      { name: "Welfare", tooltip: "filter to event-reward Servants", key: "welfare" },
      { name: "Summer", tooltip: "filter to summer-event Servants", key: "summer" },
      { name: "Christmas", tooltip: "filter to christmas-event Servants", key: "santa" },
      { name: "Arcade", tooltip: "filter to arcade-only Servants (Requires JP Servants to be allowed)", key: "arcade" },
    ]
  },
  {
    name: "No Altnerate Costume Servants",
    key: "alt",
    tooltip: "Check to enable the appearance of seasonal character alts. This does not include Alter servants.",
    checked: false,
  },
  {
    name: "No paired Servants",
    key: "pair",
    tooltip: "Check to remove paired servants (i.e Dioscuri, Trung Sisters, etc.). Use this if you plan to rank the individual characters in a pair.",
    checked: false,
  },
  {
    name: "No individual paired Servants",
    key: "indi",
    tooltip: "Check to remove individuals from paired servants (i.e Dioscuri, Trung Sisters, etc.). Use this if you plan to rank them as a pair",
    checked: true,
  },
  {
    name: "No Child Servants",
    key: "age",
    tooltip: "Check to remove child servants",
    checked: false,
  },
  {
    name: "Remove Costume-form Characters",
    key: "costume",
    tooltip: "Check to remove \"costume\" and \"Ascension\" alt-characters (i.e Summer Valkyries, Kama, Male Summer alts, etc.)",
    checked: false,
  },
  {
    name: "Remove NPC-only Servants",
    key: "npc",
    tooltip: "Check this to remove any non-playable servant.",
    checked: true,
  },

  {
    name: "Exclude Non-Global Servants",
    key: "jp",
    tooltip: "Check this to disable servants that have not yet been released globally.",
    checked: true,
  },
  {
    name: "Exclude Arcade Only servants",
    key: "arcade",
    tooltip: "Check this to exclude servants that have only been released in FGO Arcade.",
    checked: true,
  },
  {
    name: "Exclude Non-Fate Collab Servants",
    key: "collab",
    tooltip: "Check this to exclude servants that are collabs with other Type-Moon Media.",
    checked: false,
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Mashu Kyrielight",
    img: "263rQ3H.png",
    opts: {
      class: [ "shielder"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Artoria Pendragon",
    img: "T8Z53Yx.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
    }
  },
  {
    name: "Artoria Pendragon (Alter) (Saber)",
    img: "DjvgpaS.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
    }
  },

  {
    name: "Artoria Pendragon (Lily)",
    img: "GUsWiDk.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      extra: ["welfare"],
    },
  },
  {
    name: "Nero Claudius (Saber)",
    img: "T4W1coQ.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
    }
  },
  {
    name: "Siegfried",
    img: "BualUQf.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"]
    }
  },
  {
    name: "Gaius Julius Caesar",
    img: "lVWFb60.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["3"]
    }
  },
  {
    name: "Altera",
    img: "klGutPM.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"]
    }
  },
  {
    name: "Gilles de Rais (Saber)",
    img: "3Gndfd1.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["3"]
    }
  },
  {
    name: "Chevalier d'Eon",
    img: "AfbeJDl.png",
    opts: {
      class: [ "saber"],
      gender: ["u"],
      rarity: ["4"]
    }
  },
  {
    name: "EMIYA (Archer)",
    img: "ybwqh7H.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["4"]
    }
  },
  {
    name: "Gilgamesh",
    img: "sCAt623.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["5"]
    }
  },
  {
    name: "Robin Hood",
    img: "244xRO0.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["3"]
    }
  },
  {
    name: "Atalante",
    img: "QDYc6Xk.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"]
    }
  },
  {
    name: "Euryale",
    img: "1LxMt5j.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["3"]
    }
  },
  {
    name: "Arash",
    img: "NCVvMEu.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["1"]
    }
  },
  {
    name: "Cú Chulainn (Lancer)",
    img: "Zs4acYt.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["3"]
    }
  },
  {
    name: "Elizabeth Báthory (Lancer)",
    img: "dzUFvfx.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"]
    }
  },
  {
    name: "Musashibō Benkei",
    img: "jrxlwkq.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["2"]
    }
  },
  {
    name: "Cú Chulainn (Prototype)",
    img: "dSWFTSW.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["3"]
    }
  },
  {
    name: "Leonidas I",
    img: "5sAdhZh.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["2"]
    }
  },
  {
    name: "Romulus",
    img: "8b1KSj2.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["3"]
    }
  },
  {
    name: "Medusa (Rider)",
    img: "h7imiaY.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["3"]
    }
  },
  {
    name: "Georgios",
    img: "Q4arUK5.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["2"]
    }
  },
  {
    name: "Edward Teach",
    img: "gg8L47W.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["2"]
    }
  },
  {
    name: "Boudica",
    img: "LzJL6l7.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["3"]
    }
  },
  {
    name: "Ushiwakamaru (Rider)",
    img: "DXfMcny.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["3"]
    }
  },
  {
    name: "Alexander",
    img: "yc8nZTj.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["3"]
    }
  },
  {
    name: "Marie Antoinette (Rider)",
    img: "1fC7T95.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"]
    }
  },
  {
    name: "Martha (Rider)",
    img: "kIQGkLA.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"]
    }
  },
  {
    name: "Medea",
    img: "yyRCx1I.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["3"]
    }
  },
  {
    name: "Gilles de Rais (Caster)",
    img: "Fk3HSbG.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["3"]
    }
  },
  {
    name: "Hans Christian Andersen",
    img: "XeLutgq.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["2"],
      age: true
    }
  },
  {
    name: "William Shakespeare",
    img: "SAY99Cw.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["2"]
    }
  },
  {
    name: "Mephistopheles",
    img: "v5rByr3.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["3"]
    }
  },
  {
    name: "Wolfgang Amadeus Mozart",
    img: "TAm8bgF.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["1"]
    }
  },
  {
    name: "Zhuge Liang (Lord El-Melloi II)",
    img: "ymrSoJZ.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["5"]
    }
  },
  {
    name: "Cú Chulainn (Caster)",
    img: "wDrVzlu.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["3"]
    }
  },
  {
    name: "Sasaki Kojirō",
    img: "RxJASUV.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["1"]
    }
  },
  {
    name: "Hassan of the Cursed Arm",
    img: "CqZI6Ar.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["2"]
    }
  },
  {
    name: "Stheno",
    img: "hzD2URE.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"]
    }
  },
  {
    name: "Jing Ke",
    img: "w2sImYz.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["3"]
    }
  },
  {
    name: "Charles-Henri Sanson",
    img: "RCNh7DL.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["2"]
    }
  },
  {
    name: "Phantom of the Opera",
    img: "qMabSL9.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["2"]
    }
  },
  {
    name: "Mata Hari",
    img: "4v2gtic.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["1"]
    }
  },
  {
    name: "Carmilla (Assassin)",
    img: "hEC7fcy.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"]
    }
  },
  {
    name: "Heracles",
    img: "RTpDylu.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["4"]
    }
  },
  {
    name: "Lancelot (Berserker)",
    img: "BMA3vJi.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["4"]
    }
  },
  {
    name: "Lu Bu Fengxian",
    img: "uEIIPYH.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["3"]
    }
  },
  {
    name: "Spartacus",
    img: "23wCjJY.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["1"]
    }
  },
  {
    name: "Sakata Kintoki (Berserker)",
    img: "ryrIER8.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["5"]
    }
  },
  {
    name: "Vlad III",
    img: "yQ0isLm.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["5"]
    }
  },
  {
    name: "Asterios",
    img: "RO3ZZxv.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["1"],
      age: true,
    }
  },
  {
    name: "Caligula",
    img: "9mboXLY.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["2"],
    }
  },
  {
    name: "Darius_III",
    img: "FmTLo8i.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["3"],
    }
  },
  {
    name: "Kiyohime (Berserker)",
    img: "VgoVOkV.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["3"],
      age: true,
    }
  },
  {
    name: "Eric Bloodaxe",
    img: "s06C8bX.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["2"],
    }
  },
  {
    name: "Tamamo Cat",
    img: "a6UqpuF.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Jeanne d'Arc (Ruler)",
    img: "0uZWaQp.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
    }
  },
  {
    name: "Orion",
    img: "DBvrndw.png",
    opts: {
      class: [ "archer"],
      gender: ["m","f"],
      rarity: ["5"],
    }
  },
  {
    name: "Elizabeth Báthory (Halloween)",
    img: "yO4DIjt.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
      alt: true,
    }
  },
  {
    name: "Tamamo no Mae (Caster)",
    img: "Pop018T.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "David",
    img: "DlOuQ7i.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["3"],
    }
  },
  {
    name: "Hector",
    img: "PN6xknP.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["3"],
    }
  },
  {
    name: "Francis Drake",
    img: "rVIEoSG.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Anne Bonny & Mary Read (Rider)",
    img: "MA2337r.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      pair: true,
    }
  },
  {
    name: "Anne Bonny (Rider)",
    img: "Xkx1GhI.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      indi: true,
    }
  },
  {
    name: "Mary Reed (Rider)",
    img: "O7Qm9WO.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      indi: true,
    }
  },
  {
    name: "Medea (Lily)",
    img: "d2a3sRP.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Okita Sōji (Saber)",
    img: "ggs3E0z.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
    }
  },
  {
    name: "Oda Nobunaga (Archer)",
    img: "e4SEl5L.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
    }
  },
  {
    name: "Scáthach (Lancer)",
    img: "qznwS0l.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Diarmuid Ua Duibhne (Lancer)",
    img: "giUIIgR.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["3"],
    }
  },
  {
    name: "Fergus mac Róich",
    img: "877GXpd.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["3"],
    }
  },
  {
    name: "Artoria Pendragon (Santa Alter)",
    img: "AKCwJOJ.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      extra: ["welfare", "santa"],
      alt: true,
    }
  },
  {
    name: "Nursery Rhyme",
    img: "hQX5nns.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      age: true,
    }
  },
  {
    name: "Jack the Ripper",
    img: "bMjYjMg.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["5"],
      age: true,
    }
  },
  {
    name: "Mordred (Saber)",
    img: "PvP6e0o.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
    }
  },
  {
    name: "Nikola Tesla",
    img: "cVlDThX.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Artoria Pendragon (Alter) (Lancer)",
    img: "LXcIR3l.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
    }
  },
  {
    name: "Paracelsus von Hohenheim",
    img: "efDnRsq.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["3"],
    }
  },
  {
    name: "Charles Babbage",
    img: "H2CdELu.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["3"],
    }
  },
  {
    name: "Henry Jekyll & Hyde",
    img: "sFuuR3K.png",
    opts: {
      class: [ "assassin", "berserker"],
      gender: ["m"],
      rarity: ["3"],
    }
  },
  {
    name: "Frankenstein",
    img: "jd1aesJ.png",
    opts: {
      class: [ "berseker"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Solomon (False)",
    img: "DlpVPgE.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["5"],
      npc: true
    }
  },
  {
    name: "Arjuna",
    img: "CgfnXh6.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Karna",
    img: "T67ETRw.jpg",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Mysterious Heroine X",
    img: "BQbamLJ.jpg",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
    }
  },
  {
    name: "Fionn mac Cumhaill",
    img: "nRcRnDK.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["4"],
    }
  },
  {
    name: "Brynhildr (Lancer)",
    img: "0KCoezG.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Beowulf",
    img: "NJAHiBj.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["4"],
    }
  },
  {
    name: "Nero Claudius (Bride)",
    img: "PkZ4yjI.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      alt: true,
    }
  },
  {
    name: "Ryōgi Shiki (Saber)",
    img: "U1awpr6.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      collab: true,
    }
  },
  {
    name: "Ryōgi Shiki (Assassin)",
    img: "qGYda76.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
      alt: true,
      collab: true,
    }
  },
  {
    name: "Amakusa Shirō",
    img: "gEuXEUm.png",
    opts: {
      class: [ "ruler"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Astolfo (Rider)",
    img: "JkGBHBG.png",
    opts: {
      class: [ "rider"],
      gender: ["m", "u"],
      rarity: ["4"],
    }
  },
  {
    name: "Gilgamesh (Child)",
    img: "QkPoWHZ.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["3"],
      age: true,
    }
  },
  {
    name: "Edmond Dantès",
    img: "ai2Dqph.png",
    opts: {
      class: [ "avenger"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Florence Nightingale (Berserker)",
    img: "MqKBel1.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Cú Chulainn (Alter)",
    img: "VZirgaM.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["4"],
    }
  },
  {
    name: "Queen Medb (Rider)",
    img: "O8xEcnf.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Helena Blavatsky (Caster)",
    img: "rwQNK96.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Rama",
    img: "N5zjtV9.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
    }
  },
  {
    name: "Li Shuwen (Lancer)",
    img: "et9Zuhm.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["4"],
    }
  },
  {
    name: "Thomas Edison",
    img: "1ZULjus.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["4"],
    }
  },
  {
    name: "Geronimo",
    img: "I3tbN1x.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["3"],
    }
  },
  {
    name: "Billy the Kid",
    img: "AUHdfcO.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["3"],
    }
  },
  {
    name: "Jeanne d'Arc (Alter)",
    img: "58WwYZx.png",
    opts: {
      class: [ "avenger"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
    }
  },
  {
    name: "Angra Mainyu",
    img: "Xb9LncD.png",
    opts: {
      class: [ "avenger"],
      gender: ["m"],
      rarity: ["0"],
    }
  },
  {
    name: "Iskandar",
    img: "kfDaAvO.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "EMIYA (Assassin)",
    img: "pEuJhoQ.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["4"],
    }
  },
  {
    name: "Hassan of the Hundred Faces",
    img: "BoHe2DH.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["3"],
    }
  },
  {
    name: "Irisviel (Dress of Heaven)",
    img: "Q6OovW7.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
    }
  },
  {
    name: "Shuten Dōji (Assassin)",
    img: "4ZUgrmR.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  { 
    name: "Xuanzang Sanzang",
    img: "89e0pPL.png", 
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
    } 
  },
  {
    name: "Minamoto no Raikō (Berserker)",
    img: "1JIiOFj.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Sakata Kintoki (Rider)",
    img: "5DgUJk0.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["welfare"],
      alt: true,
    }
  },
  {
    name: "Ibaraki Dōji (Berserker)",
    img: "gayjsaP.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["4"],
      age: true,
    }
  },
  {
    name: "Fūma Kotarō",
    img: "q8uNKl0.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["3"],
    }
  },
  {
    name: "Ozymandias",
    img: "s7ts4TX.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Artoria Pendragon (Lancer)",
    img: "B2DgLdU.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
    }
  },
  {
    name: "Nitocris",
    img: "weN1biM.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Lancelot (Saber)",
    img: "grQiGxe.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
    }
  },
  {
    name: "Tristan",
    img: "Vi17JLn.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["4"],
    }
  },
  {
    name: "Gawain",
    img: "5fucJAr.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
    }
  },
  {
    name: "Hassan of the Serenity",
    img: "4JgU1o1.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["3"],
    }
  },
  {
    name: "Tawara Tōta",
    img: "DaOEicQ.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["3"],
    }
  },
  {
    name: "Bedivere",
    img: "GhWtPKg.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["3"],
    }
  },
  {
    name: "Leonardo Da Vinci (Caster)",
    img: "qCGfwmB.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Tamamo no Mae (Lancer)",
    img: "vz205XZ.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Artoria Pendragon (Archer)",
    img: "SzZ2i2q.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Marie Antoinette (Caster)",
    img: "ltf3CoU.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Anne Bonny & Mary Read (Archer)",
    img: "S0uRRaM.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
      pair: true,
    }
  },
  { name: "Anne Bonny (Archer)", 
    img: "3uQGKlC.png", 
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
      indi: true,
    } },
  {
    name: "Mary Reed (Archer)",
    img: "WMilWhj.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
      indi: true,
    }
  },
  {
    name: "Mordred (Rider)",
    img: "z1F9u1P.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Scáthach (Assassin)",
    img: "7HbE0bx.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare", "summer"],
      alt: true,
    }
  },
  {
    name: "Kiyohime (Lancer)",
    img: "O0vnWUh.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
      age: true,
    }
  },
  {
    name: "Martha (Ruler)",
    img: "CVwo8rg.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Illyasviel von Einzbern (Caster)",
    img: "0q6Ch4r.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
      age: true,
    }
  },
  {
    name: "Chloe von Einzbern (Archer)",
    img: "KFqGDBs.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
      age: true,
    }
  },
  {
    name: "Elizabeth Báthory (Brave)",
    img: "qHaNzCX.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
      alt: true,
    }
  },
  {
    name: "Cleopatra",
    img: "LefRZIM.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Vlad III (EXTRA)",
    img: "HVuVonl.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["4"],
    }
  },
  {
    name: "Jeanne d'Arc Alter Santa Lily",
    img: "VcNCkeq.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      extra: ["welfare", "santa"],
      age: true,
    }
  },
  {
    name: "Ishtar (Archer)",
    img: "MhBhVSp.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["5"],
      face: ["rin"],
    }
  },
  {
    name: "Enkidu",
    img: "jLuSatd.png",
    opts: {
      class: [ "lancer"],
      gender: ["u"],
      rarity: ["5"],
    }
  },
  {
    name: "Quetzalcoatl (Rider)",
    img: "NHrNKG8.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Gilgamesh (Caster)",
    img: "OlCxlcd.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["4"],
    }
  },
  {
    name: "Medusa (Lancer)",
    img: "kwTgioa.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      age: true,
    }
  },
  { name: "Gorgon", 
    img: "I9MFfNq.png", 
    opts: {
      class: [ "avenger"],
      gender: ["f"],
      rarity: ["4"],
    } 
  },
  {
    name: "Jaguar Man",
    img: "0ZkVxGh.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["3"],
    }
  },
  {
    name: "Tiamat",
    img: "zAk2ak0.png",
    opts: {
      class: [ "beast"],
      gender: ["f"],
      rarity: ["5"],
      npc: true,
    }
  },
  {
    name: "Merlin",
    img: "F69Ht6R.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Goetia",
    img: "abFDTUk.png",
    opts: {
      class: [ "beast"],
      gender: ["m"],
      rarity: ["5"],
      npc: true,
    }
  },
  {
    name: "Solomon",
    img: "Z25lGwZ.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["5"],
      npc: true,
    }
  },
  {
    name: "Miyamoto Musashi (Saber)",
    img: "XgbxB9I.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "\"First Hassan\"",
    img: "oCevJNk.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Mysterious Heroine X (Alter) (Berserker)",
    img: "1RdnKZc.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
    }
  },
  {
    name: "James Moriarty (Archer)",
    img: "Guh8mq0.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "EMIYA (Alter)",
    img: "bcZMofX.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["4"],
    }
  },
  {
    name: "Hessian Lobo",
    img: "VRZYbpf.png",
    opts: {
      class: [ "avenger"],
      gender: ["m"],
      rarity: ["4"],
    }
  },
  {
    name: "Yan Qing",
    img: "9YQfwrA.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["4"],
    }
  },
  {
    name: "Arthur Pendragon (Prototype)",
    img: "2hHD5iK.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Hijikata Toshizō",
    img: "q3pkKV0.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Chacha",
    img: "idayuKq.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
      age: true,
    }
  },
  {
    name: "Meltryllis",
    img: "DBR2o1f.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
      face: ["sakura"],
    }
  },
  {
    name: "Passionlip",
    img: "DlupoZt.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["4"],
      face: ["sakura"],
    }
  },
  {
    name: "Suzuka Gozen",
    img: "znYYoVi.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "BB",
    img: "JzbV9Hp.png",
    opts: {
      class: [ "mooncancer"],
      gender: ["f"],
      rarity: ["4"],
      face: ["sakura"],
      extra: ["welfare"],
    }
  },
  {
    name: "Sesshōin Kiara (Alter Ego)",
    img: "oQxSt08.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Beast III/R (Heaven's Hole)",
    img: "DHFaoRi.png",
    opts: {
      class: [ "beast"],
      gender: ["f"],
      rarity: ["5"],
      npc: true,
    }
  },
  {
    name: "Scheherazade",
    img: "UBz0UzP.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Wu Zetian (Assassin)",
    img: "V646m28.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      age: true,
    }
  },
  {
    name: "Penthesilea",
    img: "VRuLnKx.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Christopher Columbus",
    img: "HHKsR3Y.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["3"],
    }
  },
  {
    name: "Sherlock Holmes",
    img: "3PKKNUJ.png",
    opts: {
      class: [ "ruler"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Paul Bunyan",
    img: "Na63vHk.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["1"],
      extra: ["welfare"],
      age: true,
    }
  },
  {
    name: "Nero Claudius (Caster)",
    img: "D61msnT.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Frankenstein (Saber)",
    img: "T0MO2UI.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Nitocris (Assassin)",
    img: "vqExl0r.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Oda Nobunaga (Berserker)",
    img: "u7gweye.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Artoria Pendragon (Alter) (Rider)",
    img: "1EE4t4k.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Helena Blavatsky (Archer)",
    img: "Tx8qSmY.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Minamoto no Raikō (Lancer)",
    img: "LifkTwr.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Ishtar (Rider)",
    img: "iN48Bhh.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      face: ["rin"],
      extra: ["welfare", "summer"],
      alt: true,
    }
  },
  {
    name: "Pārvatī",
    img: "mTxq6Qm.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      face: ["sakura"],
    }
  },
  {
    name: "Tomoe Gozen (Archer)",
    img: "quTFr5r.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Mochizuki Chiyome",
    img: "WgHSNA9.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Hōzōin Inshun",
    img: "CYWFN1I.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["3"],
    }
  },
  {
    name: "Yagyū Tajima no Kami Munenori",
    img: "QooLDYy.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
    }
  },
  {
    name: "Katou \"Black Kite\" Danzo",
    img: "o14PdZZ.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Osakabehime",
    img: "P1OXIE9.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Mecha Eli-chan",
    img: "uvr1H2N.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
    }
  },
  {
    name: "Mecha Eli-chan Mk.II",
    img: "HFPeoZq.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
    }
  },
  {
    name: "Circe",
    img: "YNASLPW.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Nezha",
    img: "7aEA74b.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Queen of Sheba",
    img: "vQedw6z.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Abigail Williams",
    img: "qC5mrUE.png",
    opts: {
      class: [ "foreigner"],
      gender: ["f"],
      rarity: ["5"],
      age: true,
    }
  },
  {
    name: "Ereshkigal",
    img: "nvQ5IQP.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
      face: ["rin"],
    }
  },
  {
    name: "Altera the San(ta)",
    img: "QD7HLdL.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare", "santa"],
      alt: true,
    }
  },
  {
    name: "Katsushika Hokusai (Foreigner)",
    img: "CQCHkKA.png",
    opts: {
      class: [ "foreigner"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Semiramis",
    img: "bRss30Y.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Asagami Fujino",
    img: "1zaOcQZ.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      collab: true,
    }
  },
  {
    name: "Anastasia (Caster)",
    img: "O4NNTdu.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Atalanta (Alter)",
    img: "JpOSJzs.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Avicebron",
    img: "6WlcQSC.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["3"],
    }
  },
  {
    name: "Antonio Salieri",
    img: "xO6Wlob.png",
    opts: {
      class: [ "avenger"],
      gender: ["m"],
      rarity: ["3"],
    }
  },
  {
    name: "Ivan the Terrible",
    img: "n9wFgjT.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Achilles",
    img: "5iktFg6.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Chiron",
    img: "CClxWRP.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["4"],
    }
  },
  {
    name: "Sieg",
    img: "abH0QPt.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["welfare"],
    }
  },
  {
    name: "Okita Sōji (Alter) (Alterego)",
    img: "oSF8m1t.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
    }
  },
  {
    name: "Okada Izō",
    img: "y2pid8E.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["3"],
    }
  },
  {
    name: "Sakamoto Ryōma (Rider)",
    img: "EPOCxSp.png",
    opts: {
      class: [ "rider"],
      gender: ["m", "f"],
      rarity: ["4"],
      extra: ["welfare"],
      pair: true,
    }
  },
  {
    name: "Sakamoto Ryōma (Rider)",
    img: "HOBsHb9.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["welfare"],
      indi: true,
    }
  },
  {
    name: "Oryō",
    img: "9119j5F.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
      indi: true,
    }
  },
  {
    name: "Napoléon",
    img: "gJMvuw3.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Sigurd",
    img: "6c7adqv.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Valkyrie",
    img: "e0UqQom.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      pair: true,
    }
  },
  {
    name: "Ortlinde (Lancer)",
    img: "e0UqQom.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      indi: true,
    }
  },
  {
    name: "Hildr (Lancer)",
    img: "hDonGTI.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      indi: true,
    }
  },
  {
    name: "Thrúd (Lancer)",
    img: "CpVpLF1.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      indi: true,
    }
  },
  {
    name: "Scáthach-Skaði (Caster)",
    img: "kpdbp6n.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Jeanne d'Arc (Archer)",
    img: "6EUoBN7.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Ibaraki Dōji (Lancer)",
    img: "3RfAUt5.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
      age: true,
    }
  },
  {
    name: "Ushiwakamaru (Assassin)",
    img: "txBTK2a.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Jeanne d'Arc (Alter) (Berserker)",
    img: "GLXEyzE.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      extra: ["welfare", "summer"],
      alt: true,
    }
  },
  {
    name: "BB (Summer)",
    img: "5DWMhsl.png",
    opts: {
      class: [ "mooncancer"],
      gender: ["f"],
      rarity: ["5"],
      face: ["sakura"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Queen Medb (Saber)",
    img: "1DalKVZ.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Mysterious Heroine XX",
    img: "7WRkStJ.png",
    opts: {
      class: [ "foreigner"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Diarmuid Ua Duibhne (Saber)",
    img: "09q393z.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
    }
  },
  {
    name: "Sitonai",
    img: "1EVuvZy.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
      age: true,
    }
  },
  {
    name: "Shuten Dōji (Caster)",
    img: "7rMuJbG.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
      alt: true,
    }
  },

  {
    name: "Xiang Yu",
    img: "1QpkGuN.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Prince of Lan Ling",
    img: "gj4TNQG.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
    }
  },
  {
    name: "Qin Liangyu",
    img: "mgMJ9fZ.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Qin Shi Huang",
    img: "Oppsa22.png",
    opts: {
      class: [ "ruler"],
      gender: ["u"],
      rarity: ["5"],
    }
  },
  {
    name: "Yu Mei-ren (Assassin)",
    img: "j7JSPW0.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Red Hare",
    img: "cmzKaFu.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["3"],
    }
  },
  {
    name: "Bradamante",
    img: "EUh9pE4.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Quetzalcoatl (Samba/Santa)",
    img: "n10mIFp.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare", "santa"],
      alt: true,
    }
  },
  {
    name: "Beni-Enma",
    img: "Qj9f2OA.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      age: true,
    }
  },
  {
    name: "Li Shuwen (Assassin)",
    img: "isgwm2f.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Miyu Edelfelt",
    img: "mqDmFkk.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Murasaki Shikibu (Caster)",
    img: "QDVjShO.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Kingprotea",
    img: "FqxV03c.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
      face: ["sakura"],
    }
  },
  {
    name: "Kama (Assassin) (Child)",
    img: "YcFicxG.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["5"],
      face: ["sakura"],
      age: true,
    }
  },
  {
    name: "Kama (Assassin)",
    img: "K7jS5IA.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["5"],
      face: ["sakura"],
      costume: true,
    }
  },
  {
    name: "Beast III/L (Demon Lord of Lust)",
    img: "ndECH0E.png",
    opts: {
      class: [ "beast"],
      gender: ["f"],
      rarity: ["5"],
      face: ["sakura"],
      npc: true,
    }
  },
  {
    name: "Sima Yi (Reines)",
    img: "ImjhmfO.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Astraea",
    img: "xMgUv9V.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Gray",
    img: "Ohdn2EB.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      extra: ["welfare"],
    }
  },
  {
    name: "Ganesha (Jinako Carigiri)",
    img: "nZxdm1F.png",
    opts: {
      class: [ "mooncancer"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Lakshmi Bai",
    img: "Eore3LR.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
    }
  },
  {
    name: "William Tell",
    img: "LR1sPhE.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["3"],
    }
  },
  {
    name: "Arjuna (Alter)",
    img: "nkm9EY7.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Aśvatthāman",
    img: "1wI0rff.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["4"],
    }
  },
  {
    name: "Asclepius",
    img: "Ng9WEKk.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["3"],
    }
  },
  {
    name: "Demon King Nobunaga",
    img: "NHdzzZ2.png",
    opts: {
      class: [ "avenger"],
      gender: ["u"],
      rarity: ["5"],
    }
  },
  {
    name: "Mori Nagayoshi",
    img: "XRcGxI7.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["3"],
    }
  },
  {
    name: "Nagao Kagetora",
    img: "z4n4Kog.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
    }
  },
  {
    name: "Leonardo Da Vinci (Rider)",
    img: "dT4yodv.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["5"],
      age: true,
    }
  },
  {
    name: "Jason",
    img: "OL8Zb9d.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["1"],
    }
  },
  {
    name: "Paris",
    img: "dKZbjjZ.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["2"],
      age: true,
    }
  },
  {
    name: "Gareth (Lancer)",
    img: "rQBMK5h.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["2"],
    }
  },
  {
    name: "Bartholomew Roberts",
    img: "ehl7Tcj.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["1"],
    }
  },
  {
    name: "Chen Gong",
    img: "Ce47wbJ.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["2"],
    }
  },
  {
    name: "Charlotte Corday (Assassin)",
    img: "uc6O8D5.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["1"],
    }
  },
  {
    name: "Salome",
    img: "v2A1QNK.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["2"],
    }
  },
  {
    name: "Miyamoto Musashi (Berserker)",
    img: "830KDRu.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Osakabehime (Archer)",
    img: "ZLhq3P4.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Carmilla (Rider)",
    img: "9eHwjTl.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Katsushika Hokusai (Saber)",
    img: "AGCVFb3.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare", "summer"],
      alt: true,
    }
  },
  {
    name: "Artoria Pendragon (Ruler)",
    img: "UyFBmq1.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Mysterious Alter Ego Λ",
    img: "ZbehM39.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      face: ["sakura"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Okita J Sōji (Assassin)",
    img: "BS1qdto.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Space Ishtar",
    img: "uFIpVs5.png",
    opts: {
      class: [ "avenger"],
      gender: ["f"],
      rarity: ["5"],
      face: ["rin"],
    }
  },
  {
    name: "Calamity Jane",
    img: "dIvLopQ.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Astolfo (Saber)",
    img: "GI9xtvx.png",
    opts: {
      class: [ "saber"],
      gender: ["m", "u"],
      rarity: ["5"],
      alt: true,
    }
  },
  {
    name: "Florence Nightingale (Santa)",
    img: "EvPrkpU.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare", "santa"],
      alt: true,
    }
  },
  {
    name: "Super Orion",
    img: "UF7hQGv.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Mandricardo",
    img: "IQP2jiD.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["3"],
    }
  },
  {
    name: "Europa",
    img: "YPHjtGc.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Yang Guifei",
    img: "8zAnyWf.png",
    opts: {
      class: [ "foreigner"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Sei Shōnagon (Archer)",
    img: "Q8u8Mhl.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Odysseus",
    img: "v4qyW50.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Dioscuri",
    img: "l3E5rT1.png",
    opts: {
      class: [ "saber"],
      gender: ["m","f"],
      rarity: ["5"],
      pair: true,
    }
  },
  {
    name: "Dioscuri (Castor)",
    img: "HSnICwx.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["5"],
      indi: true,
    }
  },
  {
    name: "Dioscuri (Pollux)",
    img: "L9gqE2W.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      indi: true,
    }
  },
  {
    name: "Caenis (Lancer)",
    img: "I1pAVi3.png",
    opts: {
      class: [ "lancer"],
      gender: ["f","u"],
      rarity: ["4"],
    }
  },
  {
    name: "Romulus-Quirinus",
    img: "lHMl1WT.png",
    opts: {
      class: [ "lancer"],
      gender: ["u"],
      rarity: ["5"],
    }
  },
  {
    name: "Voyager",
    img: "5ysB11L.png",
    opts: {
      class: [ "foreigner"],
      gender: ["m"],
      rarity: ["5"],
      age: true,
    }
  },
  {
    name: "Kijyo Kōyō",
    img: "OtJ6vsW.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Utsumi Erice (Lancer)",
    img: "GlPKili.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
      age: true,
    }
  },
  {
    name: "Artoria Caster",
    img: "mCG0mAd.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
    }
  },
  {
    name: "Sesshōin Kiara (Moon Cancer)",
    img: "SuAZ40S.png",
    opts: {
      class: [ "mooncancer"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Illyasviel von Einzbern (Archer)",
    img: "IYuDOqs.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
      age: true,
    }
  },
  {
    name: "Brynhildr (Berserker)",
    img: "Nm0Znfm.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Yu Mei-ren (Lancer)",
    img: "yqzyEZ0.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer", "welfare"],
      alt: true,
    }
  },
  {
    name: "Abigail Williams (Summer)",
    img: "BWWw2ga.png",
    opts: {
      class: [ "foreigner"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["summer"],
      alt: true,
      age: true,
    }
  },
  {
    name: "Tomoe Gozen (Saber)",
    img: "yNCuRes.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Murasaki Shikibu (Rider)",
    img: "02ZdfkH.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Himiko",
    img: "PzJrnXo.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Saitō Hajime",
    img: "KSxW6iF.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
    }
  },
  {
    name: "Oda Nobukatsu",
    img: "ZwhBOVx.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["1"],
    }
  },
  {
    name: "Van Gogh (Foreigner)",
    img: "yyYFkCG.png",
    opts: {
      class: [ "foreigner"],
      gender: ["f"],
      rarity: ["5"],
      age: true,
    }
  },
  {
    name: "Nemo",
    img: "kZ7zZUL.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Ashiya Dōman",
    img: "1M39ygN.png",
    opts: {
      class: [ "alterego"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Watanabe-no-Tsuna",
    img: "xipWgj0.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
    }
  },
  {
    name: "Ibuki Dōji (Saber)",
    img: "PzUNHKd.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Vritra",
    img: "i20TVpO.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Karna (Santa)",
    img: "PInnglF.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["welfare", "santa"],
      alt: true,
    }
  },
  {
    name: "Senji Muramasa",
    img: "ElmcH71.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Taira-no-Kagekiyo",
    img: "nThPNqM.png",
    opts: {
      class: [ "avenger"],
      gender: ["u"],
      rarity: ["5"],
    }
  },
  {
    name: "Kiichi Hōgen",
    img: "mVVNz01.png",
    opts: {
      class: [ "assassin"],
      gender: ["u", "f"],
      rarity: ["4"],
      extra: ["welfare"],
    }
  },
  {
    name: "Amor (Caren)",
    img: "l1ftRrI.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Galatea",
    img: "uiU0HpQ.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Miss Crane",
    img: "DWBwpZJ.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Mysterious Idol X (Alter) (Foreigner)",
    img: "turadsD.png",
    opts: {
      class: [ "foreigner"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      alt: true,
    }
  },
  {
    name: "Morgan",
    img: "sfddkbl.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
    }
  },
  {
    name: "Barghest (Saber)",
    img: "7wplDni.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Baobhan Sith (Archer)",
    img: "Y3Y7Pfm.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Mélusine (Lancer)",
    img: "Raqbgq4.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Percival",
    img: "uWYvaQj.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["4"],
    }
  },
  {
    name: "Koyanskaya of Light",
    img: "kZvGHMc.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Habetrot",
    img: "fdDOaZB.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Oberon",
    img: "HdoUBvn.png",
    opts: {
      class: [ "pretender"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Okita Sōji (Alter) (Saber)",
    img: "a2liIO5.png",
    opts: {
      class: [ "saber"],
      gender: ["m","f","u"],
      rarity: ["5"],
      extra: ["summer"],
      face: ["saber"],
      alt: true,
      pair: true,
    }
  },
  {
    name: "Okita Sōji (Alter) (Saber)",
    img: "vWqHouU.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["summer"],
      face: ["saber"],
      alt: true,
      indi: true,
    }
  },
  {
    name: "Rengoku",
    img: "bqzy1ZX.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["summer"],
      face: ["saber"],
      alt: true,
      indi: true,
    }
  },
  {
    name: "Anastasia & Viy (Archer)",
    img: "tVlsZKf.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Charlotte Corday (Caster)",
    img: "Gl6t1GA.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Leonardo Da Vinci (Ruler)",
    img: "Iow8XVb.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer", "welfare"],
      alt: true,
    }
  },
  {
    name: "Kama (Avenger) (Child)",
    img: "lpgwN8l.png",
    opts: {
      class: [ "avenger"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["summer"],
      face: ["sakura"],
      alt: true,
      age: true,
    }
  },
  {
    name: "Kama (Avenger)",
    img: "f52QFsl.png",
    opts: {
      class: [ "avenger"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["summer"],
      face: ["sakura"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Caenis (Rider)",
    img: "wh1OMJg.png",
    opts: {
      class: [ "rider"],
      gender: ["f", "u"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Sei Shōnagon (Berserker)",
    img: "JN4R6vm.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Jacques de Molay (Foreigner)",
    img: "DUsppDp.png",
    opts: {
      class: [ "foreigner"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Zenobia",
    img: "ztRaAin.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Elizabeth Báthory (Cinderella)",
    img: "hDHw96W.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
      alt: true,
    }
  },
  {
    name: "Izumo-no-Okuni",
    img: "E5NNzgG.png",
    opts: {
      class: [ "caster"],
      gender: ["f", "m"],
      rarity: ["5"],
      pair: true,
    }
  },
  {
    name: "Izumo-no-Okuni",
    img: "4xWPutS.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
      indi: true,
    }
  },
  {
    name: "Zan Zaburō",
    img: "KdrsMuC.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["5"],
      indi: true,
    }
  },
  {
    name: "Mysterious Ranmaru X",
    img: "YFbIr0q.png",
    opts: {
      class: [ "avenger"],
      gender: ["u"],
      rarity: ["4"],
      extra: ["welfare"],
    }
  },
  {
    name: "Sakamoto Ryōma (Lancer)",
    img: "ERRc0Ve.png",
    opts: {
      class: [ "lancer"],
      gender: ["m", "f"],
      rarity: ["5"],
      pair: true,
      alt: true,
    }
  },
  {
    name: "Sakamoto Ryōma (Lancer)",
    img: "oyrjC9y.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["5"],
      indi: true,
      alt: true,
    }
  },
  {
    name: "Oryō (Lancer)",
    img: "1Ygljid.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
      indi: true,
      alt: true,
    }
  },
  {
    name: "Martha (Santa)",
    img: "IIGdHld.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare", "santa"],
      alt: true,
    }
  },
  {
    name: "Taigong Wang",
    img: "fiRqF23.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Dobrynya Nikitich (Rider)",
    img: "lPsjler.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Beast IV: L",
    img: "GyPib7R.png",
    opts: {
      class: [ "beast"],
      gender: ["f"],
      rarity: ["5"],
      npc: true,
    }
  },
  {
    name: "Koyanskaya of Darkness",
    img: "kFGbzyf.png",
    opts: {
      class: [ "foreigner"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Hephaestion",
    img: "Yzy3N8T.png",
    opts: {
      class: [ "pretender"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Manannán mac Lir (Bazett)",
    img: "WWoiV5c.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Hai Bà Trưng (Trung Sisters)",
    img: "xuZbWJg.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      pair: true,
    }
  },
  {
    name: "Trưng Trắc",
    img: "ex4i0C9.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      indi: true,
    }
  },
  {
    name: "Trưng Nhị",
    img: "TkIozSg.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      indi: true,
    }
  },
  {
    name: "Taisui Xingjun",
    img: "t3LmIlG.png",
    opts: {
      class: [ "alterego"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["welfare"],
      age: true,
    }
  },
  {
    name: "Super Bunyan",
    img: "8yKzgYA.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
      pair: true,
      alt:true,
    }
  },
  {
    name: "Super Bunyan",
    img: "44T2eIh.png",
    opts: {
      class: ["alterego"],
      gender: ["f"],
      rarity: ["5"],
      indi: true,
      alt:true,
      age: true,
    }
  },
  {
    name: "Rider (Georges Méliès?)",
    img: "JartfDb.png",
    opts: {
      class: [ "rider", "alterego"],
      gender: ["f"],
      rarity: ["5"],
      indi: true,
      alt:true,
    }
  },
  {
    name: "Assassin (J. Edgar Hoover?)",
    img: "SAtYVeQ.png",
    opts: {
      class: [ "assassin", "alterego"],
      gender: ["f", "u"],
      rarity: ["5"],
      indi: true,
      alt:true,
    }
  },
  {
    name: "Mike Fink",
    img: "BPBXCY0.png",
    opts: {
      class: [ "alterego"],
      gender: ["m"],
      rarity: ["5"],
      indi: true,
      alt:true,
    }
  },
  {
    name: "Daikokuten",
    img: "W6MWlYt.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Mary Anning",
    img: "N8onW3K.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["1"],
    }
  },
  {
    name: "Constantine XI",
    img: "Hy67YdC.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Charlemagne",
    img: "bsZYtpp.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Roland",
    img: "46dqQau.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
    }
  },
  {
    name: "Kriemhild",
    img: "U3yghdW.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "James Moriarty (Ruler)",
    img: "ZdRB4HM.png",
    opts: {
      class: [ "ruler"],
      gender: ["m"],
      rarity: ["5"],
      alt: true,
    }
  },
  {
    name: "Don Quixote",
    img: "9Uthi9U.png",
    opts: {
      class: [ "lancer"],
      gender: ["m","f"],
      rarity: ["4"],
      pair: true,
    }
  },
  {
    name: "Don Quixote",
    img: "1ZOFAac.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["4"],
      indi: true,
    }
  },
  {
    name: "Sancho Panza",
    img: "cvLMW6Z.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      indi: true,
    }
  },
  {
    name: "Zhang Jue",
    img: "42sAcDs.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["3"],
    }
  },
  {
    name: "Kyokutei Bakin",
    img: "4HxRhCR.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Minamoto-no-Tametomo",
    img: "QiBXvAu.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Archetype: Earth",
    img: "RJBAkb1.png",
    opts: {
      class: [ "mooncancer"],
      gender: ["f"],
      rarity: ["5"],
      collab: true,
    }
  },
  {
    name: "Xu Fu (Alter Ego)",
    img: "l2O2Yd1.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["3"],
    }
  },
  {
    name: "Lady Avalon",
    img: "p1EBNZm.png",
    opts: {
      class: [ "pretender"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Gareth (Saber)",
    img: "d7VNbO1.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Ibuki Dōji (Berserker)",
    img: "EdcxCPQ.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Utsumi Erice (Avenger)",
    img: "JOEP76u.png",
    opts: {
      class: [ "avenger"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
      age: true,
    }
  },
  {
    name: "Scáthach-Skaði (Ruler)",
    img: "zz9lyBb.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Wu Zetian (Caster)",
    img: "QunXU0b.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
    }
  },
  {
    name: "Thrúd (Assassin)",
    img: "gqGZPjr.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer", "welfare"],
      alt: true,
    }
  },
  {
    name: "Rindr",
    img: "qg1OpQK.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer", "welfare"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Hildr (Assassin)",
    img: "l7QRg5X.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer", "welfare"],
      alt: true,
    }
  },
  {
    name: "Ölrún",
    img: "Zf1jnKi.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer", "welfare"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Ortlinde (Assassin)",
    img: "eruEtcf.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer", "welfare"],
      alt: true,
    }
  },
  {
    name: "Geirskögul",
    img: "LwD7cAk.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer", "welfare"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Sen-no-Rikyu",
    img: "7K3nucF.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Yamanami Keisuke",
    img: "b2laLO2.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
    }
  },
  {
    name: "Iyo",
    img: "PMjdcHm.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
    }
  },
  {
    name: "Huyan Zhuo",
    img: "hxAq6hU.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Huang Feihu",
    img: "nd3HSbP.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["4"],
      pair: true,
    }
  },
  {
    name: "Huang Feihu (Alone)",
    img: "nd3HSbP.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["4"],
      indi: true,
    }
  },
  {
    name: "Huang Tianhua",
    img: "1k9Yu2S",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["4"],
      indi: true,
    }
  },
  {
    name: "Huang Tianlu",
    img: "av8Zg9y.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["4"],
      indi: true,
    }
  },
  {
    name: "Huang Tianjue",
    img: "kSR8JQe.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["4"],
      indi: true,
    }
  },
  {
    name: "Huang Tianxiang",
    img: "TgXKQYX.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["4"],
      indi: true,
    }
  },
  {
    name: "Elisa the Nine-Tattooed Dragon",
    img: "zRai3Lm.png",
    opts: {
      class: [ "pretender"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
    }
  },
  {
    name: "Britomart",
    img: "XqvgDTe.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Grigori Rasputin",
    img: "Hex8ohU.png",
    opts: {
      class: [ "alterego"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Nitocris (Alter)",
    img: "kg26nNd.png",
    opts: {
      class: [ "avenger"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Tezcatlipoca",
    img: "SAkdY70.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Tenochtitlan (Pretender)",
    img: "hefz5KK.png",
    opts: {
      class: [ "pretender"],
      gender: ["f"],
      rarity: ["4"],
    }
  },
  {
    name: "Kukulcan",
    img: "M1ZjtuC.png",
    opts: {
      class: [ "foreigner"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Pope Johanna",
    img: "ycayPoL.png",
    opts: {
      class: [ "ruelr"],
      gender: ["f"],
      rarity: ["5"],
    }
  },
  {
    name: "Takasugi Shinsaku",
    img: "ikl4Dk4.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["5"],
    }
  },
  {
    name: "Larva/Tiamat",
    img: "YQagpOu.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
      jp: true,
    }
  },
  {
    name: "Sodom's Beast/Draco (Child)",
    img: "8zKosSi.png",
    opts: {
      class: [ "beast"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      age: true,
      jp: true,
    }
  },
  {
    name: "Sodom's Beast/Draco",
    img: "9elvA2C.png",
    opts: {
      class: [ "beast"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      jp: true,
      costume: true,
    }
  },
  {
    name: "Locusta",
    img: "wUDsVo1.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      jp: true,
    }
  },
  {
    name: "Sétanta",
    img: "yT08uab.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["welfare"],
      age: true,
      jp: true,
    }
  },
  {
    name: "Kashin Koji",
    img: "THlg2uP.png",
    opts: {
      class: [ "assassin"],
      gender: ["u"],
      rarity: ["5"],
      jp: true,
    }
  },
  {
    name: "Bhima",
    img: "9nhD9Qz.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["5"],
      jp: true,
    }
  },
  {
    name: "Duryodhana",
    img: "XkQy7St.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["4"],
      jp: true,
    }
  },
  {
    name: "Durga",
    img: "KOUFv9Q.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["5"],
      face: ["sakura"],
      jp: true,
    }
  },
  {
    name: "Medusa (Saber)",
    img: "QQo6SbM.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      alt: true,
      jp: true,
    }
  },
  {
    name: "Aesc the Savior",
    img: "3BxfAMU.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      extra: ["summer"],
      jp: true,
    }
  },
  {
    name: "Morgan (Caster)",
    img: "qh0Jp69.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      extra: ["summer"],
      alt: true,
      costume: true,
      jp: true,
    }
  },
  {
    name: "Artoria Caster (Berserker)",
    img: "7jKrSD0.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      extra: ["summer"],
      alt: true,
      jp: true,
    }
  },
  {
    name: "Suzuka Gozen (Summer Vacation)",
    img: "5jZE43X.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
      jp: true,
    }
  },
  {
    name: "Chloe von Einzbern (Avenger)",
    img: "2W6tt9Z.png",
    opts: {
      class: [ "avenger"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      age: true,
      alt: true,
      jp: true,
    }
  },
  {
    name: "Cnoc na Riabh Yaraan-doo",
    img: "GUBOjat.png",
    opts: {
      class: [ "foreigner"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer", "welfare"],
      jp: true,
    }
  },
  {
    name: "Mélusine (Ruler)",
    img: "P4JZ2it.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["summer"],
      alt: true,
      jp: true,
    }
  },
  {
    name: "UDK-Barghest",
    img: "ZMtS6wl.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
      jp: true,
    }
  },
  {
    name: "Cait Cú Cerpriestess",
    img: "NAO6TGc.png",
    opts: {
      class: [ "pretender"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
      jp: true,
    }
  },
  {
    name: "Wandjina",
    img: "j0THili.png",
    opts: {
      class: [ "foreigner"],
      gender: ["u"],
      rarity: ["5"],
      jp: true,
    }
  },
  {
    name: "Ptolemaios",
    img: "CVUrkwd.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["5"],
      jp: true,
    }
  },
  {
    name: "Sugitani Zenjūbō",
    img: "cDMGobA.png",
    opts: {
      class: [ "archer"],
      gender: ["u"],
      rarity: ["3"],
      jp: true,
    }
  },
  {
    name: "Theseus",
    img: "fiw0vzU.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["3"],
      jp: true,
    }
  },
  {
    name: "Takeda Shingen",
    img: "YjUQN0D.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["5"],
      jp: true,
    }
  },
  {
    name: "Nagakura Shinpachi",
    img: "WPxiVCq.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["4"],
      jp: true,
    }
  },
  {
    name: "Saika Magoichi",
    img: "8OEz5TB.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
      jp: true,
    }
  },
  {
    name: "Uesugi Kenshin",
    img: "cYGmMTm.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["5"],
      alt: true,
      jp: true,
    }
  },
  {
    name: "Nemo (Santa)",
    img: "KA2h1lE.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["welfare", "santa"],
      alt: true,
      jp: true,
    }
  },
  {
    name: "Yamato Takeru",
    img: "28yU5xM.png",
    opts: {
      class: [ "saber"],
      gender: ["u"],
      rarity: ["5"],
      jp: true,
    }
  },
  {
    name: "Ushi Gozen",
    img: "tzzoyLS.png",
    opts: {
      class: [ "avenger"],
      gender: ["f"],
      rarity: ["5"],
      jp: true,
    }
  },
  {
    name: "Yui Shōsetsu",
    img: "cnveRlM.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      jp: true,
    }
  },
  {
    name: "Miyamoto Iori",
    img: "eS9DMLe.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["welfare"],
      jp: true,
    }
  },
  {
    name: "Andromeda",
    img: "WaL5uEK.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["5"],
      jp: true,
    }
  },
  {
    name: "Marie Antoinette (Alter)",
    img: "uEBDV5i.png",
    opts: {
      class: [ "avenger"],
      gender: ["f"],
      rarity: ["5"],
      jp: true,
    }
  },
  {
    name: "Hassan of the Shining Star",
    img: "sLH6DaG.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["4"],
      jp: true,
    }
  },
  {
    name: "King of the Cavern, Monte Cristo",
    img: "4aObkFD.png",
    opts: {
      class: [ "avenger"],
      gender: ["m"],
      rarity: ["5"],
      jp: true,
    }
  },
  {
    name: "Alessandro di Cagliostro",
    img: "o0G6JI1.png",
    opts: {
      class: [ "pretender"],
      gender: ["m"],
      rarity: ["4"],
      jp: true,
    }
  },
  {
    name: "E-Flare Marie",
    img: "7WMJ6zE.png",
    opts: {
      class: [ "beast"],
      gender: ["f"],
      rarity: ["0"],
      npc: true,
      jp: true,
    }
  },
  {
    name: "E-Aqua Marie",
    img: "gEME0Tc.png",
    opts: {
      class: [ "beast"],
      gender: ["f"],
      rarity: ["0"],
      npc: true,
      jp: true,
    }
  },
  {
    name: "Aozaki Aoko",
    img: "VSYnnJX.png",
    opts: {
      class: [ "foreigner"],
      gender: ["f"],
      rarity: ["5"],
      collab: true,
      jp: true,
    }
  },
  {
    name: "Shizuki Sōjūrō",
    img: "ZeM7dlT.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["welfare"],
      collab: true,
      jp: true,
    }
  },
  {
    name: "Kuonji Alice",
    img: "wExY1ei.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["5"],
      collab: true,
      jp: true,
    }
  },
  {
    name: "Azumi no Isora (Hibiki & Chikagi)",
    img: "F8HoeJm.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
      pair: true,
      collab: true,
      jp: true,
    }
  },
  {
    name: "Azumi no Isora",
    img: "InztAP1.png",
    opts: {
      class: [ "alterego"],
      gender: ["u"],
      rarity: ["5"],
      costume: true,
      collab: true,
      jp: true,
    }
  },
  {
    name: "Hibiki Hibino",
    img: "uRMjq5o.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
      indi: true,
      collab: true,
      jp: true,
    }
  },
  {
    name: "Chikagi Katsuragi",
    img: "EprcoEX.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
      indi: true,
      collab: true,
      jp: true,
    }
  },
  {
    name: "Space Ereshkigal",
    img: "efTbDlt.png",
    opts: {
      class: [ "beast"],
      gender: ["f"],
      rarity: ["5"],
      face: ["rin"],
      extra: ["summer"],
      jp: true,
    }
  },
  {
    name: "Mysterious Executor C.I.E.L",
    img: "kE8YlkO.png",
    opts: {
      class: [ "mooncancer"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["summer"],
      collab: true,
      jp: true,
    }
  },
  {
    name: "Dobrynya Nikitich (Lancer)",
    img: "uc1sWJo.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
      jp: true,
    }
  },
  {
    name: "Xu Fu (Avenger)",
    img: "0RcDNWE.png",
    opts: {
      class: [ "avenger"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
      jp: true,
    }
  },
  {
    name: "BB Dubai",
    img: "ig9AC0x.png",
    opts: {
      class: [ "mooncancer"],
      gender: ["f"],
      rarity: ["5"],
      face: ["sakura"],
      alt: true,
      jp: true,
    }
  },
  {
    name: "Tenochtitlan (Moon Cancer)",
    img: "NA9ETgi.png",
    opts: {
      class: [ "mooncancer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
      jp: true,
    }
  },
  {
    name: "Mysterious Heroine XX (Alter)",
    img: "F4XwKFA.png",
    opts: {
      class: [ "foreigner"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      face: ["saber"],
      alt: true,
      jp: true,
    }
  },
  {
    name: "Kishinami Hakuno (Male)",
    img: "cmEn3hI.png",
    opts: {
      class: [ "mooncancer"],
      gender: ["m"],
      rarity: ["4"],
      jp: true,
    }
  },
  {
    name: "Kishinami Hakuno (Female)",
    img: "D9pDgJR.png",
    opts: {
      class: [ "mooncancer"],
      gender: ["f"],
      rarity: ["4"],
      jp: true,
    }
  },
  {
    name: "Kazuradrop",
    img: "LnE990g.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
      face: ["sakura"],
      age: true,
      jp: true,
    }
  },
  {
    name: "Kazuradrop (Ascension 2)",
    img: "7DaZ20v.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
      face: ["sakura"],
      age: true,
      costume: true,
      jp: true,
    }
  },
  {
    name: "Tutankhamun",
    img: "W3UrOvs.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["5"],
      age: true,
      jp: true,
    }
  },
  {
    name: "Tutankhamun (Ascension 3)",
    img: "H6v7U9V.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["5"],
      costume: true,
      jp: true,
    }
  },
  {
    name: "Van Gogh (Miner)",
    img: "Ke5903M.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
      age: true,
      jp: true,
    }
  },
  {
    name: "Louhi",
    img: "Ubax6CE.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["5"],
      jp: true,
    }
  },
  {
    name: "Abigail Williams (Santa)",
    img: "J2UAHqn.png",
    opts: {
      class: [ "pretender"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare", "santa"],
      age: true,
      jp: true,
    }
  },
  {
    name: "Phantasmoon",
    img: "AQBEZHJ.png",
    opts: {
      class: [ "pretender"],
      gender: ["f"],
      rarity: ["5"],
      collab: true,
      jp: true,
    }
  },
  {
    name: "Richard I",
    img: "T3NkcV5.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["5"],
      jp: true,
    }
  },
  {
    name: "Biscione",
    img: "BxhAO7I.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
      jp: true,
    }
  },
  {
    name: "Kurohime",
    img: "i3pfn1c.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      jp: true,
    }
  },
  {
    name: "Ono no Komachi",
    img: "H35VwiV.png",
    opts: {
      class: [ "caster"],
      gender: ["f", "m"],
      rarity: ["5"],
      pair: true,
      jp: true,
    }
  },
  {
    name: "Ono no Komachi",
    img: "8ustogL.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
      indi: true,
      jp: true,
    }
  },
  {
    name: "Ono no Takamura",
    img: "XemU7P7.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["5"],
      indi: true,
      jp: true,
    }
  },
  {
    name: "E-Grand Marie",
    img: "68ilIHC.png",
    opts: {
      class: [ "beast"],
      gender: ["f"],
      rarity: ["0"],
      npc: true,
      jp: true,
    }
  },
  {
    name: "Dante Alighieri",
    img: "p8Ti84C.png",
    opts: {
      class: [ "pretender"],
      gender: ["m"],
      rarity: ["5"],
      jp: true,
    }
  },
  {
    name: "Jacques de Molay (Saber)",
    img: "sEKox4j.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["arcade",],
      jp: true,
      arcade: true,
    }
  },
  {
    name: "Kama (Mistake)",
    img: "txKTo6q.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["5"],
      face: ["sakura"],
      extra: ["arcade",],
      age: true,
      alt: true,
      arcade: true,
      jp: true,
    }
  },
  {
    name: "Sita",
    img: "jTkM3L4.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["arcade",],
      jp: true,
      arcade: true,
    }
  },
  {
    name: "Suzuka Gozen (Santa)",
    img: "5hnggcj.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare", "santa", "arcade",],
      alt: true,
      jp: true,
      arcade: true,
    }
  },
  {
    name: "Nemo (Arcade)",
    img: "tUk3fOH.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["arcade",],
      alt: true,
      jp: true,
      arcade: true,
    }
  },
  {
    name: "Nemo/Noah",
    img: "D2XBLCt.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["arcade",],
      costume: true,
      jp: true,
      arcade: true,
    }
  },
  {
    name: "Helena Blavatsky (Christmas)",
    img: "JyvEzW3.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare", "santa", "arcade",],
      alt: true,
      jp: true,
      arcade: true,
    }
  },
  {
    name: "Merlin (Prototype)",
    img: "EY81Ebn.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["arcade",],
      jp: true,
      arcade: true,
    }
  },
  {
    name: "Frankenstein (Christmas)",
    img: "S9rLwIx.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare", "santa", "arcade",],
      jp: true,
      arcade: true,
    }
  },
  {
    name: "Beast VI/Sodom's Beast",
    img: "GfWNYTb.png",
    opts: {
      class: [ "beast"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      extra: ["arcade",],
      npc: true,
      jp: true,
      arcade: true,
    }
  },
  {
    name: "Mash (Summer Ver.1)",
    img: "pRlNJwg.png",
    opts: {
      class: [ "shielder"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Mash (Summer Ver.2)",
    img: "HWWxTgr.png",
    opts: {
      class: [ "shielder"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Mash (Bright Voyager)",
    img: "HAv4E6u.png",
    opts: {
      class: [ "shielder"],
      gender: ["f"],
      rarity: ["4"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Siegfried (Summer)",
    img: "1OG0KTG.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["summer"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Lancelot (Summer)",
    img: "xdHo8CQ.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
      costume: true,
      jp: true,
    }
  },
  {
    name: "Gawain (Summer)",
    img: "AdiS260.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
      costume: true,
      jp: true,
    }
  },
  {
    name: "Sigurd (Summer)",
    img: "rEWSxTM.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["summer"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Prince of Lan Ling (Summer)",
    img: "G9yN2Ww.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "EMIYA (Summer)",
    img: "x9HgO6J.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Robin Hood (Summer)",
    img: "pAD4831.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["3"],
      extra: ["summer"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Tristan (Summer)",
    img: "3lYWth1.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
      costume: true,
      jp: true,
    }
  },
  {
    name: "Karna (Summer)",
    img: "pHLhigh.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["summer"],
      alt: true,
      costume: true,
      jp: true,
    }
  },
  {
    name: "Percival (Summer)",
    img: "4Cr9Aw8.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
      costume: true,
      jp: true,
    }
  },
  {
    name: "Edward Teach (Summer)",
    img: "lAZhXQI.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["2"],
      extra: ["summer"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Achilles (Summer)",
    img: "z3iiS31.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["summer"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Bartholomew Roberts (Summer)",
    img: "hu3cYdK.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["1"],
      extra: ["summer"],
      alt: true,
      costume: true,
      jp: true,
    }
  },
  {
    name: "Mandricardo (Summer)",
    img: "An99C03.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["3"],
      extra: ["summer"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Gilgamesh (Summer)",
    img: "5Mv4Ob3.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Merlin (Summer)",
    img: "Wi63pFW.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["summer"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Asclepius (Summer)",
    img: "Mi1GsIq.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["3"],
      extra: ["summer"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Fūma Kotarō (Summer)",
    img: "gHmdmqT.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["3"],
      extra: ["summer"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Yan Qing (Summer)",
    img: "gEFbQAS.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["summer"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Edmond Dantès (Summer)",
    img: "9oBmooy.png",
    opts: {
      class: [ "avenger"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["summer"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Ashiya Dōman (Summer Ver.1)",
    img: "YoNN3ok.png",
    opts: {
      class: [ "alterego"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["summer"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Ashiya Dōman (Summer Ver.2)",
    img: "SUivOCF.png",
    opts: {
      class: [ "alterego"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["summer"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Oberon (Summer Ver.1)",
    img: "yPbW1fC.png",
    opts: {
      class: [ "pretender"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["summer"],
      costume: true,
      alt: true,
      jp: true,
    }
  },
  {
    name: "Oberon (Summer Ver.2)",
    img: "NHvlPGq.png",
    opts: {
      class: [ "pretender"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["summer"],
      costume: true,
      alt: true,
      jp: true,
    }
  },
  {
    name: "Queen Medb (Chief Warden)",
    img: "rEkdfHP.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["5"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Queen Medb (Hero My Love)",
    img: "hICjgkm.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["5"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Nero (Olympian Bloomers)",
    img: "tm5fJjs.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Nero (Silk of Venus)",
    img: "L82Cp0H.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Nero (Tyrant's Rhapsodia)",
    img: "FtWQ7WE.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Astolfo (Trifas)",
    img: "IP7f6Kx.png",
    opts: {
      class: [ "rider"],
      gender: ["m", "u"],
      rarity: ["4"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Jeanne d'Arc (Alter) (Shinjuku)",
    img: "gGoETZs.png",
    opts: {
      class: [ "avenger"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Artoria Pendragon (Alter) (Shinjuku)",
    img: "KxL8bSo.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Mordred (Trifas)",
    img: "EA5iB3x.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Bedivere (Silver Butler)",
    img: "Ykqm6xh.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["3"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Sakata Kintoki (Heian Warrior)",
    img: "nJVyfJe.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["5"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Amakusa Shirō (Phantom Thief)",
    img: "qTwnwZG.png",
    opts: {
      class: [ "ruler"],
      gender: ["m"],
      rarity: ["5"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Parvati (Most Sought)",
    img: "U5mW2Cl.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      face: ["sakura"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Okada Izō (Hakama)",
    img: "fMtzAv0.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["3"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Okada Izō (Dapping Fella)",
    img: "npbnbbd.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["3"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Paul Bunyan (Mad Bunny)",
    img: "96ANtVh.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["1"],
      age: true,
      alt: true,
      costume: true,
    }
  },
  {
    name: "Scáthach (Piercing Bunny)",
    img: "ifgxFLt.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Altera (Palmtop Stardust)",
    img: "Pq8Yj5t.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Euryale (Mirage)",
    img: "1q9C2Hx.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["3"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Ushiwakamaru (Wandering Tales)",
    img: "mMXuEIA.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["3"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Helena Blavatsky (Very Mahatma~!☆)",
    img: "KPh0qx4.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Nitocris (Beyond the Mirror)",
    img: "LdfG2oi.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Shuten Dōji (Cherry Blossoms)",
    img: "P4JZ2it.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["5"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Hassan of the Serenity (Poisonous Flower)",
    img: "nVYN9SH.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["3"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Tamamo Cat (Smiling Face)",
    img: "9MVCxXP.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["4"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Jeanne d'Arc (Prove)",
    img: "Lp5gcNz.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Ereshkigal (Ninkigal)",
    img: "AxxlZrk.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
      face: ["rin"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Kingprotea (Alter)",
    img: "OfHbMan.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
      face: ["sakura"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Kiyohime (Otohime)",
    img: "ggP65gF.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["3"],
      age: true,
      alt: true,
      costume: true,
      jp: true,
    }
  },
  /*
  {
    name: "Yan Qing",
    img: "P4JZ2it.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["4"],
    }
  },
  */
];
