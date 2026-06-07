import React, {useState} from 'react'
import './Card.css'

const Card = ({icon = '📄', title = 'Tytuł', description = 'Opis karty.'}) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      role="button"
      className={`card ${expanded ? 'expanded' : 'normal'}`}
      onClick={() => setExpanded(v => !v)}
    >
      <div>
       {icon} {title}
      </div>

      <div className="card__body-wrap">
          {description}
      </div>
    </div>
  )
}

export default Card