import React from 'react';

const Board = () => {
	return (
		<form name="fboardlist" id="fboardlist" action="./board_list_update.php" method="post" className="">
			<div id="bo_btn_top" className="clearfix f-de font-weight-normal mb-2 pl-3 pr-2 px-sm-0">
				<div className="d-flex align-items-center">
					<div id="bo_list_total" className="flex-grow-1">
						Total <b>8135</b> / 1 Page
					</div>
					<div className="btn-group" role="group">
						<button
							type="button"
							className="btn btn_b01 nofocus py-1"
							title="게시판 검색"
							data-toggle="collapse"
							data-target="#bo_search"
							aria-expanded="false"
							aria-controls="bo_search"
						>
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="search"
								className="svg-inline--fa fa-search fa-w-16 fa-md"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<path
									fill="currentColor"
									d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
								></path>
							</svg>
							<span className="sr-only">게시판 검색</span>
						</button>
						<a href="/job-opening/write">
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="pencil-alt"
								className="svg-inline--fa fa-pencil-alt fa-w-16 fa-md"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<path
									fill="currentColor"
									d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
								></path>
							</svg>
							<span className="sr-only">글쓰기</span>
						</a>
						<div className="btn-group" role="group">
							<button
								type="button"
								className="btn btn_b01 nofocus dropdown-toggle dropdown-toggle-empty dropdown-toggle-split py-1"
								data-toggle="dropdown"
								data-display="static"
								aria-haspopup="true"
								aria-expanded="false"
								title="게시물 정렬"
							>
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="sort-numeric-down"
									className="svg-inline--fa fa-sort-numeric-down fa-w-14 fa-md"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
								>
									<path
										fill="currentColor"
										d="M304 96h16v64h-16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-16V48a16 16 0 0 0-16-16h-48a16 16 0 0 0-14.29 8.83l-16 32A16 16 0 0 0 304 96zm26.15 162.91a79 79 0 0 0-55 54.17c-14.25 51.05 21.21 97.77 68.85 102.53a84.07 84.07 0 0 1-20.85 12.91c-7.57 3.4-10.8 12.47-8.18 20.34l9.9 20c2.87 8.63 12.53 13.49 20.9 9.91 58-24.76 86.25-61.61 86.25-132V336c-.02-51.21-48.4-91.34-101.85-77.09zM352 356a20 20 0 1 1 20-20 20 20 0 0 1-20 20zm-176-4h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352z"
									></path>
								</svg>
								<span className="sr-only">게시물 정렬</span>
							</button>
							<div className="dropdown-menu dropdown-menu-right p-0 border-0 bg-transparent text-right">
								<div className="btn-group-vertical bg-white border rounded py-1">
									<a className="btn px-3 py-1 text-left" role="button">
										날짜순
									</a>
									<a
										href="/bbs/board.php?bo_table=coin&amp;sop=and&amp;sst=wr_hit&amp;sod=desc&amp;sfl=&amp;stx=&amp;sca=&amp;page=1"
										className="btn px-3 py-1 text-left"
										role="button"
									>
										조회순
									</a>
									<a
										href="/bbs/board.php?bo_table=coin&amp;sop=and&amp;sst=wr_good&amp;sod=desc&amp;sfl=&amp;stx=&amp;sca=&amp;page=1"
										className="btn px-3 py-1 text-left"
										role="button"
									>
										추천순
									</a>
									<a
										href="/bbs/board.php?bo_table=coin&amp;sop=and&amp;sst=wr_nogood&amp;sod=desc&amp;sfl=&amp;stx=&amp;sca=&amp;page=1"
										className="btn px-3 py-1 text-left"
										role="button"
									>
										비추천순
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section id="bo_list" className="mb-4">
				<aside className="list-category">
					<div className="div-tab tabs trans-top hidden-xs">
						<ul className="nav nav-tabs">
							<li className="active">
								<div className="category-btn">전체</div>
							</li>
							<li className="">
								<div className="category-btn">Los Angeles</div>
							</li>
							<li className="">
								<div className="category-btn">San Diego</div>
							</li>
						</ul>
					</div>
				</aside>
				<div className="d-block d-md-none w-100 mb-0 bg-primary"></div>
				<div className="na-table d-none d-md-table w-100 mb-0">
					<div className="na-table-head border-primary d-md-table-row">
						<div className="d-md-table-cell nw-5 px-md-1">번호</div>
						<div className="d-md-table-cell nw-10 pl-2 pr-md-1">분류</div>
						<div className="d-md-table-cell pr-md-1">제목</div>
						<div className="d-md-table-cell nw-10 pl-2 pr-md-1">이름</div>
						<div className="d-md-table-cell nw-6 pr-md-1">
							<a>날짜</a>
						</div>
						<div className="d-md-table-cell nw-4 pr-md-1">
							<a href="/bbs/board.php?bo_table=coin&amp;sop=and&amp;sst=wr_hit&amp;sod=desc&amp;sfl=&amp;stx=&amp;sca=&amp;page=1">
								조회
							</a>
						</div>
						<div className="d-md-table-cell nw-3 pr-md-1">
							<a href="/bbs/board.php?bo_table=coin&amp;sop=and&amp;sst=wr_good&amp;sod=desc&amp;sfl=&amp;stx=&amp;sca=&amp;page=1">
								추천
							</a>
						</div>
						<div className="d-md-table-cell nw-3 pr-md-1">
							<a href="/bbs/board.php?bo_table=coin&amp;sop=and&amp;sst=wr_nogood&amp;sod=desc&amp;sfl=&amp;stx=&amp;sca=&amp;page=1">
								비추
							</a>
						</div>
					</div>
				</div>
				<ul className="na-table d-md-table w-100">
					<li className="d-md-table-row px-3 py-2 p-md-0 text-md-center text-muted border-bottom">
						<div className="d-none d-md-table-cell nw-5 f-sm font-weight-normal py-md-2 px-md-1">
							<span className="sr-only">번호</span>165824
						</div>
						<div className="float-right float-md-none d-md-table-cell nw-10 nw-md-auto text-left f-sm font-weight-normal pl-2 py-md-2 pr-md-1">
							<span className="sr-only">분류</span>
							<span className="sv_guest">Los Angeles</span>
						</div>
						<div className="d-md-table-cell text-left py-md-2 pr-md-1">
							<div className="na-title float-md-left">
								<div className="na-item">
									<a className="na-subject" href="/job-opening/165824">
										여성알바{' '}
									</a>
								</div>
							</div>
						</div>
						<div className="float-right float-md-none d-md-table-cell nw-10 nw-md-auto text-left f-sm font-weight-normal pl-2 py-md-2 pr-md-1">
							<span className="sr-only">등록자</span>
							<span className="sv_guest">Money1600</span>
						</div>
						<div className="float-left float-md-none d-md-table-cell nw-6 nw-md-auto f-sm font-weight-normal py-md-2 pr-md-1">
							<span className="sr-only">등록일</span>2021.11.13
						</div>
						<div className="float-left float-md-none d-md-table-cell nw-4 nw-md-auto f-sm font-weight-normal py-md-2 pr-md-1">
							<i className="fa fa-eye d-md-none" aria-hidden="true"></i>
							<span className="sr-only">조회</span>4
						</div>
						<div className="float-left float-md-none d-md-table-cell nw-3 nw-md-auto f-sm font-weight-normal py-md-2 pr-md-1">
							<i className="fa fa-thumbs-o-up d-md-none" aria-hidden="true"></i>
							<span className="sr-only">추천</span>0
						</div>
						<div className="float-left float-md-none d-md-table-cell nw-3 nw-md-auto f-sm font-weight-normal py-md-2 pr-md-1">
							<i className="fa fa-thumbs-o-down d-md-none" aria-hidden="true"></i>
							<span className="sr-only">비추천</span>0
						</div>
						<div className="clearfix d-block d-md-none"></div>
					</li>
				</ul>
			</section>
			<div className="font-weight-normal px-3 px-sm-0">
				<ul className="pagination justify-content-center en mb-0">
					<li className="page-prev page-item disabled disabled">
						<a className="page-link" tabindex="0" role="button" aria-disabled="true" aria-label="Previous page" rel="prev">
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="angle-left"
								className="svg-inline--fa fa-angle-left fa-w-8 text-muted"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 256 512"
							>
								<path
									fill="currentColor"
									d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
								></path>
							</svg>
						</a>
					</li>
					<li className="page-item page-item active">
						<a role="button" className="page-link" tabindex="0" aria-label="Page 1 is your current page" aria-current="page">
							1
						</a>
					</li>
					<li className="page-item">
						<a role="button" className="page-link" tabindex="0" aria-label="Page 2">
							2
						</a>
					</li>
					<li className="page-item">
						<a role="button" className="page-link" tabindex="0" aria-label="Page 3">
							3
						</a>
					</li>
					<li className="page-item">
						<a role="button" className="page-link" tabindex="0" aria-label="Page 4">
							4
						</a>
					</li>
					<li className="page-item">
						<a role="button" className="page-link" tabindex="0" aria-label="Page 5">
							5
						</a>
					</li>
					<li className="page-item">
						<a role="button" className="page-link" tabindex="0" aria-label="Page 6">
							6
						</a>
					</li>
					<li className="page-item break-me disabled">
						<a className="page-link disabled" role="button" tabindex="0">
							...
						</a>
					</li>
					<li className="page-item">
						<a role="button" className="page-link" tabindex="0" aria-label="Page 8134">
							8134
						</a>
					</li>
					<li className="page-item">
						<a role="button" className="page-link" tabindex="0" aria-label="Page 8135">
							8135
						</a>
					</li>
					<li className="page-next page-item">
						<a className="page-link" tabindex="0" role="button" aria-disabled="false" aria-label="Next page" rel="next">
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="angle-right"
								className="svg-inline--fa fa-angle-right fa-w-8 text-muted"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 256 512"
							>
								<path
									fill="currentColor"
									d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
								></path>
							</svg>
						</a>
					</li>
				</ul>
			</div>
		</form>
	);
};

export default Board;
