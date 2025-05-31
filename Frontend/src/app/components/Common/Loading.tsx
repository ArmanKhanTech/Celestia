import LoadingAnim from "./LoadingAnim";

type Props = {
  text?: string;
};

const Loading = ({ text }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center m-auto">
      <LoadingAnim style={"h-12 w-12 mb-4 text-base-100 fill-base-content"} />
      <p className="text-2xl font-semibold">{text}</p>
    </div>
  );
};

export default Loading;
