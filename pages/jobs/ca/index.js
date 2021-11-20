import Head from 'next/head';
import axios from 'axios';
import Board from '../../../components/Board';

const Index = ({ posts }) => {
	const categories = ['Los Angeles', 'San Diego'];
	return (
		<>
			<Board posts={posts} categories={categories} />
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
