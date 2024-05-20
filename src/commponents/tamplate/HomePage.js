import React from 'react'
import SectionOne from '../module/SectionOne'
import Abute from '../module/Abute'
import Skils from '../module/Skils'
import SkillSlider from '../module/slider/SkillSlider'
import CodingSvg3 from '../lottie/lottieSvgThree'
import WorkSamples from '../module/WorkSamples'

function HomePage() {
  return (
    <div>
      <SectionOne />
      <Abute />
      <Skils />
      <SkillSlider/>
      <WorkSamples/>
    </div>
  )
}

export default HomePage