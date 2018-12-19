import React from 'react'
import Path from '../Path'

const Paths = ({paths}) => {

      return (
        <ul className="paths-elements">
          {paths.map( (path, i) => {
            return (
              <li key={path._id}>
                <Path path={path} />
              </li>
            )
          }
        )}
      </ul>
      )
}

export default Paths
