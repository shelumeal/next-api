export default function handler(reg, res) {
  const params = reg.query.params;
  console.log(params);
  res.status(200).json(params);
}
