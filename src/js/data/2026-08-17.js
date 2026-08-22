dataSetVersion = "2021-05-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Servant Class",
    key: "class",
    tooltip: "Check this to restrict to certain servant classes (double click to turn all boxes on).",
    checked: true,
    sub: [
      { name: "Saber", tooltip: "filter Saber-Class Servants", key: "saber" , checked: false},
      { name: "Archer", tooltip: "filter Archer-Class Servants", key: "archer", checked: false},
      { name: "Lancer", tooltip: "filter Lancer-Class Servants", key: "lancer", checked: false},
      { name: "Rider", tooltip: "filter Rider-Class Servants", key: "rider", checked: false},
      { name: "Caster", tooltip: "filter Caster-Class Servants", key: "caster", checked: false},
      { name: "Assassin", tooltip: "filter Assassin-Class Servants", key: "assassin", checked: false},
      { name: "Berserker", tooltip: "filter Berserker-Class Servants", key: "berserker", checked: false},
      { name: "Ruler", tooltip: "filter Ruler-Class Servants", key: "ruler", checked: false},
      { name: "Avenger", tooltip: "filter Avenger-Class Servants", key: "avenger", checked: false},
      { name: "Moon Cancer", tooltip: "filter Moon Cancer-Class Servants", key: "mooncancer", checked: false},
      { name: "Alter Ego", tooltip: "filter Alter Ego-Class Servants", key: "alterego", checked: false},
      { name: "Foreigner", tooltip: "filter Foreigner-Class Servants", key: "foreigner", checked: false},
      { name: "Pretender", tooltip: "filter Pretender-Class Servants", key: "pretender", checked: false},
      { name: "Shielder", tooltip: "filter Mash (lol)", key: "shielder", checked: false},
      { name: "Beast", tooltip: "filter Beast-Class Servants", key: "beast", checked: false},
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
      { name: "Arcade", tooltip: "filter to Servants who appear in FGO/Arcade", key: "arcade" },
    ]
  },
  {
    name: "No Alternate Costume Servants",
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
    tooltip: "Check to remove costume and Ascension alt-characters (i.e Summer Valkyries, Kama, Male Summer alts, etc.)",
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
    key: "arcadeOnly",
    tooltip: "Check this to exclude servants that have only been released in FGO/Arcade. (Require JP Servants to be allowed)",
    checked: true,
  },
  {
    name: "Exclude Non-Fate Collab Servants",
    key: "collab",
    tooltip: "Check this to exclude servants that are collabs with other Type-Moon Media.",
    checked: false,
  },
  {
    name: "Filter by Year (JP)",
    key: "yearJP",
    tooltip: "Check this to filter servants by release year in the Japanese server.",
    checked: false,
    sub: [
      { name: "2015", tooltip: "filter 2015 Servants", key: "2015" },
      { name: "2016", tooltip: "filter 2016 Servants", key: "2016" },
      { name: "2017", tooltip: "filter 2017 Servants", key: "2017" },
      { name: "2018", tooltip: "filter 2018 Servants", key: "2018" },
      { name: "2019", tooltip: "filter 2019 Servants", key: "2019" },
      { name: "2020", tooltip: "filter 2020 Servants", key: "2020" },
      { name: "2021", tooltip: "filter 2021 Servants", key: "2021" },
      { name: "2022", tooltip: "filter 2022 Servants", key: "2022" },
      { name: "2023", tooltip: "filter 2023 Servants", key: "2023" },
      { name: "2024", tooltip: "filter 2024 Servants", key: "2024" },
      { name: "2025", tooltip: "filter 2025 Servants", key: "2025" },
      { name: "2026", tooltip: "filter 2026 Servants", key: "2026" },
    ]
  },
  {
    name: "Filter by Year (NA)",
    key: "yearNA",
    tooltip: "Check this to filter servants by release year in the NA server.",
    checked: false,
    sub: [
      { name: "2017", tooltip: "filter 2017 Servants", key: "2017" },
      { name: "2018", tooltip: "filter 2018 Servants", key: "2018" },
      { name: "2019", tooltip: "filter 2019 Servants", key: "2019" },
      { name: "2020", tooltip: "filter 2020 Servants", key: "2020" },
      { name: "2021", tooltip: "filter 2021 Servants", key: "2021" },
      { name: "2022", tooltip: "filter 2022 Servants", key: "2022" },
      { name: "2023", tooltip: "filter 2023 Servants", key: "2023" },
      { name: "2024", tooltip: "filter 2024 Servants", key: "2024" },
      { name: "2025", tooltip: "filter 2025 Servants", key: "2025" },
      { name: "2026", tooltip: "filter 2026 Servants", key: "2026" },
    ]
  },
];

// Proper Servants

