const shoppingListData = [
  {
    id: 1,
    name: "Palačinky",
    archived: false,
    items: [
      { id: 1, name: "Vejce", completed: true },
      { id: 2, name: "Mléko", completed: true },
      { id: 3, name: "Mouka", completed: false },
      { id: 4, name: "Máslo", completed: false },
      { id: 5, name: "Droždí", completed: true },
      { id: 6, name: "Sůl", completed: false },
      { id: 7, name: "Cukr", completed: false },
    ],
    members: [
      { id: 1, name: "Jeff Pancakes", role: "owner" },
      { id: 2, name: "Tereza", role: "member" },
      { id: 3, name: "Bára", role: "member" },
      { id: 4, name: "Petr", role: "member" },
      { id: 5, name: "Tomáš", role: "member" },
    ],
  },
  {
    id: 2,
    name: "Snídaně",
    archived: true,
    items: [
      { id: 1, name: "Chléb", completed: false },
      { id: 2, name: "Máslo", completed: false },
      { id: 3, name: "Sýr", completed: true },
      { id: 4, name: "Šunka", completed: false },
      { id: 5, name: "Rajčata", completed: true },
      { id: 6, name: "Okurky", completed: true },
    ],
    members: [
      { id: 1, name: "Tereza", role: "owner" },
      { id: 2, name: "Jeff", role: "member" },
      { id: 3, name: "Dáša", role: "member" },
    ],
  },
  {
    id: 3,
    name: "Denní nákup",
    archived: true,
    items: [
      { id: 1, name: "Banány", completed: false },
      { id: 2, name: "Jablka", completed: false },
      { id: 3, name: "Housky", completed: true },
      { id: 4, name: "Mléko", completed: true },
      { id: 5, name: "Ovesné vločky", completed: false },
    ],
    members: [
      { id: 1, name: "Marek", role: "owner" },
      { id: 2, name: "Karolína", role: "member" },
      { id: 3, name: "Jana", role: "member" },
    ],
  },
  {
    id: 4,
    name: "Grilování",
    archived: false,
    items: [
      { id: 1, name: "Pivo", completed: false },
      { id: 2, name: "Brambůrky", completed: false },
      { id: 3, name: "Grilovací maso", completed: true },
      { id: 4, name: "Uhlí na gril", completed: false },
      { id: 5, name: "Paprika", completed: true },
      { id: 6, name: "Cibule", completed: true },
    ],
    members: [
      { id: 1, name: "Karel", role: "owner" },
      { id: 2, name: "Honza", role: "member" },
      { id: 3, name: "Jitka", role: "member" },
      { id: 4, name: "Tomáš", role: "member" },
    ],
  }
];

export default shoppingListData;
