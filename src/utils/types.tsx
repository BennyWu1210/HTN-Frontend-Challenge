import { TEvent } from "./schema"

// ===================== Event List Props and framer motion styles ===================== 
export interface EventListProps {
  permission: string
}

export interface EventTileProps {
  start_time: string,
  end_time: string,
  event_name: string,
  event_type: string,
  id: number,
  onClick: (id: number) => void
}

export const displayVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.2,
      delayChildren: 0.2,
      staggerChildren: 0.12,
    }
  }
}

export const item = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0 }
}


// ===================== Event Props ===================== 
export interface EventProps {
  onClose: () => void
  event: TEvent
  events: TEvent[]
  handleEventClick: (id: number) => void
}

export const colorMap: { [key: string]: string } = {
  'workshop': 'bg-emerald-800',
  'tech_talk': 'bg-slate-700',
  'activity': 'bg-sky-600',
}