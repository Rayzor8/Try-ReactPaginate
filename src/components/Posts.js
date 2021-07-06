import React from 'react'

export const Posts = ({posts , loading}) => {
    if(loading){
        return (
            <h3 className="my-5 py-3 px-1 text-center mx-auto bg-danger text-white rounded display-5 display-sm-4 w-75">Wait Content Still Loading ...!</h3>
        )
    }

    return (
        <>
            {posts.map( post => (               
                <ul key={post.id} className="list-group mb-2 text-center">
                    <li className="list-group-item fw-bold">ID :  <span className="fw-normal">{post.id}</span></li>
                    <li className="list-group-item fw-bold">Posts Title :<span className="fw-normal">{post.title}</span></li>
                    <li className="list-group-item fw-bold">Posts Body :  <span className="fw-normal">{post.body}</span></li>
                </ul>
            ))}
        </>
    )
}
