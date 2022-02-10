import { infoQntBag_type } from "../../../types";

export default function InfoQntBag_component({qnt}:infoQntBag_type): JSX.Element {
  return (
    <div className="absolute -top-2 -right-1 w-5 h-5 rounded-full bg-1 flex justify-center items-center">
      <span className="text-text-1 text-sm font-bold pb-1">{qnt}</span>
    </div>
  )
}