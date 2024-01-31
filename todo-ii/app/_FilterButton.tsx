export default function FilterButton(props: any) {
  return (
    <button
      type="button"
      className="m-2 p-2 bg-orangeBuff rounded-full"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="sr-only ">Show</span>
      <span>{props.name}</span>
      <span className="sr-only ">task</span>
    </button>
  );
}
