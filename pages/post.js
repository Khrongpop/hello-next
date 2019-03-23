import { withRouter } from 'next/router'
import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import Markdown from 'react-markdown'


export default withRouter(props => (
  <Layout>
    <h1>{props.router.query.title}</h1>
    <div className="markdown">
      <Markdown
        source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
     `}
      />
    </div>
    <style jsx global>{`
      .markdown {
        font-family: 'Arial';
      }

      .markdown a {
        text-decoration: none;
        color: blue;
      }

      .markdown a:hover {
        opacity: 0.6;
      }

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
  </Layout>
))


// const Post = (props) => (
//   <Layout>
//     <h1>{props.res.name}</h1>
//     <p>{props.res.summary.replace(/<[/]?p>/g, '')}</p>
//     <img src={props.res.image.medium} />
//   </Layout>
// )

// Post.getInitialProps = async function(context) {
//   const { id } = context.query
//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`).then(response => response.json())
//   // const show = await res.json()
  

//   console.log(`Fetched show: ${res.name}`)

//   return { res }
// }

// export default Post



// const Page = withRouter(props => (
//   <Layout>
//     <h1>{props.router.query.title}</h1>
//     <p>This is the blog post content.</p>
//   </Layout>
// ))