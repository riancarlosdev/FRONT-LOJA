type ArticleCombo_type = {
  img: string
  description: string
}

import styles from './styles.module.css'

export default function ArticleCombo_component({img, description}:ArticleCombo_type):JSX.Element {
  return (
    <article className="mx-2">
      <div className="max-w-sm sm:max-w-xs lg:max-w-sm bg-4">
        <img src={img} alt="img" className="w-full" id={styles.minImg} />

        <div className="p-4">
          <p className="text-center leading-normal text-1 md:text-lg font-semibold">{description}</p>
        </div>
      </div>
    </article>
  )
}