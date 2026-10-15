import { useState } from 'react'

export default function FaqList({ items }) {
  const [openIndex, setOpenIndex] = useState(0)
  return <div className="faq-list">{items.map((item, index) => {
    const open = openIndex === index
    return (
      <article className="faq-item" key={item.question}>
        <h3><button type="button" aria-expanded={open} onClick={() => setOpenIndex(open ? -1 : index)}><span>{item.question}</span><span aria-hidden="true">{open ? '−' : '+'}</span></button></h3>
        {open && <div className="faq-answer"><p>{item.answer}</p></div>}
      </article>
    )
  })}</div>
}
