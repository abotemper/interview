class Student {
  constructor(id, score) {
      this.id = id;
      this.score = score;
  }
}

const one ="01202021,75;01201033,95;01202008,80;01203006,90;01203088,100".split(";");
const two = "01202008,70;01203088,85;01202111,80;01202021,75;01201100,88".split(";");
const tIds = new Map();
console.log(tIds);

for (const t of two) {
  const tStu = t.split(",");
  const tId = tStu[0];
  const tScore = parseInt(tStu[1]);
  tIds.set(tId, tScore);
}

const stuComparator = (a, b) => {
  //降序
  if (a.score !== b.score) {
      return b.score - a.score;
  } else {
    //字符串升序
      return a.id.localeCompare(b.id);
  }
};


const map = new Map();
console.log(map);
for (const s of one) {
  const sStu = s.split(",");
  const sId = sStu[0];
  if (tIds.has(sId)) {
      const sScore = parseInt(sStu[1]);
      const tScore = tIds.get(sId);
      const totalScore = sScore + tScore;
      const cls = sId.substring(0, 5);
      const student = new Student(sId, totalScore);
      if (!map.has(cls)) {
          map.set(cls, new Array());
      }
      map.get(cls).push(student);
  }
}


if (map.size === 0) {
  console.log("NULL");
} else {
  const sortedMap = new Map([...map.entries()].sort());
  for (const [key, value] of sortedMap) {
      console.log(key);
      const sortedValue = value.sort(stuComparator);
      const res = sortedValue.map((stu) => stu.id).join(";");
      console.log(res);
  }
}