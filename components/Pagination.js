import React from 'react';

const Pagination = () => {
	return (
		<div className="font-weight-normal px-3 px-sm-0">
			<ul className="pagination justify-content-center en mb-0">
				<li className="page-item disabled">
					<a className="page-link">
						<i className="fa fa-angle-double-left"></i>
					</a>
				</li>
				<li className="page-item disabled">
					<a className="page-link">
						<i className="fa fa-angle-left"></i>
					</a>
				</li>
				<li className="page-item active" aria-current="page">
					<a className="page-link">
						1<span className="sr-only">(current)</span>
					</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="https://cagongtv.com/community?page=2">
						2
					</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="https://cagongtv.com/community?page=3">
						3
					</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="https://cagongtv.com/community?page=4">
						4
					</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="https://cagongtv.com/community?page=5">
						5
					</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="https://cagongtv.com/community?page=6">
						6
					</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="https://cagongtv.com/community?page=7">
						7
					</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="https://cagongtv.com/community?page=8">
						8
					</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="https://cagongtv.com/community?page=9">
						9
					</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="https://cagongtv.com/community?page=10">
						10
					</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="https://cagongtv.com/community?page=11">
						<i className="fa fa-angle-right"></i>
					</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="https://cagongtv.com/community?page=64">
						<i className="fa fa-angle-double-right"></i>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Pagination;
