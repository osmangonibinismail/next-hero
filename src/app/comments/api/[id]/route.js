export async function PATCH(request, {params}){

    const body = await request.json()
    const index = comments.findIndex((c) => c.id === params);
    comments[index] = {
        text: body.text
    }

    return Response.json({
        message: "comment updated",
        comments
    })
}

const comments = [
    {
        id: 1,
        text: "comment 1"
    },
    {
        id: 2,
        text: "comment 2"
    },
    {
        id: 3,
        text: "comment 3"
    },
]