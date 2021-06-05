import React from 'react'

const Projects = () => {
  return (
    <div style={{ minHeight: 'calc(100vh-128px)' }}>
      Projects ...in progress
      {[...new Array(120)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
    </div>
  )
}

export default Projects
