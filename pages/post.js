import { withRouter } from 'next/router'
import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

// const Page = withRouter(props => (
//   <Layout>
//     <h1>{props.router.query.title}</h1>
//     <p>This is the blog post content.</p>
//   </Layout>
// ))

const Post = (props) => (
  <Layout>
    <h1>{props.res.name}</h1>
    <p>{props.res.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.res.image.medium} />
  </Layout>
)

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`).then(response => response.json())
  // const show = await res.json()
  

  console.log(`Fetched show: ${res.name}`)

  return { res }
}

export default Post