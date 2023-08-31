import { ReactElement } from "react"
import TaskAltIcon from '@mui/icons-material/TaskAlt'

type ProgressBarProps = {
    steps: ReactElement[]
    currentStepIndex: number
  }

export default function ProgressBar({steps, currentStepIndex}: ProgressBarProps) {

    let perc = 0
    if (currentStepIndex !== 0) {
        perc = (currentStepIndex / steps.length) * 100
        perc = roundNearest5(perc)
    }

    let percColor = ''
    currentStepIndex === 0 ? percColor = '#7F7F7F' : percColor = 'var(--primary)'

    function roundNearest5(num: number) {
        return Math.round(num / 5) * 5
      }

    const progressList = steps.map((step, index) => {
        
        let color = ''
        index === currentStepIndex ? color = '#7F7F7F' :
        index < currentStepIndex ? color = 'var(--primary)' :
        color = '#B2B2B2'

        return <div style={{display: 'flex', alignItems: 'center', marginBottom: '2px'}}>
            <div style={{background: color, width: '2px', height: '50px', marginLeft: '12px'}}></div>
            <div style={{color: color, margin: '0 16px 0 35px'}} className="progress-title">{step.props.title}</div>
            {index === currentStepIndex && <div className="progress-mark" style={{color: '#7F7F7F', fontSize: '12px' }}>•</div>}
            {index < currentStepIndex && <TaskAltIcon className="progress-mark" sx={{ color: 'var(--primary)', fontSize: '16px', mr: '16px'}} /> }
        </div>
    })

    return (
        <div className='progress-bar'>
            <div style={{color: percColor, marginBottom: '12px'}}>{perc}%</div>
            {progressList}
        </div>
    )
}