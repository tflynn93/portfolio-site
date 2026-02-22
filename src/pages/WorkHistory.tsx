import { useEffect } from 'react'
import { Timeline, type TimelineItem } from '../components/Timeline'

const workHistory: TimelineItem[] = [
  {
    id: '1',
    title: 'Backend Software Developer',
    company: 'Ford Motor Company',
    startDate: 'Aug 2021',
    endDate: 'Present',
    location: 'Remote',
    description: 'Ford Telematics',
  },
  {
    id: '2',
    title: 'Software Developer Sr',
    company: 'PNC Financial Services',
    startDate: 'Aug 2017',
    endDate: 'Aug 2021',
    location: 'Pittsburgh, PA (Hybrid)',
    description: 'Design and develop customer-facing payments solutions utilizing Java and Spring Framework.',
  },
  {
    id: '3',
    title: 'Associate Application Developer',
    company: 'DICK\'S Sporting Goods',
    startDate: 'Jun 2016',
    endDate: 'Aug 2017',
    location: 'Coraopolis, PA',
    description: 'Develop and support internal applications used by various groups within the PAR (Planning, Allocations, and Replenishment) and Visual Merchandising departments.  Frequently used technologies include Oracle PL/SQL, Unix shell scripting, Visual Basic, Control-M Workload Automation, and .NET framework.',
  },
]

export function WorkHistory() {
  useEffect(() => {
    document.title = 'Timothy Flynn | Work History'
  }, [])

  return (
    <div className="page-content">
      <h2>Work History</h2>
      <p>
        An overview of my professional experience.
      </p>
      <Timeline items={workHistory} />
    </div>
  )
}
