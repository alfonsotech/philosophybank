import React from 'react'
import Resource from '../Resource'

const Resources = ({resources, history}) => {
  // console.log('history', history);
      return (
        <div>
          {resources.map( (resource, i) => {
            return (
                <Resource
                  key={resource._id}
                  index={(i+1)+'.'}
                  resource={resource}
                  history={history}
                />
            )
          }
        )}
      </div>
      )


}

export default Resources
