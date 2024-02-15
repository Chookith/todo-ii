export default function FilterButton(props: any) {
  return (
    <button
      type="button"
      className="m-3 flex basis-1/3 items-center justify-center rounded-full bg-orangeBuff p-4 shadow-md transition delay-75 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-dun dark:bg-darkRose dark:hover:shadow-darkCyan"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="sr-only ">Show</span>
      <span>{props.name}</span>
      <span className="sr-only ">tasks</span>
    </button>
  );
}
