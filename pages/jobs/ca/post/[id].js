import React from 'react';
import Head from 'next/head';
import axios from 'axios';

const Index = ({ post }) => {
	console.log(post);
	return <div>test</div>;
};

export const getServerSideProps = async (context) => {
	const { id } = context.query;
	console.log(id);
	const post = await axios.get(`https://korean-community.herokuapp.com/api/ca/la/find-job/${id}`).then((res) => res.data);
	return { props: { post } };
};

export default Index;
