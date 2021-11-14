import React from 'react';
import Head from 'next/head';
import axios from 'axios';

const Index = ({ post }) => {
	console.log(post);
	return <div>test</div>;
};

export const getServerSideProps = async (ctx) => {
	const post = await axios.get(`https://korean-community.herokuapp.com/api/ca/la/find-job/${ctx.params.id}`).then((res) => res.data);
	return { props: { post } };
};

export default Index;
