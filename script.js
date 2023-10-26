let listOfPosts2 = [

    {

        id: 1,

        post: 'some post1',

        title: 'title 1',

        author: 'Ivanov',

        comments: [

            {

                id: 1.1,

                comment: 'some comment1',

                title: 'title 1',

                author: 'Rimus'

            },

            {

                id: 1.2,

                comment: 'some comment2',

                title: 'title 2',

                author: 'Uncle'

            }

        ]

    },

    {

        id: 2,

        post: 'some post2',

        title: 'title 2',

        author: 'Petrov',

        comments: [

            {

                id: 1.1,

                comment: 'some comment1',

                title: 'title 1',

                author: 'Rimus'

            },

            {

                id: 1.2,

                comment: 'some comment2',

                title: 'title 2',

                author: 'Uncle'

            },

            {

                id: 1.3,

                comment: 'some comment3',

                title: 'title 3',

                author: 'Rimus'

            }

        ]

    },

    {

        id: 3,

        post: 'some post3',

        title: 'title 3',

        author: 'Rimus'

    },

    {

        id: 4,

        post: 'some post4',

        title: 'title 4',

        author: 'Uncle'

    }

]


function getQuntityPostsByAuthor (listOfPosts, nameAuthor) {
    let countPost = countComment = 0

    listOfPosts.forEach(post => {
        if(post.author == nameAuthor) {
            countPost++
        }
        if (Array.isArray(post.comments))
            post.comments.forEach(comm => {
                if(comm.author == nameAuthor) {
                    countComment++
                }
            })
    })
    
    console.log(`result -> post - ${countPost}, comments – ${countComment}`)
}

getQuntityPostsByAuthor (listOfPosts2, 'Rimus')
