function ArticelListByCategory({ articles, category }) {
    return (
        <>
            <h1>Showing news for category</h1>
            {
                articles.map(article => {
                    return (
                        <div key={article.id}>
                            <h2>
                                {article.id} {article.title}
                            </h2>
                            <p>{article.description}</p>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )

}

export default ArticelListByCategory

export async function getServerSideProps(context) {
    const { params, req, res, query } = context
    const { category } = params
    console.log(query)
    console.log(req.headers.cookie)

    console.log(`Pre-rendering News Article for category ${category}`)

    res.setHeader('Set-Cookie', ['name = Carson'])
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json()

    return {
        props: {
            articles: data,
            category
        }
    }
}