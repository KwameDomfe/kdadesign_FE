import { useEffect } from "react"
import { useLoaderData, useParams } from "react-router-dom"

const PostDetails = () => {
    
    useEffect(() => {
        window.scroll(0,0)
    }, [])

    const { id } = useParams()
    const postObject = useLoaderData()

    return (
        <div>
            <h2>
                post Details For: {postObject.title}
            </h2>
            <p>Starting Salary : {postObject.salary} </p>
            <p>Location : {postObject.location} </p>
            <p>Id : {postObject.id} </p>
            <div>
                <p>
                Over the years, our thoughts, words, and deeds have contributed, to a great extent, to shape the various facets of life in KNUST and Ghana as a whole. Our mission is to bring Katanga Alumni worldwide together, to discover the opportunities available, and get involved in helping to build and strengthen our network.
                </p>
            </div>
        </div>
    )
}

export default PostDetails


// Loader Function

export const postDetailsLoader = async ({params}) => {
    
    const { id } = params

    const res = await fetch(`api+ ${id}`)
    console.log(res);

    if (!res.ok) {
        throw Error('Could not find post with ID no.' + id)
    }
    return res.json()
}