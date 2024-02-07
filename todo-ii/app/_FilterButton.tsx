export default function FilterButton(props: any) {
  return (
    <button
      type="button"
      className="dark:bg-darkRose m-3 flex basis-1/3 items-center justify-center rounded-full bg-orangeBuff p-4 shadow-lg transition delay-75 hover:-translate-y-1 hover:scale-105 dark:hover:shadow-darkCyan"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="sr-only ">Show</span>
      <span>{props.name}</span>
      <span className="sr-only ">tasks</span>
    </button>
  );
}