dataSet[dataSetVersion].characterData = [
  {
    name: "Mashu Kyrielight",
    img: "Mash.png",
    opts: {
      class: [ "shielder"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Artoria Pendragon",
    img: "Artoria_Saber.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Artoria Pendragon (Alter) (Saber)",
    img: "Artoria_Saber_Alter.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },

  {
    name: "Artoria Pendragon (Lily)",
    img: "Artoria_Lily.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      extra: ["welfare"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    },
  },
  {
    name: "Nero Claudius (Saber)",
    img: "Nero_Saber.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Siegfried",
    img: "Siegfried.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Gaius Julius Caesar",
    img: "Caesar.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["3"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Altera",
    img: "Altera.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Gilles de Rais (Saber)",
    img: "Gilles_Saber.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["3"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Chevalier d'Eon",
    img: "Chevalier_d'Eon.png",
    opts: {
      class: [ "saber"],
      gender: ["u"],
      rarity: ["4"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "EMIYA (Archer)",
    img: "EMIYA.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Gilgamesh",
    img: "Gilgamesh.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Robin Hood",
    img: "Robin_Hood.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Atalante",
    img: "Atalante.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Euryale",
    img: "Euryale.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["3"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Arash",
    img: "Arash.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["1"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Cú Chulainn (Lancer)",
    img: "Cú_Chulainn.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Elizabeth Báthory (Lancer)",
    img: "Elizabeth_Lancer.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Musashibō Benkei",
    img: "Musashibō_Benkei.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["2"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Cú Chulainn (Prototype)",
    img: "Cú_Chulainn_Prototype.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Leonidas I",
    img: "Leonidas_I.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["2"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Romulus",
    img: "Romulus.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Medusa (Rider)",
    img: "Medusa.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["3"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Georgios",
    img: "Georgios.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["2"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Edward Teach",
    img: "Edward_Teach.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["2"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Boudica",
    img: "Boudica.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["3"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Ushiwakamaru (Rider)",
    img: "Ushiwakamaru.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["3"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Alexander",
    img: "Alexander.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Marie Antoinette (Rider)",
    img: "Marie_Antoinette.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Martha (Rider)",
    img: "Martha.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Medea",
    img: "Medea.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["3"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Gilles de Rais (Caster)",
    img: "Gilles_Caster.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["3"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Hans Christian Andersen",
    img: "Hans.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["2"],
      yearJP: ["2015"],
      yearNA: ["2017"],
      age: true
    }
  },
  {
    name: "William Shakespeare",
    img: "William_Shakesphere.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["2"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Mephistopheles",
    img: "Mephi.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Wolfgang Amadeus Mozart",
    img: "Wolfgang_Mozart.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["1"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Zhuge Liang (Lord El-Melloi II)",
    img: "Zhuge.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Cú Chulainn (Caster)",
    img: "Cú_Chulainn_(Caster).png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["3"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Sasaki Kojirō",
    img: "Sasaki_Kojirō.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["1"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Hassan of the Cursed Arm",
    img: "Hassan_Cursed_Arm.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["2"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Stheno",
    img: "Stheno.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Jing Ke",
    img: "Jing_Ke.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["3"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Charles-Henri Sanson",
    img: "Charles-Henri.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["2"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Phantom of the Opera",
    img: "Phantom.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["2"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Mata Hari",
    img: "Mata_Hari.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["1"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Carmilla (Assassin)",
    img: "Carmilla.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Heracles",
    img: "Heracles.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Lancelot (Berserker)",
    img: "Lancelot_Berserker.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Lu Bu Fengxian",
    img: "Lu_Bu.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Spartacus",
    img: "Spartacus.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["1"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Sakata Kintoki (Berserker)",
    img: "Kintoki_berserker.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Vlad III",
    img: "Vlad_III.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Asterios",
    img: "Asterios.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["1"],
      yearJP: ["2015"],
      yearNA: ["2017"],
      age: true,
    }
  },
  {
    name: "Caligula",
    img: "Caligula.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["2"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Darius III",
    img: "Darius_III.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Kiyohime (Berserker)",
    img: "Kiyohime.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["3"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
      age: true,
    }
  },
  {
    name: "Eric Bloodaxe",
    img: "Eric_Bloodaxe.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["2"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Tamamo Cat",
    img: "Tamamo_Cat.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Jeanne d'Arc (Ruler)",
    img: "Jeanne_Ruler.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Orion",
    img: "Orion.png",
    opts: {
      class: [ "archer"],
      gender: ["m","f"],
      rarity: ["5"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Elizabeth Báthory (Halloween)",
    img: "Eliabeth_Caster.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
      yearJP: ["2015"],
      yearNA: ["2017"],
      alt: true,
    }
  },
  {
    name: "Tamamo no Mae (Caster)",
    img: "Tamamo_Caster.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "David",
    img: "David.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Hector",
    img: "Hector.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Francis Drake",
    img: "Francis_Drake.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Anne Bonny & Mary Read (Rider)",
    img: "Anne_Mary.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2015"],
      yearNA: ["2017"],
      pair: true,
    }
  },
  {
    name: "Anne Bonny (Rider)",
    img: "Anne.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2015"],
      yearNA: ["2017"],
      indi: true,
    }
  },
  {
    name: "Mary Reed (Rider)",
    img: "Mary.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2015"],
      yearNA: ["2017"],
      indi: true,
    }
  },
  {
    name: "Medea (Lily)",
    img: "Medea_Lily.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Okita Sōji (Saber)",
    img: "Okita_Saber.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Oda Nobunaga (Archer)",
    img: "Oda_Archer.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare","arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Scáthach (Lancer)",
    img: "Scáthach_Lancer.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Diarmuid Ua Duibhne (Lancer)",
    img: "Diarmuid_Lancer.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Fergus mac Róich",
    img: "Fergus.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Artoria Pendragon (Santa Alter)",
    img: "Artoria_Alter_Santa.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      extra: ["welfare", "santa"],
      yearJP: ["2015"],
      yearNA: ["2017"],
      alt: true,
    }
  },
  {
    name: "Nursery Rhyme",
    img: "Nursery.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2015"],
      yearNA: ["2017"],
      age: true,
    }
  },
  {
    name: "Jack the Ripper",
    img: "Jack_Ripper.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
      age: true,
    }
  },
  {
    name: "Mordred (Saber)",
    img: "Mordred_Saber.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Nikola Tesla",
    img: "Nikola.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Artoria Pendragon (Alter) (Lancer)",
    img: "Artoria_Alter_Lancer.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      extra: ["arcade"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Paracelsus von Hohenheim",
    img: "Paracelsus.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Charles Babbage",
    img: "Charles_Babbage.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Henry Jekyll & Hyde",
    img: "Henry_Jekyl.png",
    opts: {
      class: [ "assassin", "berserker"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Frankenstein",
    img: "Frankenstein.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2015"],
      yearNA: ["2017"],
    }
  },
  {
    name: "Solomon (False)",
    img: "Solomon_false.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2015"],
      yearNA: ["2017"],
      npc: true
    }
  },
  {
    name: "Arjuna",
    img: "Arjuna.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Karna",
    img: "Karna.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Mysterious Heroine X",
    img: "MHX.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Fionn mac Cumhaill",
    img: "Fionn.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Brynhildr (Lancer)",
    img: "Brynhildr.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Beowulf",
    img: "Beowulf.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Nero Claudius (Bride)",
    img: "Nero_Bride.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      extra: ["arcade"],
      yearJP: ["2016"],
      yearNA: ["2018"],
      alt: true,
    }
  },
  {
    name: "Ryōgi Shiki (Saber)",
    img: "Shiki_Saber.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2016"],
      yearNA: ["2018"],
      collab: true,
    }
  },
  {
    name: "Ryōgi Shiki (Assassin)",
    img: "Shiki_Assassin.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare", "extra"],
      yearJP: ["2016"],
      yearNA: ["2018"],
      alt: true,
      collab: true,
    }
  },
  {
    name: "Amakusa Shirō",
    img: "Amakusa_Shirou.png",
    opts: {
      class: [ "ruler"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Astolfo (Rider)",
    img: "Astolfo.png",
    opts: {
      class: [ "rider"],
      gender: ["m", "u"],
      rarity: ["4"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Gilgamesh (Child)",
    img: "Gilgamesh_Child.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2016"],
      yearNA: ["2018"],
      age: true,
    }
  },
  {
    name: "Edmond Dantès",
    img: "Edmond_Dantes.png",
    opts: {
      class: [ "avenger"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Florence Nightingale (Berserker)",
    img: "Florence_Night.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Cú Chulainn (Alter)",
    img: "Cu_Chu_Alter.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Queen Medb (Rider)",
    img: "Queen_Medb.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Helena Blavatsky (Caster)",
    img: "Helena_Caster.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Rama",
    img: "Rama.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Li Shuwen (Lancer)",
    img: "Li_Shuwen_Lancer.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Thomas Edison",
    img: "Thomas_Edison.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Geronimo",
    img: "Geronimo.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Billy the Kid",
    img: "Billy.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Jeanne d'Arc (Alter)",
    img: "Jeanne_Alter.png",
    opts: {
      class: [ "avenger"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      extra: ["arcade"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Angra Mainyu",
    img: "Angra_Mainyu.png",
    opts: {
      class: [ "avenger"],
      gender: ["m"],
      rarity: ["0"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Iskandar",
    img: "Iskandar.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "EMIYA (Assassin)",
    img: "Emiya_Assassin.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Hassan of the Hundred Faces",
    img: "Hassan_Hundred_Faces.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["3"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Irisviel (Dress of Heaven)",
    img: "Irisviel.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Shuten Dōji (Assassin)",
    img: "Shuten_Assassin.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  { 
    name: "Xuanzang Sanzang",
    img: "Xuanzang.png", 
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    } 
  },
  {
    name: "Minamoto no Raikō (Berserker)",
    img: "Raikou_Berserker.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Sakata Kintoki (Rider)",
    img: "Kintoki_Rider.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["welfare"],
      yearJP: ["2016"],
      yearNA: ["2018"],
      alt: true,
    }
  },
  {
    name: "Ibaraki Dōji (Berserker)",
    img: "Ibaraki_Berserker.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["arcade"],
      yearJP: ["2016"],
      yearNA: ["2018"],
      age: true,
    }
  },
  {
    name: "Fūma Kotarō",
    img: "Fuuma.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Ozymandias",
    img: "Ozyman.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Artoria Pendragon (Lancer)",
    img: "Artoria_Lancer.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      extra: ["arcade"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Nitocris",
    img: "Nitocris_Caster.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Lancelot (Saber)",
    img: "Lancelot_Saber.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Tristan",
    img: "Tristan.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Gawain",
    img: "Gawain.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Hassan of the Serenity",
    img: "Hassan_Serenity.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["3"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Tawara Tōta",
    img: "Tawara.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Bedivere",
    img: "Bedivere.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Leonardo Da Vinci (Caster)",
    img: "DaVinci_Caster.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Tamamo no Mae (Lancer)",
    img: "Tamamo_Lancer.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["summer", "arcade"],
      yearJP: ["2016"],
      yearNA: ["2018"],
      alt: true,
    }
  },
  {
    name: "Artoria Pendragon (Archer)",
    img: "Artoria_archer.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      extra: ["summer", "arcade"],
      yearJP: ["2016"],
      yearNA: ["2018"],
      alt: true,
    }
  },
  {
    name: "Marie Antoinette (Caster)",
    img: "Marie_Caster.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2016"],
      yearNA: ["2018"],
      alt: true,
    }
  },
  {
    name: "Anne Bonny & Mary Read (Archer)",
    img: "Anne_Mary_Archer.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2016"],
      yearNA: ["2018"],
      alt: true,
      pair: true,
    }
  },
  { name: "Anne Bonny (Archer)", 
    img: "Anne_Archer.png", 
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2016"],
      yearNA: ["2018"],
      alt: true,
      indi: true,
    } },
  {
    name: "Mary Reed (Archer)",
    img: "Mary_Archer.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2016"],
      yearNA: ["2018"],
      alt: true,
      indi: true,
    }
  },
  {
    name: "Mordred (Rider)",
    img: "Mordred_Rider.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      extra: ["summer"],
      yearJP: ["2016"],
      yearNA: ["2018"],
      alt: true,
    }
  },
  {
    name: "Scáthach (Assassin)",
    img: "Scathach_Assassin.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare", "summer"],
      yearJP: ["2016"],
      yearNA: ["2018"],
      alt: true,
    }
  },
  {
    name: "Kiyohime (Lancer)",
    img: "Kiyohime_Lancer.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2016"],
      yearNA: ["2018"],
      alt: true,
      age: true,
    }
  },
  {
    name: "Martha (Ruler)",
    img: "Martha_Ruler.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2016"],
      yearNA: ["2018"],
      alt: true,
    }
  },
  {
    name: "Illyasviel von Einzbern (Caster)",
    img: "Illya_Caster.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2016"],
      yearNA: ["2018"],
      age: true,
    }
  },
  {
    name: "Chloe von Einzbern (Archer)",
    img: "Chloe_Archer.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare", "arcade"],
      yearJP: ["2016"],
      yearNA: ["2018"],
      age: true,
    }
  },
  {
    name: "Elizabeth Báthory (Brave)",
    img: "Elizabeth_Saber.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
      yearJP: ["2016"],
      yearNA: ["2018"],
      alt: true,
    }
  },
  {
    name: "Cleopatra",
    img: "Cleopatra.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Vlad III (EXTRA)",
    img: "Vlad_III_Extra.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Jeanne d'Arc Alter Santa Lily",
    img: "Jeanne_Alter_Santa_Lily.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      extra: ["welfare", "santa"],
      yearJP: ["2016"],
      yearNA: ["2018"],
      age: true,
    }
  },
  {
    name: "Ishtar (Archer)",
    img: "Ishtar_Archer.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["5"],
      face: ["rin"],
      extra: ["arcade"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Enkidu",
    img: "Enkidu.png",
    opts: {
      class: [ "lancer"],
      gender: ["u"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Quetzalcoatl (Rider)",
    img: "Quetz_Rider.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Gilgamesh (Caster)",
    img: "Gilgamesh_Caster.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["arcade"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Medusa (Lancer)",
    img: "Medusa_Lancer.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2016"],
      yearNA: ["2018"],
      age: true,
    }
  },
  { name: "Gorgon", 
    img: "Gorgon.png", 
    opts: {
      class: [ "avenger"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    } 
  },
  {
    name: "Jaguar Man",
    img: "Jaguar_Man.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["3"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Tiamat",
    img: "Tiamat.png",
    opts: {
      class: [ "beast"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2016"],
      yearNA: ["2018"],
      npc: true,
    }
  },
  {
    name: "Merlin",
    img: "Merlin.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2016"],
      yearNA: ["2018"],
    }
  },
  {
    name: "Goetia",
    img: "Goetia.png",
    opts: {
      class: [ "beast"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2016"],
      yearNA: ["2018"],
      npc: true,
    }
  },
  {
    name: "Solomon (True)",
    img: "Solomon_true.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2016"],
      yearNA: ["2018"],
      npc: true,
    }
  },
  {
    name: "Miyamoto Musashi (Saber)",
    img: "Musashi_Saber.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "\"First Hassan\"",
    img: "First_Hassan.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "Mysterious Heroine X (Alter) (Berserker)",
    img: "MHX_Alter_Berserker.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      extra: ["arcade"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "James Moriarty (Archer)",
    img: "Moriarty_Archer.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "EMIYA (Alter)",
    img: "Emiya_Alter.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "Hessian Lobo",
    img: "Hessian_Lobo.png",
    opts: {
      class: [ "avenger"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "Yan Qing",
    img: "Yan_Qing.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "Arthur Pendragon (Prototype)",
    img: "Arthur_Prototype.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "Hijikata Toshizō",
    img: "Hijitaka.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "Chacha",
    img: "Chacha.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
      yearJP: ["2017"],
      yearNA: ["2019"],
      age: true,
    }
  },
  {
    name: "Meltryllis",
    img: "Melt_Alterego.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
      face: ["sakura"],
      extra: ["arcade"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "Passionlip",
    img: "Passionlip.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["4"],
      face: ["sakura"],
      extra: ["arcade"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "Suzuka Gozen",
    img: "Suzuka_Saber.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "BB",
    img: "BB.png",
    opts: {
      class: [ "mooncancer"],
      gender: ["f"],
      rarity: ["4"],
      face: ["sakura"],
      extra: ["welfare", "arcade"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "Sesshōin Kiara (Alter Ego)",
    img: "Kiara_Alterego.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "Beast III/R (Heaven's Hole)",
    img: "Beast_III_Heaven's_Hole.png",
    opts: {
      class: [ "beast"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2017"],
      yearNA: ["2019"],
      npc: true,
    }
  },
  {
    name: "Scheherazade",
    img: "Scheherazade.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "Wu Zetian (Assassin)",
    img: "Wu_Assassin.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2017"],
      yearNA: ["2019"],
      age: true,
    }
  },
  {
    name: "Penthesilea",
    img: "Penth.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "Christopher Columbus",
    img: "Christopher_Colombus.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "Sherlock Holmes",
    img: "Sherlock_Holmes.png",
    opts: {
      class: [ "ruler"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "Paul Bunyan",
    img: "Paul_Bunyan.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["1"],
      extra: ["welfare", "arcade"],
      yearJP: ["2017"],
      yearNA: ["2019"],
      age: true,
    }
  },
  {
    name: "Nero Claudius (Caster)",
    img: "Nero_Caster.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      extra: ["summer"],
      yearJP: ["2017"],
      yearNA: ["2019"],
      alt: true,
    }
  },
  {
    name: "Frankenstein (Saber)",
    img: "Frankenstein_Saber.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2017"],
      yearNA: ["2019"],
      alt: true,
    }
  },
  {
    name: "Nitocris (Assassin)",
    img: "Nitocris_Assassin.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer", "arcade"],
      yearJP: ["2017"],
      yearNA: ["2019"],
      alt: true,
    }
  },
  {
    name: "Oda Nobunaga (Berserker)",
    img: "Oda_Nobunaga_Berserker.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2017"],
      yearNA: ["2019"],
      alt: true,
    }
  },
  {
    name: "Artoria Pendragon (Alter) (Rider)",
    img: "Artoria_Alter_Rider.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      extra: ["summer", "arcade"],
      yearJP: ["2017"],
      yearNA: ["2019"],
      alt: true,
    }
  },
  {
    name: "Helena Blavatsky (Archer)",
    img: "Helena_archer.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2017"],
      yearNA: ["2019"],
      alt: true,
    }
  },
  {
    name: "Minamoto no Raikō (Lancer)",
    img: "Raikou_Lancer.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer", "arcade"],
      yearJP: ["2017"],
      yearNA: ["2019"],
      alt: true,
    }
  },
  {
    name: "Ishtar (Rider)",
    img: "Ishtar_Rider.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      face: ["rin"],
      extra: ["welfare", "summer"],
      yearJP: ["2017"],
      yearNA: ["2019"],
      alt: true,
    }
  },
  {
    name: "Pārvatī",
    img: "Parvati.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      face: ["sakura"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "Tomoe Gozen (Archer)",
    img: "Tomoe_Archer.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "Mochizuki Chiyome",
    img: "Chiyome.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "Hōzōin Inshun",
    img: "Hōzōin_Inshun.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "Yagyū Tajima no Kami Munenori",
    img: "Yagyuu.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "Katou \"Black Kite\" Danzo",
    img: "Katou_Danzou.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "Osakabehime",
    img: "Osakabahime.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "Mecha Eli-chan",
    img: "Mecha_Eli.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "Mecha Eli-chan Mk.II",
    img: "Mecha_Eli_II.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "Circe",
    img: "Circe.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "Nezha",
    img: "Nezha.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "Queen of Sheba",
    img: "Queen_of_Sheba.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "Abigail Williams",
    img: "Abigail.png",
    opts: {
      class: [ "foreigner"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2017"],
      yearNA: ["2019"],
      age: true,
    }
  },
  {
    name: "Ereshkigal",
    img: "Eresh.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
      face: ["rin"],
      extra: ["arcade"],
      yearJP: ["2017"],
      yearNA: ["2019"],
    }
  },
  {
    name: "Altera the San(ta)",
    img: "Altera_Santa.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare", "santa"],
      yearJP: ["2017"],
      yearNA: ["2019"],
      alt: true,
    }
  },
  {
    name: "Katsushika Hokusai (Foreigner)",
    img: "Hokusai_foreigner.png",
    opts: {
      class: [ "foreigner"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2018"],
      yearNA: ["2020"],
    }
  },
  {
    name: "Semiramis",
    img: "Semiramis.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2018"],
      yearNA: ["2020"],
    }
  },
  {
    name: "Asagami Fujino",
    img: "Asagami.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["arcade"],
      collab: true,
      yearJP: ["2018"],
      yearNA: ["2020"],
    }
  },
  {
    name: "Anastasia (Caster)",
    img: "Anastasia_Caster.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2018"],
      yearNA: ["2020"],
    }
  },
  {
    name: "Atalanta (Alter)",
    img: "Atalante_Alter.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2018"],
      yearNA: ["2020"],
    }
  },
  {
    name: "Avicebron",
    img: "Aviceabron.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2018"],
      yearNA: ["2020"],
    }
  },
  {
    name: "Antonio Salieri",
    img: "Antonio_Salieri.png",
    opts: {
      class: [ "avenger"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2018"],
      yearNA: ["2020"],
    }
  },
  {
    name: "Ivan the Terrible",
    img: "Ivan_Terrible.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2018"],
      yearNA: ["2020"],
    }
  },
  {
    name: "Achilles",
    img: "Achilles.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2018"],
      yearNA: ["2020"],
    }
  },
  {
    name: "Chiron",
    img: "Chiron.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2018"],
      yearNA: ["2020"],
    }
  },
  {
    name: "Sieg",
    img: "Sieg.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["welfare"],
      yearJP: ["2018"],
      yearNA: ["2020"],
    }
  },
  {
    name: "Okita Sōji (Alter) (Alterego)",
    img: "Okita_alter_alterego.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      yearJP: ["2018"],
      yearNA: ["2020"],
    }
  },
  {
    name: "Okada Izō",
    img: "Okada_Izou.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["3"],
      extra: ["arcade"],
      yearJP: ["2018"],
      yearNA: ["2020"],
    }
  },
  {
    name: "Sakamoto Ryōma (Rider)",
    img: "Sakamoto_Oryou_Rider.png",
    opts: {
      class: [ "rider"],
      gender: ["m", "f"],
      rarity: ["4"],
      extra: ["welfare"],
      yearJP: ["2018"],
      yearNA: ["2020"],
      pair: true,
    }
  },
  {
    name: "Sakamoto Ryōma (Rider)",
    img: "Sakamoto_Rider.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["welfare"],
      yearJP: ["2018"],
      yearNA: ["2020"],
      indi: true,
    }
  },
  {
    name: "Oryō",
    img: "Oryou_Rider.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
      yearJP: ["2018"],
      yearNA: ["2020"],
      indi: true,
    }
  },
  {
    name: "Napoléon",
    img: "Napoleon.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2018"],
      yearNA: ["2020"],
    }
  },
  {
    name: "Sigurd",
    img: "Sigurd.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2018"],
      yearNA: ["2020"],
    }
  },
  {
    name: "Valkyrie",
    img: "Valkyrie_Ortlinde.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2018"],
      yearNA: ["2020"],
      pair: true,
    }
  },
  {
    name: "Ortlinde (Lancer)",
    img: "Valkyrie_Ortlinde.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2018"],
      yearNA: ["2020"],
      indi: true,
    }
  },
  {
    name: "Hildr (Lancer)",
    img: "Valkyrie_Hildr.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2018"],
      yearNA: ["2020"],
      indi: true,
    }
  },
  {
    name: "Thrúd (Lancer)",
    img: "Valkyrie_Thrud.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2018"],
      yearNA: ["2020"],
      indi: true,
    }
  },
  {
    name: "Scáthach-Skaði (Caster)",
    img: "Scathach-Skadi.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2018"],
      yearNA: ["2020"],
    }
  },
  {
    name: "Jeanne d'Arc (Archer)",
    img: "Jeanne_Archer.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      extra: ["summer", "arcade"],
      yearJP: ["2018"],
      yearNA: ["2020"],
      alt: true,
    }
  },
  {
    name: "Ibaraki Dōji (Lancer)",
    img: "Ibaraki_Douji_Lancer.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2018"],
      yearNA: ["2020"],
      alt: true,
      age: true,
    }
  },
  {
    name: "Ushiwakamaru (Assassin)",
    img: "Ushiwakamaru_Assassin.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2018"],
      yearNA: ["2020"],
      alt: true,
    }
  },
  {
    name: "Jeanne d'Arc (Alter) (Berserker)",
    img: "Jeanne_Alter_Berserker.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      extra: ["welfare", "summer", "arcade"],
      yearJP: ["2018"],
      yearNA: ["2020"],
      alt: true,
    }
  },
  {
    name: "BB (Summer)",
    img: "BB_Summer.png",
    opts: {
      class: [ "mooncancer"],
      gender: ["f"],
      rarity: ["5"],
      face: ["sakura"],
      extra: ["summer", "arcade"],
      yearJP: ["2018"],
      yearNA: ["2020"],
      alt: true,
    }
  },
  {
    name: "Queen Medb (Saber)",
    img: "Queen_Medb_Saber.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer", "arcade"],
      yearJP: ["2018"],
      yearNA: ["2020"],
      alt: true,
    }
  },
  {
    name: "Mysterious Heroine XX",
    img: "MHXX.png",
    opts: {
      class: [ "foreigner"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      extra: ["summer"],
      yearJP: ["2018"],
      yearNA: ["2020"],
      alt: true,
    }
  },
  {
    name: "Diarmuid Ua Duibhne (Saber)",
    img: "Diarmuid_Saber.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2018"],
      yearNA: ["2020"],
    }
  },
  {
    name: "Sitonai",
    img: "Sitonai.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2018"],
      yearNA: ["2020"],
      age: true,
    }
  },
  {
    name: "Shuten Dōji (Caster)",
    img: "Shuten_Caster.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
      yearJP: ["2018"],
      yearNA: ["2020"],
      alt: true,
    }
  },

  {
    name: "Xiang Yu",
    img: "Xiang_Yu.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2018"],
      yearNA: ["2020"],
    }
  },
  {
    name: "Prince of Lan Ling",
    img: "Prince_of_Lan.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],yearJP: ["2018"],
      yearNA: ["2020"],
    }
  },
  {
    name: "Qin Liangyu",
    img: "Qin_Liangyu.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2018"],
      yearNA: ["2020"],
    }
  },
  {
    name: "Qin Shi Huang",
    img: "Qin_Shi.png",
    opts: {
      class: [ "ruler"],
      gender: ["u"],
      rarity: ["5"],
      yearJP: ["2018"],
      yearNA: ["2020"],
    }
  },
  {
    name: "Yu Mei-ren (Assassin)",
    img: "Yu_Mei_Assassin.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2018"],
      yearNA: ["2020"],
    }
  },
  {
    name: "Red Hare",
    img: "Red_Hare.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2018"],
      yearNA: ["2020"],
    }
  },
  {
    name: "Bradamante",
    img: "Bradamante.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2018"],
      yearNA: ["2020"],
    }
  },
  {
    name: "Quetzalcoatl (Samba/Santa)",
    img: "Quetz_Santa_Ruler.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare", "santa"],
      yearJP: ["2018"],
      yearNA: ["2020"],
      alt: true,
    }
  },
  {
    name: "Beni-Enma",
    img: "Beni-Enma.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2019"],
      yearNA: ["2021"],
      age: true,
    }
  },
  {
    name: "Li Shuwen (Assassin)",
    img: "Li_Shuwen_Assassin.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2019"],
      yearNA: ["2021"],
    }
  },
  {
    name: "Miyu Edelfelt",
    img: "Miyu.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["arcade"],
      yearJP: ["2019"],
      yearNA: ["2021"],
    }
  },
  {
    name: "Murasaki Shikibu (Caster)",
    img: "Murasaki_Caster.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2019"],
      yearNA: ["2021"],
    }
  },
  {
    name: "Kingprotea",
    img: "Kingprotea.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
      face: ["sakura"],
      yearJP: ["2019"],
      yearNA: ["2021"],
    }
  },
  {
    name: "Kama (Assassin) (Child)",
    img: "Kama_Assassin_1.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["5"],
      face: ["sakura"],
      yearJP: ["2019"],
      yearNA: ["2021"],
      age: true,
    }
  },
  {
    name: "Kama (Assassin)",
    img: "Kama_Assassin.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["5"],
      face: ["sakura"],
      yearJP: ["2019"],
      yearNA: ["2021"],
      costume: true,
    }
  },
  {
    name: "Beast III/L (Demon Lord of Lust)",
    img: "Kama_Beast.png",
    opts: {
      class: [ "beast"],
      gender: ["f"],
      rarity: ["5"],
      face: ["sakura"],
      yearJP: ["2019"],
      yearNA: ["2021"],
      npc: true,
    }
  },
  {
    name: "Sima Yi (Reines)",
    img: "Reines.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2019"],
      yearNA: ["2021"],
    }
  },
  {
    name: "Astraea",
    img: "Astrea.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["arcade"],
      yearJP: ["2019"],
      yearNA: ["2021"],
    }
  },
  {
    name: "Gray",
    img: "Gray.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      extra: ["welfare", "arcade"],
      yearJP: ["2019"],
      yearNA: ["2021"],
    }
  },
  {
    name: "Ganesha (Jinako Carigiri)",
    img: "Ganesha_Jinako.png",
    opts: {
      class: [ "mooncancer"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2019"],
      yearNA: ["2021"],
    }
  },
  {
    name: "Lakshmi Bai",
    img: "Lakshmi_Bai.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      yearJP: ["2019"],
      yearNA: ["2021"],
    }
  },
  {
    name: "William Tell",
    img: "William_Tell.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2019"],
      yearNA: ["2021"],
    }
  },
  {
    name: "Arjuna (Alter)",
    img: "Arjuna_Alter.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2019"],
      yearNA: ["2021"],
    }
  },
  {
    name: "Aśvatthāman",
    img: "Aśvatthāman.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2019"],
      yearNA: ["2021"],
    }
  },
  {
    name: "Asclepius",
    img: "Asclepius.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2019"],
      yearNA: ["2021"],
    }
  },
  {
    name: "Demon King Nobunaga",
    img: "Nobunga_Demon_King.png",
    opts: {
      class: [ "avenger"],
      gender: ["u"],
      rarity: ["5"],
      yearJP: ["2019"],
      yearNA: ["2021"],
    }
  },
  {
    name: "Mori Nagayoshi",
    img: "Mori_Nagayoshi.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2019"],
      yearNA: ["2021"],
    }
  },
  {
    name: "Nagao Kagetora",
    img: "Nagao_Lancer.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
      yearJP: ["2019"],
      yearNA: ["2021"],
    }
  },
  {
    name: "Leonardo Da Vinci (Rider)",
    img: "DaVinci_Rider.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2019"],
      yearNA: ["2021"],
      age: true,
    }
  },
  {
    name: "Jason",
    img: "Jason.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["1"],
      yearJP: ["2019"],
      yearNA: ["2021"],
    }
  },
  {
    name: "Paris",
    img: "Paris.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["2"],
      yearJP: ["2019"],
      yearNA: ["2021"],
      age: true,
    }
  },
  {
    name: "Gareth (Lancer)",
    img: "Gareth.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["2"],
      yearJP: ["2019"],
      yearNA: ["2021"],
    }
  },
  {
    name: "Bartholomew Roberts",
    img: "Bartholomew.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["1"],
      yearJP: ["2019"],
      yearNA: ["2021"],
    }
  },
  {
    name: "Chen Gong",
    img: "Chen_Gong.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["2"],
      yearJP: ["2019"],
      yearNA: ["2021"],
    }
  },
  {
    name: "Charlotte Corday (Assassin)",
    img: "Charlotte_Corday_Assassin.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["1"],
      yearJP: ["2019"],
      yearNA: ["2021"],
    }
  },
  {
    name: "Salome",
    img: "Salome.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["2"],
      yearJP: ["2019"],
      yearNA: ["2021"],
    }
  },
  {
    name: "Miyamoto Musashi (Berserker)",
    img: "Musashi_Berserker.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["summer", "arcade"],
      yearJP: ["2019"],
      yearNA: ["2021"],
      alt: true,
    }
  },
  {
    name: "Osakabehime (Archer)",
    img: "Osakabahime_Archer.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2019"],
      yearNA: ["2021"],
      alt: true,
    }
  },
  {
    name: "Carmilla (Rider)",
    img: "Carmilla_Rider.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2019"],
      yearNA: ["2021"],
      alt: true,
    }
  },
  {
    name: "Katsushika Hokusai (Saber)",
    img: "Hokusai_Saber.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare", "summer", "arcade"],
      yearJP: ["2019"],
      yearNA: ["2021"],
      alt: true,
    }
  },
  {
    name: "Artoria Pendragon (Ruler)",
    img: "Artoria_Ruler.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      extra: ["summer", "arcade"],
      yearJP: ["2019"],
      yearNA: ["2021"],
      alt: true,
    }
  },
  {
    name: "Mysterious Alter Ego Λ",
    img: "Melt_Lancer.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      face: ["sakura"],
      extra: ["summer"],
      yearJP: ["2019"],
      yearNA: ["2021"],
      alt: true,
    }
  },
  {
    name: "Okita J Sōji (Assassin)",
    img: "Okita_Assassin.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      extra: ["summer"],
      yearJP: ["2019"],
      yearNA: ["2021"],
      alt: true,
    }
  },
  {
    name: "Space Ishtar",
    img: "Space_Ishtar.png",
    opts: {
      class: [ "avenger"],
      gender: ["f"],
      rarity: ["5"],
      face: ["rin"],
      yearJP: ["2019"],
      yearNA: ["2021"],
    }
  },
  {
    name: "Calamity Jane",
    img: "Calamity_Jane.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2019"],
      yearNA: ["2021"],
    }
  },
  {
    name: "Astolfo (Saber)",
    img: "Astolfo_Saber.png",
    opts: {
      class: [ "saber"],
      gender: ["m", "u"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2019"],
      yearNA: ["2021"],
      alt: true,
    }
  },
  {
    name: "Florence Nightingale (Santa)",
    img: "Florence_Nightinggale_Santa.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare", "santa"],
      yearJP: ["2019"],
      yearNA: ["2021"],
      alt: true,
    }
  },
  {
    name: "Super Orion",
    img: "Super_Orion.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2019"],
      yearNA: ["2021"],
    }
  },
  {
    name: "Mandricardo",
    img: "Mandricardio.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2019"],
      yearNA: ["2021"],
    }
  },
  {
    name: "Europa",
    img: "Europa.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2019"],
      yearNA: ["2021"],
    }
  },
  {
    name: "Yang Guifei",
    img: "Yang_Guifei.png",
    opts: {
      class: [ "foreigner"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2020"],
      yearNA: ["2022"],
    }
  },
  {
    name: "Sei Shōnagon (Archer)",
    img: "Sei_Archer.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2020"],
      yearNA: ["2022"],
    }
  },
  {
    name: "Odysseus",
    img: "Odysseus.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2020"],
      yearNA: ["2022"],
    }
  },
  {
    name: "Dioscuri",
    img: "Dioscuri.png",
    opts: {
      class: [ "saber"],
      gender: ["m","f"],
      rarity: ["5"],
      yearJP: ["2020"],
      yearNA: ["2022"],
      pair: true,
    }
  },
  {
    name: "Dioscuri (Castor)",
    img: "Dioscuri_Castor.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2020"],
      yearNA: ["2022"],
      indi: true,
    }
  },
  {
    name: "Dioscuri (Pollux)",
    img: "Dioscuri_Pollux.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2020"],
      yearNA: ["2022"],
      indi: true,
    }
  },
  {
    name: "Caenis (Lancer)",
    img: "Caenis_Lancer.png",
    opts: {
      class: [ "lancer"],
      gender: ["f","u"],
      rarity: ["4"],
      yearJP: ["2020"],
      yearNA: ["2022"],
    }
  },
  {
    name: "Romulus-Quirinus",
    img: "Romulus_Quirinus.png",
    opts: {
      class: [ "lancer"],
      gender: ["u"],
      rarity: ["5"],
      yearJP: ["2020"],
      yearNA: ["2022"],
    }
  },
  {
    name: "Voyager",
    img: "Voyager.png",
    opts: {
      class: [ "foreigner"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2020"],
      yearNA: ["2022"],
      age: true,
    }
  },
  {
    name: "Kijyo Kōyō",
    img: "Kijyo_Kouyou.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2020"],
      yearNA: ["2022"],
    }
  },
  {
    name: "Utsumi Erice (Lancer)",
    img: "Utsumi_Erice.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
      yearJP: ["2020"],
      yearNA: ["2022"],
      age: true,
    }
  },
  {
    name: "Artoria Caster",
    img: "Artoria_Caster.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      yearJP: ["2020"],
      yearNA: ["2022"],
    }
  },
  {
    name: "Sesshōin Kiara (Moon Cancer)",
    img: "Kiara_MoonCancer.png",
    opts: {
      class: [ "mooncancer"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["summer"],
      yearJP: ["2020"],
      yearNA: ["2022"],
      alt: true,
    }
  },
  {
    name: "Illyasviel von Einzbern (Archer)",
    img: "Illya_Archer.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2020"],
      yearNA: ["2022"],
      alt: true,
      age: true,
    }
  },
  {
    name: "Brynhildr (Berserker)",
    img: "Bryn_berserker.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2020"],
      yearNA: ["2022"],
      alt: true,
    }
  },
  {
    name: "Yu Mei-ren (Lancer)",
    img: "Yu_Mei_Rin_Lancer.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer", "welfare", "arcade"],
      yearJP: ["2020"],
      yearNA: ["2022"],
      alt: true,
    }
  },
  {
    name: "Abigail Williams (Summer)",
    img: "Abigail_Summer.png",
    opts: {
      class: [ "foreigner"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["summer", "arcade"],
      yearJP: ["2020"],
      yearNA: ["2022"],
      alt: true,
      age: true,
    }
  },
  {
    name: "Tomoe Gozen (Saber)",
    img: "Tomoe_Gozen_Saber.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2020"],
      yearNA: ["2022"],
      alt: true,
    }
  },
  {
    name: "Murasaki Shikibu (Rider)",
    img: "Murasaki_Rider.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2020"],
      yearNA: ["2022"],
      alt: true,
    }
  },
  {
    name: "Himiko",
    img: "Himiko.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2020"],
      yearNA: ["2022"],
    }
  },
  {
    name: "Saitō Hajime",
    img: "Saito_Hajime.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2020"],
      yearNA: ["2022"],
    }
  },
  {
    name: "Oda Nobukatsu",
    img: "Oda_Nobukatsu.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["1"],
      yearJP: ["2020"],
      yearNA: ["2022"],
    }
  },
  {
    name: "Van Gogh (Foreigner)",
    img: "Van_Gogh_Foreigner.png",
    opts: {
      class: [ "foreigner"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2020"],
      yearNA: ["2022"],
      age: true,
    }
  },
  {
    name: "Nemo",
    img: "Nemo.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2020"],
      yearNA: ["2022"],
    }
  },
  {
    name: "Ashiya Dōman",
    img: "Assy_Doughboy.png",
    opts: {
      class: [ "alterego"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2020"],
      yearNA: ["2022"],
    }
  },
  {
    name: "Watanabe-no-Tsuna",
    img: "watanabe_tsuna.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2020"],
      yearNA: ["2022"],
    }
  },
  {
    name: "Ibuki Dōji (Saber)",
    img: "Ibuki_Saber.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2020"],
      yearNA: ["2022"],
    }
  },
  {
    name: "Vritra",
    img: "Vritra.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2020"],
      yearNA: ["2022"],
    }
  },
  {
    name: "Karna (Santa)",
    img: "Karna_Santa.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["welfare", "santa"],
      yearJP: ["2020"],
      yearNA: ["2022"],
      alt: true,
    }
  },
  {
    name: "Senji Muramasa",
    img: "Senji_Muramasa.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2021"],
      yearNA: ["2023"],
    }
  },
  {
    name: "Taira-no-Kagekiyo",
    img: "Taira_Ushi_Avenger.png",
    opts: {
      class: [ "avenger"],
      gender: ["u"],
      rarity: ["5"],
      yearJP: ["2021"],
      yearNA: ["2023"],
    }
  },
  {
    name: "Kiichi Hōgen",
    img: "Kiichi_Hogen.png",
    opts: {
      class: [ "assassin"],
      gender: ["u", "f"],
      rarity: ["4"],
      extra: ["welfare"],
      yearJP: ["2021"],
      yearNA: ["2023"],
    }
  },
  {
    name: "Amor (Caren)",
    img: "Amor_Caren.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2021"],
      yearNA: ["2023"],
    }
  },
  {
    name: "Galatea",
    img: "Galatea.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2021"],
      yearNA: ["2023"],
    }
  },
  {
    name: "Miss Crane",
    img: "Miss_Crane.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2021"],
      yearNA: ["2023"],
    }
  },
  {
    name: "Mysterious Idol X (Alter) (Foreigner)",
    img: "MHX_Alter_Foreigner_Idol.png",
    opts: {
      class: [ "foreigner"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
    }
  },
  {
    name: "Morgan",
    img: "Morgan.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      extra: ["arcade"],
      yearJP: ["2021"],
      yearNA: ["2023"],
    }
  },
  {
    name: "Barghest (Saber)",
    img: "Barghest.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2021"],
      yearNA: ["2023"],
    }
  },
  {
    name: "Baobhan Sith (Archer)",
    img: "Baobhan_Sith_Archer.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2021"],
      yearNA: ["2023"],
    }
  },
  {
    name: "Mélusine (Lancer)",
    img: "Melusine.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2021"],
      yearNA: ["2023"],
    }
  },
  {
    name: "Percival",
    img: "Percival.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2021"],
      yearNA: ["2023"],
    }
  },
  {
    name: "Koyanskaya of Light",
    img: "Koyan_Light_Assassin.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2021"],
      yearNA: ["2023"],
    }
  },
  {
    name: "Habetrot",
    img: "Habetrot.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2021"],
      yearNA: ["2023"],
    }
  },
  {
    name: "Oberon",
    img: "Oberon.png",
    opts: {
      class: [ "pretender"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2021"],
      yearNA: ["2023"],
    }
  },
  {
    name: "Okita Sōji (Alter) (Saber)",
    img: "Okita_Alter_Saber_Pair.png",
    opts: {
      class: [ "saber"],
      gender: ["m","f","u"],
      rarity: ["5"],
      extra: ["summer"],
      face: ["saber"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
      pair: true,
    }
  },
  {
    name: "Okita Sōji (Alter) (Saber)",
    img: "Okita_Alter_Saber_Single.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["summer"],
      face: ["saber"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
      indi: true,
    }
  },
  {
    name: "Rengoku",
    img: "Okita_Alter_Saber_Rengoku.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["summer"],
      face: ["saber"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
      indi: true,
    }
  },
  {
    name: "Anastasia & Viy (Archer)",
    img: "Anastasia_Archer.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
    }
  },
  {
    name: "Charlotte Corday (Caster)",
    img: "Charlotte_Caster.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
    }
  },
  {
    name: "Leonardo Da Vinci (Ruler)",
    img: "DaVinci_Ruler.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer", "welfare"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
    }
  },
  {
    name: "Kama (Avenger) (Child)",
    img: "Kama_Avenger_1.png",
    opts: {
      class: [ "avenger"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["summer"],
      face: ["sakura"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
      age: true,
    }
  },
  {
    name: "Kama (Avenger)",
    img: "Kama_Avenger.png",
    opts: {
      class: [ "avenger"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["summer"],
      face: ["sakura"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Caenis (Rider)",
    img: "Caenis_Rider.png",
    opts: {
      class: [ "rider"],
      gender: ["f", "u"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
    }
  },
  {
    name: "Sei Shōnagon (Berserker)",
    img: "Sei_Shounagon_Berserker.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
    }
  },
  {
    name: "Jacques de Molay (Foreigner)",
    img: "Jacques_de_Molay_Foreigner.png",
    opts: {
      class: [ "foreigner"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2021"],
      yearNA: ["2023"],
    }
  },
  {
    name: "Zenobia",
    img: "Zenobia.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2021"],
      yearNA: ["2023"],
    }
  },
  {
    name: "Elizabeth Báthory (Cinderella)",
    img: "Elizabeth_Cinderella_Rider.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
    }
  },
  {
    name: "Izumo-no-Okuni",
    img: "Okuni_duo.png",
    opts: {
      class: [ "caster"],
      gender: ["f", "m"],
      rarity: ["5"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      pair: true,
    }
  },
  {
    name: "Izumo-no-Okuni",
    img: "Okuni_Single.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      indi: true,
    }
  },
  {
    name: "Zan Zaburō",
    img: "Okuni_Zan.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      indi: true,
    }
  },
  {
    name: "Mysterious Ranmaru X",
    img: "Mysterious_Ranmaru_X.png",
    opts: {
      class: [ "avenger"],
      gender: ["u"],
      rarity: ["4"],
      extra: ["welfare"],
      yearJP: ["2021"],
      yearNA: ["2023"],
    }
  },
  {
    name: "Sakamoto Ryōma (Lancer)",
    img: "Ryoma_Lancer.png",
    opts: {
      class: [ "lancer"],
      gender: ["m", "f"],
      rarity: ["5"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      pair: true,
      alt: true,
    }
  },
  {
    name: "Sakamoto Ryōma (Lancer)",
    img: "Ryoma_Lancer_Single.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      indi: true,
      alt: true,
    }
  },
  {
    name: "Oryō (Lancer)",
    img: "Ryoma_Lancer_Oryou.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      indi: true,
      alt: true,
    }
  },
  {
    name: "Martha (Santa)",
    img: "Martha_Santa.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare", "santa"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
    }
  },
  {
    name: "Taigong Wang",
    img: "Taigong_Wang.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2021"],
      yearNA: ["2023"],
    }
  },
  {
    name: "Dobrynya Nikitich (Rider)",
    img: "Dobrynya.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2021"],
      yearNA: ["2023"],
    }
  },
  {
    name: "Beast IV: L",
    img: "Beast_IV.png",
    opts: {
      class: [ "beast"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      npc: true,
    }
  },
  {
    name: "Koyanskaya of Darkness",
    img: "Koyanskaya_of_Darkness.png",
    opts: {
      class: [ "foreigner"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2022"],
      yearNA: ["2024"],
    }
  },
  {
    name: "Hephaestion",
    img: "Hephestion.png",
    opts: {
      class: [ "pretender"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2022"],
      yearNA: ["2024"],
    }
  },
  {
    name: "Manannán mac Lir (Bazett)",
    img: "Bazzette.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2022"],
      yearNA: ["2024"],
    }
  },
  {
    name: "Hai Bà Trưng (Trung Sisters)",
    img: "Trung_Sisters.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      pair: true,
    }
  },
  {
    name: "Trưng Trắc",
    img: "Trung_Trac.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      indi: true,
    }
  },
  {
    name: "Trưng Nhị",
    img: "Trung_Nhi.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      indi: true,
    }
  },
  {
    name: "Taisui Xingjun",
    img: "Taisui.png",
    opts: {
      class: [ "alterego"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["welfare"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      age: true,
    }
  },
  {
    name: "Super Bunyan",
    img: "SuperBunyan.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      pair: true,
      alt:true,
    }
  },
  {
    name: "Super Bunyan",
    img: "SuperBunyan_3_Single.png",
    opts: {
      class: ["alterego"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      indi: true,
      alt:true,
      age: true,
    }
  },
  {
    name: "Rider (Super Bunyan)",
    img: "SuperBunyan_3_Rider.png",
    opts: {
      class: [ "rider", "alterego"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      indi: true,
      alt:true,
    }
  },
  {
    name: "Assassin (Super Bunyan)",
    img: "SuperBunyan_3_Assassin.png",
    opts: {
      class: [ "assassin", "alterego"],
      gender: ["f", "u"],
      rarity: ["5"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      indi: true,
      alt:true,
    }
  },
  {
    name: "Mike Fink",
    img: "SuperBunyan_MikeFink.png",
    opts: {
      class: [ "alterego"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      indi: true,
      alt:true,
    }
  },
  {
    name: "Daikokuten",
    img: "Daikouten.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2022"],
      yearNA: ["2024"],
    }
  },
  {
    name: "Mary Anning",
    img: "Mary_Anning.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["1"],
      yearJP: ["2022"],
      yearNA: ["2024"],
    }
  },
  {
    name: "Constantine XI",
    img: "Constaintine_XI.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2022"],
      yearNA: ["2024"],
    }
  },
  {
    name: "Charlemagne",
    img: "Charlemagne.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2022"],
      yearNA: ["2024"],
    }
  },
  {
    name: "Roland",
    img: "Roland.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2022"],
      yearNA: ["2024"],
    }
  },
  {
    name: "Kriemhild",
    img: "Kriem.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2022"],
      yearNA: ["2024"],
    }
  },
  {
    name: "James Moriarty (Ruler)",
    img: "Moriarty_Ruler.png",
    opts: {
      class: [ "ruler"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      alt: true,
    }
  },
  {
    name: "Don Quixote",
    img: "Don_Q.png",
    opts: {
      class: [ "lancer"],
      gender: ["m","f"],
      rarity: ["4"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      pair: true,
    }
  },
  {
    name: "Don Quixote",
    img: "Don_Single.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      indi: true,
    }
  },
  {
    name: "Sancho Panza",
    img: "Don_Sancho.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      indi: true,
    }
  },
  {
    name: "Zhang Jue",
    img: "Zhang_Jue.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2022"],
      yearNA: ["2024"],
    }
  },
  {
    name: "Kyokutei Bakin",
    img: "Kyokutei_Bakin.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2022"],
      yearNA: ["2024"],
    }
  },
  {
    name: "Minamoto-no-Tametomo",
    img: "Tametomo.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2022"],
      yearNA: ["2024"],
    }
  },
  {
    name: "Archetype: Earth",
    img: "Archetype_Earth.png",
    opts: {
      class: [ "mooncancer"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      collab: true,
    }
  },
  {
    name: "Xu Fu (Alter Ego)",
    img: "XuFu_Alterego.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["3"],
      yearJP: ["2022"],
      yearNA: ["2024"],
    }
  },
  {
    name: "Lady Avalon",
    img: "Lady_Avalon.png",
    opts: {
      class: [ "pretender"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["summer"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      alt: true,
    }
  },
  {
    name: "Gareth (Saber)",
    img: "Gareth_Saber.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      alt: true,
    }
  },
  {
    name: "Ibuki Dōji (Berserker)",
    img: "Ibuki_Douji_Berserker.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["summer"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      alt: true,
    }
  },
  {
    name: "Utsumi Erice (Avenger)",
    img: "Utsumi_Erice_Avenger.png",
    opts: {
      class: [ "avenger"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      alt: true,
      age: true,
    }
  },
  {
    name: "Scáthach-Skaði (Ruler)",
    img: "Scathach_Skadi_Ruler.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["summer"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      alt: true,
    }
  },
  {
    name: "Wu Zetian (Caster)",
    img: "Wu_Caster.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      alt: true,
    }
  },
  {
    name: "Thrúd (Assassin)",
    img: "Valk_Thrud_Assassin.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer", "welfare"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      alt: true,
    }
  },
  {
    name: "Rindr",
    img: "Valk_Rindr_Assassin.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer", "welfare"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Hildr (Assassin)",
    img: "Valk_Hildr_Assassin.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer", "welfare"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      alt: true,
    }
  },
  {
    name: "Ölrún",
    img: "Valk_Orlun_Assassin.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer", "welfare"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Ortlinde (Assassin)",
    img: "Valk_Ortlinde_Assassin.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer", "welfare"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      alt: true,
    }
  },
  {
    name: "Geirskögul",
    img: "Valk_Geir_Assassin.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer", "welfare"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Sen-no-Rikyu",
    img: "Sen_no_Rikyu.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2022"],
      yearNA: ["2024"],
    }
  },
  {
    name: "Yamanami Keisuke",
    img: "Yamanami.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2022"],
      yearNA: ["2024"],
    }
  },
  {
    name: "Iyo",
    img: "Iyo.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
      yearJP: ["2022"],
      yearNA: ["2024"],
    }
  },
  {
    name: "Huyan Zhuo",
    img: "Huyan_Zhao.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2022"],
      yearNA: ["2024"],
    }
  },
  {
    name: "Huang Feihu",
    img: "Huang_Feihu.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      pair: true,
    }
  },
  {
    name: "Huang Feihu (Alone)",
    img: "Huang_Feihu.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      indi: true,
    }
  },
  {
    name: "Huang Tianhua",
    img: "Huang_Tianhua.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      indi: true,
    }
  },
  {
    name: "Huang Tianlu",
    img: "Huang_Tianlu.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      indi: true,
    }
  },
  {
    name: "Huang Tianjue",
    img: "Huang_Tianjue.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      indi: true,
    }
  },
  {
    name: "Huang Tianxiang",
    img: "Huang_Tianxiang.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      indi: true,
    }
  },
  {
    name: "Elisa the Nine-Tattooed Dragon",
    img: "Elisa.png",
    opts: {
      class: [ "pretender"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
      yearJP: ["2022"],
      yearNA: ["2024"],
    }
  },
  {
    name: "Britomart",
    img: "Britomart.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2022"],
      yearNA: ["2024"],
    }
  },
  {
    name: "Grigori Rasputin",
    img: "Rasputin.png",
    opts: {
      class: [ "alterego"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2023"],
      yearNA: ["2025"],
    }
  },
  {
    name: "Nitocris (Alter)",
    img: "Nitocris_Alter.png",
    opts: {
      class: [ "avenger"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2023"],
      yearNA: ["2025"],
    }
  },
  {
    name: "Tezcatlipoca",
    img: "Tezcat.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2023"],
      yearNA: ["2025"],
    }
  },
  {
    name: "Tenochtitlan (Pretender)",
    img: "Tenochtitlan.png",
    opts: {
      class: [ "pretender"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2023"],
      yearNA: ["2025"],
    }
  },
  {
    name: "Kukulcan",
    img: "Kukulcan.png",
    opts: {
      class: [ "foreigner"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2023"],
      yearNA: ["2025"],
    }
  },
  {
    name: "Pope Johanna",
    img: "Pope_Jo.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2023"],
      yearNA: ["2025"],
    }
  },
  {
    name: "Takasugi Shinsaku",
    img: "Takasugi_Shinsaku.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2023"],
      yearNA: ["2025"],
    }
  },
  {
    name: "Larva/Tiamat",
    img: "Tiamat_Larvae.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2023"],
      yearNA: ["2025"],
    }
  },
  {
    name: "Sodom's Beast/Draco (Child)",
    img: "Draco_2.png",
    opts: {
      class: [ "beast"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      yearJP: ["2023"],
      yearNA: ["2025"],
      age: true,
    }
  },
  {
    name: "Sodom's Beast/Draco",
    img: "Draco_3.png",
    opts: {
      class: [ "beast"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      yearJP: ["2023"],
      yearNA: ["2025"],
      costume: true,
    }
  },
  {
    name: "Locusta",
    img: "Locusta.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2023"],
      yearNA: ["2025"],
    }
  },
  {
    name: "Sétanta",
    img: "Setanta.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["welfare", "arcade"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      age: true,
    }
  },
  {
    name: "Kashin Koji",
    img: "Kashin_Koji.png",
    opts: {
      class: [ "assassin"],
      gender: ["u"],
      rarity: ["5"],
      yearJP: ["2023"],
      yearNA: ["2025"],
    }
  },
  {
    name: "Bhima",
    img: "Bhima.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2023"],
      yearNA: ["2025"],
    }
  },
  {
    name: "Duryodhana",
    img: "Duryodhana.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2023"],
      yearNA: ["2025"],
    }
  },
  {
    name: "Durga",
    img: "Durga.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["5"],
      face: ["sakura"],
      yearJP: ["2023"],
      yearNA: ["2025"],
    }
  },
  {
    name: "Medusa (Saber)",
    img: "Medusa_Saber.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2023"],
      yearNA: ["2025"],
      alt: true,
    }
  },
  {
    name: "Aesc the Savior",
    img: "Aesc.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      yearJP: ["2023"],
      yearNA: ["2025"],
    }
  },
  {
    name: "Morgan (Caster)",
    img: "Morgan_Caster.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      extra: ["summer"],
      yearJP: ["2023"],
      yearNA: ["2025"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Artoria Caster (Berserker)",
    img: "Artoria_Caster_Berserker.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      extra: ["summer"],
      yearJP: ["2023"],
      yearNA: ["2025"],
      alt: true,
    }
  },
  {
    name: "Suzuka Gozen (Summer Vacation)",
    img: "Suzuka_Rider.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2023"],
      yearNA: ["2025"],
      alt: true,
    }
  },
  {
    name: "Chloe von Einzbern (Avenger)",
    img: "Chloe_Avenger.png",
    opts: {
      class: [ "avenger"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2023"],
      yearNA: ["2025"],
      age: true,
      alt: true,
    }
  },
  {
    name: "Cnoc na Riabh Yaraan-doo",
    img: "Cnoc.png",
    opts: {
      class: [ "foreigner"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer", "welfare"],
      yearJP: ["2023"],
      yearNA: ["2025"],
    }
  },
  {
    name: "Mélusine (Ruler)",
    img: "Melusine_Ruler.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["summer"],
      yearJP: ["2023"],
      yearNA: ["2025"],
      alt: true,
    }
  },
  {
    name: "UDK-Barghest",
    img: "Barghest_Archer.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2023"],
      yearNA: ["2025"],
      alt: true,
    }
  },
  {
    name: "Cait Cú Cerpriestess",
    img: "Baob_Sith_Pretender.png",
    opts: {
      class: [ "pretender"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2023"],
      yearNA: ["2025"],
      alt: true,
    }
  },
  {
    name: "Wandjina",
    img: "Wandjina.png",
    opts: {
      class: [ "foreigner"],
      gender: ["u"],
      rarity: ["5"],
      yearJP: ["2023"],
      yearNA: ["2025"],
    }
  },
  {
    name: "Ptolemaios",
    img: "Ptolemaios.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2023"],
      yearNA: ["2025"],
    }
  },
  {
    name: "Sugitani Zenjūbō",
    img: "Sugitani_Zenjūbō.png",
    opts: {
      class: [ "archer"],
      gender: ["u"],
      rarity: ["3"],
      yearJP: ["2023"],
      yearNA: ["2025"],
    }
  },
  {
    name: "Theseus",
    img: "Theseus.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2023"],
      yearNA: ["2025"],
    }
  },
  {
    name: "Takeda Shingen",
    img: "Takeda_Shingen.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2023"],
      yearNA: ["2025"],
    }
  },
  {
    name: "Nagakura Shinpachi",
    img: "Nagakura_Shinpachi.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2023"],
      yearNA: ["2025"],
    }
  },
  {
    name: "Saika Magoichi",
    img: "Saika_Magoichi.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
      yearJP: ["2023"],
      yearNA: ["2025"],
    }
  },
  {
    name: "Uesugi Kenshin",
    img: "Uesugi_Kenshin.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2023"],
      yearNA: ["2025"],
      alt: true,
    }
  },
  {
    name: "Nemo (Santa)",
    img: "Nemo_Santa.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["welfare", "santa"],
      yearJP: ["2023"],
      yearNA: ["2025"],
      alt: true,
    }
  },
  {
    name: "Yamato Takeru",
    img: "Yamato.png",
    opts: {
      class: [ "saber"],
      gender: ["u"],
      rarity: ["5"],
      yearJP: ["2024"],
      yearNA: ["2026"],
    }
  },
  {
    name: "Ushi Gozen",
    img: "Ushi_Gozen.png",
    opts: {
      class: [ "avenger"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2024"],
      yearNA: ["2026"],
    }
  },
  {
    name: "Yui Shōsetsu",
    img: "Yui_Shou.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2024"],
      yearNA: ["2026"],
    }
  },
  {
    name: "Miyamoto Iori",
    img: "Miyamoto_Iori.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["welfare"],
      yearJP: ["2024"],
      yearNA: ["2026"],
    }
  },
  {
    name: "Andromeda",
    img: "Andromeda.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2024"],
      yearNA: ["2026"],
    }
  },
  {
    name: "Marie Antoinette (Alter)",
    img: "Marie_Alter.png",
    opts: {
      class: [ "avenger"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2024"],
      yearNA: ["2026"],
    }
  },
  {
    name: "Hassan of the Shining Star",
    img: "Hassan_Shining_Star.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2024"],
      yearNA: ["2026"],
    }
  },
  {
    name: "King of the Cavern, Monte Cristo",
    img: "Monte_Cristo.png",
    opts: {
      class: [ "avenger"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2024"],
      yearNA: ["2026"],
    }
  },
  {
    name: "Alessandro di Cagliostro",
    img: "Alessandro_di_Cagliostro.png",
    opts: {
      class: [ "pretender"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2024"],
      yearNA: ["2026"],
    }
  },
  {
    name: "E-Flare Marie",
    img: "E_Flare_Marie.png",
    opts: {
      class: [ "beast"],
      gender: ["f"],
      rarity: ["0"],
      yearJP: ["2024"],
      yearNA: ["2026"],
      npc: true,
    }
  },
  {
    name: "E-Aqua Marie",
    img: "E_Aqua_Marie.png",
    opts: {
      class: [ "beast"],
      gender: ["f"],
      rarity: ["0"],
      yearJP: ["2024"],
      yearNA: ["2026"],
      npc: true,
    }
  },
  {
    name: "Aozaki Aoko",
    img: "Aoko_Aozaki.png",
    opts: {
      class: [ "foreigner"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2024"],
      yearNA: ["2026"],
      collab: true,
    }
  },
  {
    name: "Shizuki Sōjūrō",
    img: "Shizuki_Sōjūrō.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["welfare"],
      yearJP: ["2024"],
      yearNA: ["2026"],
      collab: true,
    }
  },
  {
    name: "Kuonji Alice",
    img: "Alice_Kuo.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2024"],
      yearNA: ["2026"],
      collab: true,
    }
  },
  {
    name: "Azumi no Isora (Hibiki & Chikagi)",
    img: "Azumi_pair_1.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2024"],
      yearNA: ["2026"],
      pair: true,
      collab: true,
    }
  },
  {
    name: "Azumi no Isora",
    img: "Azumi_Single_3.png",
    opts: {
      class: [ "alterego"],
      gender: ["u"],
      rarity: ["5"],
      yearJP: ["2024"],
      yearNA: ["2026"],
      costume: true,
      collab: true,
    }
  },
  {
    name: "Hibiki Hibino",
    img: "Azumi_Hibiki.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2024"],
      yearNA: ["2026"],
      indi: true,
      collab: true,
    }
  },
  {
    name: "Chikagi Katsuragi",
    img: "Azumi_Chikagi.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2024"],
      yearNA: ["2026"],
      indi: true,
      collab: true,
    }
  },
  {
    name: "Space Ereshkigal",
    img: "Space_Eresh.png",
    opts: {
      class: [ "beast"],
      gender: ["f"],
      rarity: ["5"],
      face: ["rin"],
      extra: ["summer"],
      yearJP: ["2024"],
      yearNA: ["2026"],
    }
  },
  {
    name: "Mysterious Executor C.I.E.L",
    img: "Ciel_Summer.png",
    opts: {
      class: [ "mooncancer"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["summer"],
      yearJP: ["2024"],
      yearNA: ["2026"],
      collab: true,
    }
  },
  {
    name: "Dobrynya Nikitich (Lancer)",
    img: "Dobrynya_Nikitich_Lancer.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2024"],
      yearNA: ["2026"],
      alt: true,
    }
  },
  {
    name: "Xu Fu (Avenger)",
    img: "XuFu_Avenger.png",
    opts: {
      class: [ "avenger"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2024"],
      yearNA: ["2026"],
      alt: true,
    }
  },
  {
    name: "BB Dubai",
    img: "BB_Dubai.png",
    opts: {
      class: [ "mooncancer"],
      gender: ["f"],
      rarity: ["5"],
      face: ["sakura"],
      yearJP: ["2024"],
      yearNA: ["2026"],
      alt: true,
    }
  },
  {
    name: "Tenochtitlan (Moon Cancer)",
    img: "Tenochtitlan_MoonCancer.png",
    opts: {
      class: [ "mooncancer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2024"],
      yearNA: ["2026"],
      alt: true,
    }
  },
  {
    name: "Mysterious Heroine XX (Alter)",
    img: "MHXX_Alter.png",
    opts: {
      class: [ "foreigner"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer", "arcade"],
      face: ["saber"],
      yearJP: ["2024"],
      yearNA: ["2026"],
      alt: true,
    }
  },
  {
    name: "Kishinami Hakuno (Male)",
    img: "Hakuno_Male.png",
    opts: {
      class: [ "mooncancer"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2024"],
      yearNA: ["2026"],
    }
  },
  {
    name: "Kishinami Hakuno (Female)",
    img: "Hakuno_Female.png",
    opts: {
      class: [ "mooncancer"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2024"],
      yearNA: ["2026"],
    }
  },

  // JP-Only Line Cut-Off

  {
    name: "Kazuradrop",
    img: "Kazuradrop.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
      face: ["sakura"],
      yearJP: ["2024"],
      yearNA: ["2026"],
      age: true,
      jp: true,
    }
  },
  {
    name: "Kazuradrop (Ascension 2)",
    img: "Kazuradrop_Summer.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["summer"],
      face: ["sakura"],
      yearJP: ["2024"],
      yearNA: ["2026"],
      age: true,
      costume: true,
      jp: true,
    }
  },
  {
    name: "Tutankhamun",
    img: "Tut_1.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2024"],
      yearNA: ["2026"],
      age: true,
      jp: true,
    }
  },
  {
    name: "Tutankhamun (Ascension 3)",
    img: "Tut_3.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2024"],
      yearNA: ["2026"],
      costume: true,
      jp: true,
    }
  },
  {
    name: "Van Gogh (Miner)",
    img: "Van_Gogh_Miner.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare"],
      yearJP: ["2024"],
      yearNA: ["2026"],
      age: true,
      jp: true,
    }
  },
  {
    name: "Louhi",
    img: "Louhi.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2024"],
      yearNA: ["2026"],
      jp: true,
    }
  },
  {
    name: "Abigail Williams (Santa)",
    img: "Abigail_Santa.png",
    opts: {
      class: [ "pretender"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare", "santa"],
      yearJP: ["2024"],
      yearNA: ["2026"],
      age: true,
      jp: true,
    }
  },
  {
    name: "Phantasmoon",
    img: "Phantasmoon.png",
    opts: {
      class: [ "pretender"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2024"],
      yearNA: ["2026"],
      collab: true,
      jp: true,
    }
  },
  {
    name: "Richard I",
    img: "Richard_I.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2025"],
      yearNA: ["2026"],
    }
  },
  {
    name: "Biscione",
    img: "Biscione.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      jp: true,
    }
  },
  {
    name: "Kurohime",
    img: "Kurohime.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      jp: true,
    }
  },
  {
    name: "Ono no Komachi",
    img: "Ono_Pair.png",
    opts: {
      class: [ "caster"],
      gender: ["f", "m"],
      rarity: ["5"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      pair: true,
      jp: true,
    }
  },
  {
    name: "Ono no Komachi",
    img: "Ono_Caster_Single.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      indi: true,
      jp: true,
    }
  },
  {
    name: "Ono no Takamura",
    img: "Ono_Male_Single.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      indi: true,
      jp: true,
    }
  },
  {
    name: "E-Grand Marie",
    img: "E_Grand_Olga.png",
    opts: {
      class: [ "beast"],
      gender: ["f"],
      rarity: ["0"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      npc: true,
      jp: true,
    }
  },
  {
    name: "Dante Alighieri",
    img: "Dante.png",
    opts: {
      class: [ "pretender"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      jp: true,
    }
  },
  {
    name: "Metatron Jeanne",
    img: "Metatron_Jeanne.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      jp: true,
    }
  },
  {
    name: "King Ashoka",
    img: "Ashoka.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      jp: true,
    }
  },
  {
    name: "Lilith",
    img: "Lilith.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      jp: true,
    }
  },
  {
    name: "Typhon Ephemeros",
    img: "Typhon_Ephemeros.png",
    opts: {
      class: [ "pretender"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      jp: true,
    }
  },
  {
    name: "Indra",
    img: "Indra_Full.png",
    opts: {
      class: [ "lancer"],
      gender: ["u", "m"],
      rarity: ["5"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      pair: true,
      jp: true,
    }
  },
  {
    name: "Indra",
    img: "Indra.png",
    opts: {
      class: [ "lancer"],
      gender: ["m", "u"],
      rarity: ["5"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      indi: true,
      jp: true,
    }
  },
  {
    name: "Vajra (Male)",
    img: "Indra_Male_Vajra.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      indi: true,
      jp: true,
    }
  },
  {
    name: "Vajra (Female)",
    img: "Indra_Female_Vajra.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      indi: true,
      jp: true,
    }
  },
  {
    name: "Stellar Marie",
    img: "Stellar_Marie.png",
    opts: {
      class: [ "beast"],
      gender: ["f"],
      rarity: ["0"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      npc: true,
      jp: true,
    }
  },
  {
    name: "U-Olga Marie",
    img: "U_Marie.png",
    opts: {
      class: [ "beast"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      jp: true,
    }
  },
  {
    name: "Passionlip (Saber)",
    img: "Passionlip_Saber.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      face: ["sakura"],
      extra: ["summer"],
      alt: true,
      jp: true,
    }
  },
  {
    name: "Kriemhild (Rider)",
    img: "Kriem_rider.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      extra: ["summer"],
      alt: true,
      jp: true,
    }
  },
  {
    name: "Huyan Zhuo (Berserker)",
    img: "Huyan_Zhuo_Berserker.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      extra: ["welfare", "summer"],
      alt: true,
      jp: true,
    }
  },
  {
    name: "Moon Rabbit",
    img: "Shiki_MoonCancer.png",
    opts: {
      class: [ "mooncancer"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      extra: ["summer"],
      collab: true,
      alt: true,
      jp: true,
    }
  },
  {
    name: "Miyu Edelfelt (Lancer)",
    img: "Miyu_Lancer.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      extra: ["summer"],
      alt: true,
      age: true,
      jp: true,
    }
  },
  {
    name: "Larva/Tiamat (Archer)",
    img: "Tiamat_Archer.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      extra: ["summer"],
      alt: true,
      jp: true,
    }
  },
  {
    name: "Jeunesse Crane",
    img: "Crane_AlterEgo.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      extra: ["summer"],
      alt: true,
      jp: true,
    }
  },
  {
    name: "Nemo/Noah",
    img: "Nemo_Noah_Mobile.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      jp: true,
    }
  },
  {
    name: "Kawakami Gensai",
    img: "Kawakami_Gensai.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      jp: true,
    }
  },
  {
    name: "Tōdō Heisuke",
    img: "Tōdō_Heisuke.png",
    opts: {
      class: [ "avenger"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      jp: true,
    }
  },
  {
    name: "Harada Sanosuke",
    img: "Harada_Sanosuke.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      extra: ["welfare"],
      jp: true,
    }
  },
  {
    name: "Kondō Isami",
    img: "Kondō_Isami.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2025"],
      jp: true,
    }
  },
  {
    name: "Elizabeth Báthory (SSR)",
    img: "Elizabeth_SSR.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      alt: true,
      jp: true,
    }
  },
  {
    name: "Elizabeth of the End",
    img: "Elizabeth_End.png",
    opts: {
      class: [ "avenger"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      extra: ["welfare"],
      alt: true,
      jp: true,
    }
  },
  {
    name: "Solomon (Pretender)",
    img: "Solomon_Pretender.png",
    opts: {
      class: [ "pretender"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      extra: ["welfare"],
      jp: true,
    }
  },
  {
    name: "Maris Chaldeas",
    img: "Maris_Chaldeas.png",
    opts: {
      class: [ "beast"],
      gender: ["u"],
      rarity: ["0"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      npc: true,
      jp: true,
    }
  },
  {
    name: "Lord Logres",
    img: "Lord_Logres.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      face: ["saber"],
      jp: true,
    }
  },
  {
    name: "Hanasaka no Okina",
    img: "Hanasaka_no_Okina.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      jp: true,
    }
  },
  {
    name: "Hebi Nyōbō",
    img: "Hebi_Nyōbō.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      jp: true,
    }
  },
  {
    name: "Flora",
    img: "Flora.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      extra: ["welfare"],
      jp: true,
    }
  },
  {
    name: "Demeter",
    img: "Demeter.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      jp: true,
    }
  },
  {
    name: "Jacques de Molay",
    img: "Jacques_de_Molay_Saber.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["arcade"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      jp: true,
    }
  },
  {
    name: "François Prelati & Francesca Prelati",
    img: "François_Francesca.png",
    opts: {
      class: [ "caster"],
      gender: ["m", "f"],
      rarity: ["5"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      pair: true,
      jp: true,
    }
  },
  {
    name: "François Prelati",
    img: "François_Prelati.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      indi: true,
      jp: true,
    }
  },
  {
    name: "Francesca Prelati",
    img: "Francesca_Prelati.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      indi: true,
      jp: true,
    }
  },
  {
    name: "Hippolyta",
    img: "Hippolyta.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      extra: ["welfare"],
      jp: true,
    }
  },
  {
    name: "John Lackland",
    img: "John_Lackland.png",
    opts: {
      class: [ "avenger"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      jp: true,
    }
  },
  {
    name: "Urðr",
    img: "Urðr.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      jp: true,
    }
  },
  {
    name: "Ascalaphus",
    img: "Ascalaphus.png",
    opts: {
      class: [ "class"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      age: true,
      jp: true,
    }
  },
  {
    name: "Ascalaphus (Stage 3)",
    img: "Ascalaphus_3.png",
    opts: {
      class: [ "class"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      costume: true,
      jp: true,
    }
  },
  {
    name: "Gray Lily (Saber)",
    img: "Gray_Lily_Saber.png",
    opts: {
      class: [ "saber"],
      gender: [""],
      rarity: ["4"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      face: ["saber"],
      extra: ["welfare"],
      age: true,
      jp: true,
    }
  },
  {
    name: "Gray Lily (Lancer)",
    img: "Gray_Lily_Lancer.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      face: ["saber"],
      extra: ["welfare"],
      age: true,
      jp: true,
    }
  },
  {
    name: "Hassan-i-Sabbah (Azrael)",
    img: "Azrael.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      jp: true,
    }
  },
  {
    name: "Beni-Enma (Berserker)",
    img: "Beni-Enma_Berserker.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      extra: ["summer"],
      age: true,
      alt: true,
      jp: true,
    }
  },
  {
    name: "Kingprotea (Moon Cancer)",
    img: "Kingprotea_MoonCancer.png",
    opts: {
      class: [ "mooncancer"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      extra: ["summer"],
      alt: true,
      jp: true,
    }
  },
  {
    name: "Biscione (Caster)",
    img: "Biscione_Caster.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      extra: ["summer"],
      alt: true,
      jp: true,
    }
  },
  {
    name: "Lilith (Rider)",
    img: "Lilith_Rider.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      extra: ["summer"],
      alt: true,
      jp: true,
    }
  },
  {
    name: " Kingprotea Alter (Avenger)",
    img: "Kingprotea_Alter_Avenger.png",
    opts: {
      class: [ "avenger"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      extra: ["summer"],
      jp: true,
    }
  },
  {
    name: "Ono no Komachi (Archer)",
    img: "Ono_no_Komachi_Archer.png",
    opts: {
      class: [ "archer"],
      gender: ["f, m"],
      rarity: ["4"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      extra: ["summer"],
      pair: true,
      alt: true,
      jp: true,
    }
  },
  {
    name: "Ono no Komachi (Archer)",
    img: "Ono_Archer_Single.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      extra: ["summer"],
      indi: true,
      alt: true,
      jp: true,
    }
  },
  {
    name: "Ono no Takamura (Archer)",
    img: "Ono_Archer_Single_m.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["4"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      extra: ["summer"],
      indi: true,
      alt: true,
      jp: true,
    }
  },
  {
    name: "Habetrot (Pretender)",
    img: "Habetrot_Pretender.png",
    opts: {
      class: [ "pretender"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      extra: ["summer"],
      alt: true,
      jp: true,
    }
  },

  /** Template
   *   {
    name: "Name",
    img: "filename.png",
    opts: {
      class: [ "class"],
      gender: ["u"],
      rarity: ["5"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      jp: true,
    }
  },
   */

  // Arcade-only servants
  // Put Setanta and Da Vinci Rider (Arcade) later I guess.
  // Maybe uncomment Arcade Molay and Nemo/Noah since they are technically "different" servants?

  /* No longer arcade exclusive, kept for archival
  {
    name: "Jacques de Molay (Saber) (Arcade)",
    img: "Jacques_Molay_Arcade.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["arcade",],
      jp: true,
      arcade: true,
    }
  },
  */
  {
    name: "Kama (Mistake)",
    img: "Kama_Mistake.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["5"],
      face: ["sakura"],
      extra: ["arcade"],
      age: true,
      alt: true,
      arcadeOnly: true,
      jp: true,
    }
  },
  {
    name: "Sita",
    img: "Sita_Arcade.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["arcade"],
      jp: true,
      arcadeOnly: true,
    }
  },
  {
    name: "Suzuka Gozen (Santa)",
    img: "Suzuka_Santa.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare", "santa", "arcade",],
      alt: true,
      jp: true,
      arcadeOnly: true,
    }
  },
  {
    name: "Nemo (Arcade)",
    img: "Nemo_Arcade.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["arcade"],
      alt: true,
      jp: true,
      arcadeOnly: true,
    }
  },
  /* No longer arcade exclusive, kept for archival
  {
    name: "Nemo/Noah",
    img: "Nemo_Noah.png",
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
  */
  {
    name: "Helena Blavatsky (Christmas)",
    img: "Helena_Santa.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare", "santa", "arcade",],
      alt: true,
      jp: true,
      arcadeOnly: true,
    }
  },
  {
    name: "Merlin (Prototype)",
    img: "Merlin_Prototype.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["5"],
      extra: ["arcade"],
      jp: true,
      arcadeOnly: true,
    }
  },
  {
    name: "Frankenstein (Christmas)",
    img: "Frankenstein_Caster.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["welfare", "santa", "arcade",],
      jp: true,
      arcadeOnly: true,
    }
  },
  {
    name: "Beast VI/Sodom's Beast",
    img: "BeastVI_Sodom.png",
    opts: {
      class: [ "beast"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      extra: ["arcade",],
      npc: true,
      jp: true,
      arcadeOnly: true,
    }
  },
  {
    name: "Sodom's Beast/Draco",
    img: "Draco_2.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      yearJP: ["2023"],
      yearNA: ["2025"],
      age: true,
      arcadeOnly: true,
    }
  },

  // Alt-Costumes
  {
    name: "Mash (Summer Ver.1)",
    img: "Mash_Summer_1.png",
    opts: {
      class: [ "shielder"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2016"],
      yearNA: ["2028"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Mash (Summer Ver.2)",
    img: "Mash_Summer_2.png",
    opts: {
      class: [ "shielder"],
      gender: ["f"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2020"],
      yearNA: ["2022"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Mash (Bright Voyager)",
    img: "Mash_Idol.png",
    opts: {
      class: [ "shielder"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Siegfried (Summer)",
    img: "Siegfried_Summer.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["summer"],
      yearJP: ["2019"],
      yearNA: ["2021"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Lancelot (Summer)",
    img: "Lancelot_Saber_Summer.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2023"],
      yearNA: ["2025"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Gawain (Summer)",
    img: "Gawain_Summer.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2023"],
      yearNA: ["2025"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Sigurd (Summer)",
    img: "Sigurd_Summer.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["summer"],
      yearJP: ["2020"],
      yearNA: ["2022"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Prince of Lan Ling (Summer)",
    img: "Prince_of_Summer.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2020"],
      yearNA: ["2022"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "EMIYA (Summer)",
    img: "EMIYA_Summer.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2020"],
      yearNA: ["2022"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Robin Hood (Summer)",
    img: "Robin_Hood_Summer.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["3"],
      extra: ["summer"],
      yearJP: ["2018"],
      yearNA: ["2020"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Tristan (Summer)",
    img: "Tristan_Summer.png",
    opts: {
      class: [ "archer"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2023"],
      yearNA: ["2025"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Karna (Summer)",
    img: "Karna_Summer.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["summer"],
      yearJP: ["2024"],
      yearNA: ["2026"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Percival (Summer)",
    img: "Percival_Summer.png",
    opts: {
      class: [ "lancer"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2024"],
      yearNA: ["2026"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Edward Teach (Summer)",
    img: "Edward_Teach_Summer.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["2"],
      extra: ["summer"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Achilles (Summer)",
    img: "Achilles_Summer.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["summer"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Bartholomew Roberts (Summer)",
    img: "Bartholomew_Summer.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["1"],
      extra: ["summer"],
      yearJP: ["2024"],
      yearNA: ["2026"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Mandricardo (Summer)",
    img: "Mandricardio_Summer.png",
    opts: {
      class: [ "rider"],
      gender: ["m"],
      rarity: ["3"],
      extra: ["summer"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Gilgamesh (Summer)",
    img: "Gilgamesh_Caster_Summer.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2018"],
      yearNA: ["2020"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Merlin (Summer)",
    img: "Merlin_Summer.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["summer"],
      yearJP: ["2019"],
      yearNA: ["2021"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Asclepius (Summer)",
    img: "Ascl_Summer.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["3"],
      extra: ["summer"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Fūma Kotarō (Summer)",
    img: "Fuuma_Kotarou_Summer.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["3"],
      extra: ["summer"],
      yearJP: ["2019"],
      yearNA: ["2021"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Yan Qing (Summer)",
    img: "Yan_Qing_Summer.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Edmond Dantès (Summer)",
    img: "Edmond_Dantes_Summer.png",
    opts: {
      class: [ "avenger"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["summer"],
      yearJP: ["2018"],
      yearNA: ["2020"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Ashiya Dōman (Summer Ver.1)",
    img: "Assy_Doughman_Summer1.png",
    opts: {
      class: [ "alterego"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["summer"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Ashiya Dōman (Summer Ver.2)",
    img: "Assy_Doughman_Summer2.png",
    opts: {
      class: [ "alterego"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["summer"],
      yearJP: ["2022"],
      yearNA: ["2024"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Oberon (Summer Ver.1)",
    img: "Oberon_Summer.png",
    opts: {
      class: [ "pretender"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["summer"],
      yearJP: ["2023"],
      yearNA: ["2025"],
      costume: true,
      alt: true,
    }
  },
  {
    name: "Oberon (Summer Ver.2)",
    img: "Oberon_Summer2.png",
    opts: {
      class: [ "pretender"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["summer"],
      yearJP: ["2023"],
      yearNA: ["2025"],
      costume: true,
      alt: true,
    }
  },
  {
    name: "Queen Medb (Chief Warden)",
    img: "Medb_Warden.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2017"],
      yearNA: ["2019"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Queen Medb (Hero My Love)",
    img: "Medb_Idol.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Nero (Olympian Bloomers)",
    img: "Nero_Bloomers.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      yearJP: ["2017"],
      yearNA: ["2019"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Nero (Silk of Venus)",
    img: "Nero_Silk.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      yearJP: ["2020"],
      yearNA: ["2022"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Nero (Tyrant's Rhapsodia)",
    img: "Nero_Idol.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Astolfo (Trifas)",
    img: "Astolfo_Trifas.png",
    opts: {
      class: [ "rider"],
      gender: ["m", "u"],
      rarity: ["4"],
      yearJP: ["2018"],
      yearNA: ["2020"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Jeanne d'Arc (Alter) (Shinjuku)",
    img: "Jeanne_Alter_Shinjuku.png",
    opts: {
      class: [ "avenger"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      yearJP: ["2017"],
      yearNA: ["2019"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Artoria Pendragon (Alter) (Shinjuku)",
    img: "Artoria_Alter_Shinjuku.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["4"],
      face: ["saber"],
      yearJP: ["2020"],
      yearNA: ["2022"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Mordred (Trifas)",
    img: "Mordred_Trifas.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      yearJP: ["2020"],
      yearNA: ["2022"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Bedivere (Silver Butler)",
    img: "Bedivere_Butler.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2020"],
      yearNA: ["2022"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Sakata Kintoki (Heian Warrior)",
    img: "Kintoki_Heian.png",
    opts: {
      class: [ "berserker"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2020"],
      yearNA: ["2022"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Amakusa Shirō (Phantom Thief)",
    img: "Amakusa_Shirou_Phantom_Theif.png",
    opts: {
      class: [ "ruler"],
      gender: ["m"],
      rarity: ["5"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Parvati (Most Sought)",
    img: "Parvati_Sakura.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["4"],
      face: ["sakura"],
      yearJP: ["2016"],
      yearNA: ["2018"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Okada Izō (Hakama)",
    img: "Izo_Hakama.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2020"],
      yearNA: ["2022"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Okada Izō (Dapping Fella)",
    img: "Izo_Suit.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["3"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Paul Bunyan (Mad Bunny)",
    img: "Paul_Bunyan_Bunny.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["1"],
      yearJP: ["2020"],
      yearNA: ["2022"],
      age: true,
      alt: true,
      costume: true,
    }
  },
  {
    name: "Scáthach (Piercing Bunny)",
    img: "Scathach_Bunny.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2020"],
      yearNA: ["2022"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Altera (Palmtop Stardust)",
    img: "Altera_Idol.png",
    opts: {
      class: [ "saber"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Euryale (Mirage)",
    img: "Euryale_Idol.png",
    opts: {
      class: [ "archer"],
      gender: ["f"],
      rarity: ["3"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Ushiwakamaru (Wandering Tales)",
    img: "Ushi_Idol.png",
    opts: {
      class: [ "rider"],
      gender: ["f"],
      rarity: ["3"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Helena Blavatsky (Very Mahatma~!☆)",
    img: "Helena_Idol.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Nitocris (Beyond the Mirror)",
    img: "Nitocris_Idol.png",
    opts: {
      class: [ "caster"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Shuten Dōji (Cherry Blossoms)",
    img: "Shuten_Idol.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["5"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Hassan of the Serenity (Poisonous Flower)",
    img: "Hassan_Serenity_Idol.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["3"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Tamamo Cat (Smiling Face)",
    img: "Tamamo_Cat_Idol.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["4"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Jeanne d'Arc (Prove)",
    img: "Jeanne_Idol.png",
    opts: {
      class: [ "ruler"],
      gender: ["f"],
      rarity: ["5"],
      face: ["saber"],
      yearJP: ["2021"],
      yearNA: ["2023"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Ereshkigal (Ninkigal)",
    img: "Eresh_Alter.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
      face: ["rin"],
      yearJP: ["2023"],
      yearNA: ["2025"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Kingprotea (Alter)",
    img: "Kingprotea_Alter.png",
    opts: {
      class: [ "alterego"],
      gender: ["f"],
      rarity: ["5"],
      face: ["sakura"],
      yearJP: ["2023"],
      yearNA: ["2025"],
      costume: true,
    }
  },
  {
    name: "Kiyohime (Otohime)",
    img: "Kiyohime_Otohime.png",
    opts: {
      class: [ "berserker"],
      gender: ["f"],
      rarity: ["3"],
      yearJP: ["2024"],
      yearNA: ["2026"],
      age: true,
      alt: true,
      costume: true,
    }
  },
  {
    name: "Tezcatlipoca (Summer)",
    img: "Tezcatlipoca_Summer.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["summer"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Saitō Hajime (Summer)",
    img: "Saitō_Summer.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Cú Chulainn (Caster) (Summer)",
    img: "Cú_Chulainn_Caster_Summer.png",
    opts: {
      class: [ "caster"],
      gender: ["m"],
      rarity: ["3"],
      extra: ["summer"],
      yearJP: ["2025"],
      yearNA: ["2027"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Dante Alighieri (Summer)",
    img: "Dante_Alighieri_Summer.png",
    opts: {
      class: [ "pretender"],
      gender: ["m"],
      rarity: ["5"],
      extra: ["summer"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Hassan of the Shining Star (Summer)",
    img: "Hassan_Shining_Star_Summer.png",
    opts: {
      class: [ "assassin"],
      gender: ["m"],
      rarity: ["4"],
      extra: ["summer"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      alt: true,
      costume: true,
    }
  },
  {
    name: "Bedivere (Summer)",
    img: "Bedivere_Summer.png",
    opts: {
      class: [ "saber"],
      gender: ["m"],
      rarity: ["3"],
      extra: ["summer"],
      yearJP: ["2026"],
      yearNA: ["2028"],
      alt: true,
      costume: true,
    }
  },

  // Additional NPCs

  {
    name: "Aphrodite",
    img: "Aphrodite.png",
    opts: {
      class: [ "assassin"],
      gender: ["f"],
      rarity: ["5"],
      npc: true
    }
  },
  {
    name: "Thomas Edison (Alter)",
    img: "Thomas_Edison_Alter.png",
    opts: {
      class: [ "mooncancer"],
      gender: ["m"],
      rarity: ["5"],
      npc: true
    }
  },
  {
    name: "Verðandi",
    img: "Verðandi.png",
    opts: {
      class: [ "lancer"],
      gender: ["f"],
      rarity: ["5"],
      npc: true,
      jp: true,
    }
  },

  // Template
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
