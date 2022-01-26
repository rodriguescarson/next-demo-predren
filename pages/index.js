import Link from "next/link"
function Home() {
  return (
    <>
      <h1>h1</h1>
      <Link href='/users'>
        <a>Users</a>
      </Link>
      <Link href='/posts'>
        <a>Posts</a>
      </Link>
      <Link href='/products'>
        <a>Products</a>
      </Link>

    </>
  )
}
export default Home