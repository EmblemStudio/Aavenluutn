import React from 'react'

import Countdown from './Countdown'
import { Story } from '../utils'

interface UpcomingStoryProps {
  story: Story
}

export default ({ story }: UpcomingStoryProps) => {
  return (
    <div className="block has-text-grey has-text-centered">
      Leaving in <Countdown to={Number(story.startTime)} />
    </div>
  )
}