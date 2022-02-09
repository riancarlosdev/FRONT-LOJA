import { DATA_info_page_top } from "../../datas/info-page-top"

export default function InfoTopPage():JSX.Element {
  return (
    <div className="flex justify-between items-center h-10">
      {DATA_info_page_top.map((e, i) => {
        return e.link ? (
          <a key={i} className="text-link-2 font-semibold text-sm hover:text-h-link-2 duration-500" title="Nossa central de atendimento" href={e.inLink}>{e.col}</a>
        ) : (
          <span key={i} className="text-text-2 font-semibold tracking-wide">{e.col}</span>
        )
      })}
    </div>
  )
}