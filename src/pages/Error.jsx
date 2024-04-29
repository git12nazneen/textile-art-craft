import React from 'react';
import error from '../assets/pngegg.png'
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div>
            <section className="flex items-center h-full sm:p-16 bg-purple-100 text-gray-100">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
		<img src={error} alt="" />
		<p className="text-3xl">Looks like our services are currently offline</p>
		<Link to='/'>
        <a rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded bg-violet-100 text-gray-900">Back to homepage</a></Link>
	</div>
</section>
        </div>
    );
};

export default Error;