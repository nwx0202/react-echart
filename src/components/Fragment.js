export default function Fragment({info}) {
  return (
    <div className="fragment">
      <label>{info.name}</label>
      <div>{info.count}</div>
    </div>
  );
}