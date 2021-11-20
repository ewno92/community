import React from 'react';

const Category = () => {
	return (
		<nav id="bo_cate" className="sly-tab font-weight-normal mb-2">
			<h3 className="sr-only">커뮤니티 분류 목록</h3>
			<div className="px-3 px-sm-0">
				<div className="d-flex">
					<div id="bo_cate_list" className="sly-wrap flex-grow-1" style={{ overflow: 'hidden' }}>
						<ul
							id="bo_cate_ul"
							className="sly-list d-flex border-left-0 text-nowrap"
							style={{ transform: 'translateZ(0px)', width: '567px', minWidth: '577px' }}
						>
							<li className="active">
								<a className="py-2 px-3" href="https://cagongtv.com/community">
									전체
								</a>
							</li>
							<li>
								<a className="py-2 px-3" href="https://cagongtv.com/community?sca=%EA%B0%80%EC%9E%85%EC%9D%B8%EC%82%AC">
									가입인사
								</a>
							</li>
							<li>
								<a className="py-2 px-3" href="https://cagongtv.com/community?sca=%EC%9E%90%EC%9C%A0%ED%86%A0%ED%81%AC">
									자유토크
								</a>
							</li>
							<li>
								<a className="py-2 px-3" href="https://cagongtv.com/community?sca=%EA%B2%8C%EC%9E%84%ED%9B%84%EA%B8%B0">
									게임후기
								</a>
							</li>
							<li>
								<a className="py-2 px-3" href="https://cagongtv.com/community?sca=%ED%95%B4%EC%99%B8%ED%86%B5%EC%8B%A0">
									해외통신
								</a>
							</li>
							<li>
								<a className="py-2 px-3" href="https://cagongtv.com/community?sca=%EC%B9%B4%EC%A7%80%EB%85%B8%EC%8D%B0">
									카지노썰
								</a>
							</li>
							<li>
								<a className="py-2 px-3" href="https://cagongtv.com/community?sca=%EC%A7%88%EB%AC%B8%EB%8B%B5%EB%B3%80">
									질문답변
								</a>
							</li>
						</ul>
					</div>
					<div>
						<a href="javascript:;" className="sly-btn sly-prev ca-prev py-2 px-3 disabled d-inline-block">
							<i className="fa fa-angle-left" aria-hidden="true"></i>
							<span className="sr-only">이전 분류</span>
						</a>
					</div>
					<div>
						<a href="javascript:;" className="sly-btn sly-next ca-next py-2 px-3 d-inline-block">
							<i className="fa fa-angle-right" aria-hidden="true"></i>
							<span className="sr-only">다음 분류</span>
						</a>
					</div>
				</div>
			</div>
			<hr />
		</nav>
	);
};

export default Category;
