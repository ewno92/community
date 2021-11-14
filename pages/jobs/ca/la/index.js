import Head from 'next/head';
import axios from 'axios';
// import Board from '../../../components/Board';

const Index = ({ posts }) => {
	const categories = ['Los Angeles', 'San Diego'];
	return (
		<>
			<ul>
				{posts.map((post, index) => {
					return (
						<li key={index}>
							<a href={`/jobs/ca/la/post/${post.id}`}>{post.title}</a>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export const getServerSideProps = async ({ query }) => {
	const page = query.page || 1;
	console.log(page);
	const posts = await axios.get(`https://korean-community.herokuapp.com/api/ca/la/find-jobs/${page}`).then((res) => res.data);
	return { props: { posts } };
};

export default Index;
