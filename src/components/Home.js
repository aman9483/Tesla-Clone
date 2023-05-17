import React from 'react'
import Styled from 'styled-components'
import Section from './Section'


const Home = () => {
  
  
  return (

   

    
    <Container>

    
    <Section
    
    title="Model S"

    description = "Schedule a Demo Drive"

    backgroundImg = 'model-s.jpg'

    leftBtnText = "custom order"
  
    rightBtnText  = "view inventory"

   
    
    />
    <Section
    
    title="Model Y"

    description = "Schedule a Demo Drive"

    backgroundImg = 'model-y.jpg'

    leftBtnText = "custom order"
  
    rightBtnText  = "view inventory"
    
    
    />

<Section
    
    title="Model 3"

    description = "Schedule a Demo Drive"

    backgroundImg = 'model-3.jpg'

    leftBtnText = "custom order"
  
    rightBtnText  = "view inventory"
    
    />

    <Section
    
    title="Model X"

    description = "Schedule a Demo Drive"

    backgroundImg = 'model-x.jpg'

    leftBtnText = "custom order"
  
    rightBtnText  = "view inventory"
    
    />

<Section
    
    title="Solar Panel "

    description = "Schedule a Demo Drive"

    backgroundImg = 'solar-panel.jpg'

    leftBtnText = "custom order"
  
    rightBtnText  = "view inventory"
    
    />

<Section
    
    title="Solar Roof"

    description = "Schedule a Demo Drive"

    backgroundImg = 'solar-roof.jpg'

    leftBtnText = "custom order"
  
    rightBtnText  = "view inventory"
    
    />

<Section
    
    title="Accessories"

    backgroundImg = 'accessories.jpg'

    leftBtnText = "shop now"
  

    
    />
    
   
    
    </Container>
  )

  
}

export default Home

const Container = Styled.div`

height: 100vh;


`
