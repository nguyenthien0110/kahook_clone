import clsx from "clsx";

export interface Props {
  title: string;
  color?: string;
  handleOnClick?: () => void;
}

function Button(props: Props) {
  console.log(props.color);
  return (
    <>
      <button
        onClick={props.handleOnClick}
        className={clsx(
          `h-full w-auto border rounded-md font-bold text-[#fff] hover:opacity-90`,
          props.color ? `bg-[${props.color}]` : "bg-primary"
        )}
      >
        <span className="px-4 py-2">{props.title}</span>
      </button>
    </>
  );
}

export default Button;
