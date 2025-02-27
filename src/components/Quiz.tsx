import { UserCircleOutline } from "@/assets/icon/UserCircleOutline";
import Button from "./Button";
import { OutlineEdit } from "@/assets/icon/OutlineEdit";
import { BaselineContentCopy } from "@/assets/icon/BaselineContentCopy";
import { BaselineDelete } from "@/assets/icon/BaselineDelete";

export interface Props {
  title: string;
  email?: string | "";
}

function Quiz(props: Props) {
  return (
    <>
      <div className="w-full h-10 bg-white border-gray-300 shadow-md flex items-center my-2 rounded-md border-2 ">
        <span className="font-bold ml-4">{props.title}</span>
        <div className="h-10 w-[40%] lg:w-[50%] md:w-[60%] sm:w-[80%] absolute right-0 mr-4 flex items-center">
          <div className="h-10 w-10 text-[30px] flex items-center justify-center ">
            <UserCircleOutline />
          </div>
          <div className="h-full w-[30%] flex items-center">
            <span>{props.email}</span>
          </div>
          <div className="h-8 w-[30%] flex items-center">
            <Button title="Host Live" />
          </div>
          <div className="flex items-center absolute right-20 lg:right-14 mr-4 text-[28px] gap-6">
            <OutlineEdit className="hover:cursor-pointer hover:bg-gray-300 rounded-md" />
            <BaselineContentCopy className="hover:cursor-pointer hover:bg-gray-300 rounded-md" />
            <BaselineDelete className="hover:cursor-pointer hover:bg-gray-300 rounded-md" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Quiz;
