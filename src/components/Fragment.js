export default function Fragment({info}) {
  console.log(info);
  return (
    <div className="fragment">
      <label>{info.name}</label>
      <div>{info.count}</div>
    </div>
  );
}