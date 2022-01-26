
function NewsArticleList({ articles }) {
    return <><h1>List of News Articles</h1>
        {articles.map((article => {
            return (

                <div key={article.id}>

                    {article.id} {article.title} {article.category}

                </div>
            )
        }))}
    </>

}

export default NewsArticleList

export async function getServerSideProps() {
    console.log(`Pre-rendering News Article`)
    const response = await fetch('http://localhost:4000/news')
    const data = await response.json()
    return {
        props: {
            articles: data
        }
    }
}