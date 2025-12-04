import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function Chart({ data }) {
  const formatted = data.map((obj) => {
    const key = Object.keys(obj)[0];
    return { name: key, value: obj[key] };
  });

  return (
    <BarChart width={350} height={250} data={formatted}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" />
    </BarChart>
  );
}
