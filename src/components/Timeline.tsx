import './Timeline.css'

export interface TimelineItem {
  id: string
  title: string
  company: string
  startDate: string
  endDate: string
  location: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div key={item.id} className="timeline-item">
          <div className="timeline-marker">
            <div className="timeline-dot"></div>
            {index < items.length - 1 && <div className="timeline-line"></div>}
          </div>
          <div className="timeline-content">
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-company">{item.company}</p>
            <p className="timeline-dates">
              {item.startDate} — {item.endDate}
            </p>
            <p className="timeline-location">📍 {item.location}</p>
            <p className="timeline-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
