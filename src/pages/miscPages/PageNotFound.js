import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  
    return (
        <div>
            <h2>
            Page Not Found
            </h2>
            <p>
            Over the years, our thoughts, words, and deeds have contributed, to a great extent, to shape the various facets of life in KNUST and Ghana as a whole. Our mission is to bring Katanga Alumni worldwide together, to discover the opportunities available, and get involved in helping to build and strengthen our network.
            </p>

            <p>Go to the <Link to = '/'>Homepage</Link></p>
        </div>
    )
}

export default PageNotFound
