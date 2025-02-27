export interface Props {
  title: string;
}

function Button(props: Props) {
  return (
    <>
      <button
        className={`bg-primary h-full w-auto border rounded-md font-bold text-[#fff] hover:opacity-90`}
      >
        <span className="px-4 py-2">{props.title}</span>
      </button>
    </>
  );
}

export default Button;
