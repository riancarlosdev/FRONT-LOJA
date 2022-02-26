import { useSelector } from "react-redux";
import { infoQntBag_type, redux_type } from "../../types";
import styles from './styles.module.css'

export default function InfoQntBag_component({qnt}:infoQntBag_type): JSX.Element {

  const ActualWidth = useSelector((state:redux_type) => state.screen)

  return (
    <div className={`absolute ${ActualWidth > 640 ? '-top-2 -right-2  w-5 h-5' : '-top-1 -right-1 w-4 h-4'} rounded-full bg-text-1 border flex justify-center items-center`}>
      <span className={`text-1 ${ActualWidth > 640 ? 'text-sm' : 'text-xs'}  font-bold`} id={styles.numero}>{qnt}</span>
    </div>
  )
}