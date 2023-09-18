export function test(req, res) {
  res.json({ message: "Veikia" });
}

export function getPerson(req, res) {
  const params = req.params;
  console.log(params);
  res.json({ message: "kazkas" });
}

export function getPersonFromGroup(req, res) {
  //   const personId = req.params.personId;
  //   const groupId = req.params.groupId;  daro ta pati kaip ir const { personId, groupId } = req.params;
  const { personId, groupId } = req.params;
  console.log(personId, groupId);
  res.json({ personId, groupId });
}
