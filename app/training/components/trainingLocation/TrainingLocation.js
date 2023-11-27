import React from 'react'
import CountryLocation from './CountryLocation'

const TrainingLocation = ({ region, country }) => {
  return (
    <>
      <div class="item d-flex justify-content-center mt-60">
        <div class="heading">{region}</div>
        <ul class="mt-60">
          {
            country && country.map((p) => (
              <>
                <CountryLocation />
              </>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default TrainingLocation