import styles from './styles.module.css'

export default function CepPreview_component():JSX.Element {
  return (
    <div className="mx-1">
      <div className="bg-text-2 p-1 flex items-center justify-center" id={styles.preview_cep}>
        <span className='text-sm'>Sao sebastiao do passe, Bahia - Brasil</span>
      </div>
    </div>
  )
}