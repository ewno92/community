import React from 'react';
import Search from './Search';
import Category from './Category';
import Pagination from './Pagination';
const Board = ({ posts, categories }) => {
	console.log(posts);
	return (
		<div id="bo_list_wrap" className="mb-4">
			<Search />
			<Category />

			<form name="fboardlist" id="fboardlist" action="./board_list_update.php" onsubmit="return fboardlist_submit(this);" method="post">
				{/* <input type="hidden" name="bo_table" value="community"></input>
				<input type="hidden" name="sfl" value=""></input>
				<input type="hidden" name="stx" value=""></input>
				<input type="hidden" name="spt" value=""></input>
				<input type="hidden" name="sca" value=""></input>
				<input type="hidden" name="sst" value="wr_datetime desc"></input>
				<input type="hidden" name="sod" value=""></input>
				<input type="hidden" name="page" value="1"></input>
				<input type="hidden" name="sw" value=""></input> */}
				{/* <!-- 게시판 페이지 정보 및 버튼 시작 { --> */}
				<div id="bo_btn_top" className="clearfix f-de font-weight-normal mb-2 pl-3 pr-2 px-sm-0">
					<div className="d-flex align-items-center">
						<div id="bo_list_total" className="flex-grow-1">
							Total <b>946</b> / 1 Page
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
								<i className="fa fa-search fa-md" aria-hidden="true"></i>
								<span className="sr-only">게시판 검색</span>
							</button>
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
									<i className="fa fa-sort-numeric-desc fa-md" aria-hidden="true"></i>
									<span className="sr-only">게시물 정렬</span>
								</button>
								<div className="dropdown-menu dropdown-menu-right p-0 border-0 bg-transparent text-right">
									<div className="btn-group-vertical bg-white border rounded py-1">
										<a
											href="/bbs/board.php?bo_table=community&amp;sop=and&amp;sst=wr_datetime&amp;sod=desc&amp;sfl=&amp;stx=&amp;sca=&amp;page=1"
											className="btn px-3 py-1 text-left"
											role="button"
										>
											날짜순
										</a>
										<a
											href="/bbs/board.php?bo_table=community&amp;sop=and&amp;sst=wr_hit&amp;sod=desc&amp;sfl=&amp;stx=&amp;sca=&amp;page=1"
											className="btn px-3 py-1 text-left"
											role="button"
										>
											조회순
										</a>
										<a
											href="/bbs/board.php?bo_table=community&amp;sop=and&amp;sst=wr_good&amp;sod=desc&amp;sfl=&amp;stx=&amp;sca=&amp;page=1"
											className="btn px-3 py-1 text-left"
											role="button"
										>
											추천순
										</a>
										<a
											href="/bbs/board.php?bo_table=community&amp;sop=and&amp;sst=wr_nogood&amp;sod=desc&amp;sfl=&amp;stx=&amp;sca=&amp;page=1"
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
				{/* <!-- } 게시판 페이지 정보 및 버튼 끝 --> */}

				{/* <!-- 게시물 목록 시작 { --> */}

				<section id="bo_list" className="mb-4">
					{/* <!-- 목록 헤드 --> */}
					<div className="d-block d-md-none w-100 mb-0 bg-primary" style={{ height: '4px' }}></div>

					<div className="na-table d-none d-md-table w-100 mb-0">
						<div className="na-table-head border-primary d-md-table-row">
							<div className="d-md-table-cell nw-5 px-md-1">번호</div>
							<div className="d-md-table-cell pr-md-1">제목</div>
							<div className="d-md-table-cell nw-10 pl-2 pr-md-1">이름</div>
							<div className="d-md-table-cell nw-6 pr-md-1">
								<a href="/bbs/board.php?bo_table=community&amp;sop=and&amp;sst=wr_datetime&amp;sod=desc&amp;sfl=&amp;stx=&amp;sca=&amp;page=1">
									날짜
								</a>
							</div>
							<div className="d-md-table-cell nw-4 pr-md-1">
								<a href="/bbs/board.php?bo_table=community&amp;sop=and&amp;sst=wr_hit&amp;sod=desc&amp;sfl=&amp;stx=&amp;sca=&amp;page=1">
									조회
								</a>
							</div>
							<div className="d-md-table-cell nw-3 pr-md-1">
								<a href="/bbs/board.php?bo_table=community&amp;sop=and&amp;sst=wr_good&amp;sod=desc&amp;sfl=&amp;stx=&amp;sca=&amp;page=1">
									추천
								</a>
							</div>
							<div className="d-md-table-cell nw-3 pr-md-1">
								<a href="/bbs/board.php?bo_table=community&amp;sop=and&amp;sst=wr_nogood&amp;sod=desc&amp;sfl=&amp;stx=&amp;sca=&amp;page=1">
									비추
								</a>
							</div>
						</div>
					</div>

					<ul className="na-table d-md-table w-100">
						<li className="d-md-table-row px-3 py-2 p-md-0 text-md-center text-muted border-bottom bg-light">
							<div className="d-none d-md-table-cell nw-5 f-sm font-weight-normal py-md-2 px-md-1">
								<span className="na-notice bg-primary"></span>
								<span className="sr-only">공지사항</span>
							</div>
							<div className="d-md-table-cell text-left py-md-2 pr-md-1">
								<div className="na-title float-md-left">
									<div className="na-item">
										<a href="https://cagongtv.com/community/1" className="na-subject">
											<span className="na-icon na-hot"></span>
											<strong>
												자유토크 <span className="na-bar"></span> 카공 커뮤니티 게시판 이용가이드 안내
											</strong>
										</a>
									</div>
								</div>
							</div>
							<div className="float-right float-md-none d-md-table-cell nw-10 nw-md-auto text-left f-sm font-weight-normal pl-2 py-md-2 pr-md-1">
								<span className="sr-only">등록자</span>
								<span className="sv_member">카공운영자</span>
							</div>
							<div className="float-left float-md-none d-md-table-cell nw-6 nw-md-auto f-sm font-weight-normal py-md-2 pr-md-1">
								<span className="sr-only">등록일</span>
								2020.11.03
							</div>
							<div className="float-left float-md-none d-md-table-cell nw-4 nw-md-auto f-sm font-weight-normal py-md-2 pr-md-1">
								<i className="fa fa-eye d-md-none" aria-hidden="true"></i>
								<span className="sr-only">조회</span>
								1967
							</div>
							<div className="float-left float-md-none d-md-table-cell nw-3 nw-md-auto f-sm font-weight-normal py-md-2 pr-md-1">
								<i className="fa fa-thumbs-o-up d-md-none" aria-hidden="true"></i>
								<span className="sr-only">추천</span>1
							</div>
							<div className="float-left float-md-none d-md-table-cell nw-3 nw-md-auto f-sm font-weight-normal py-md-2 pr-md-1">
								<i className="fa fa-thumbs-o-down d-md-none" aria-hidden="true"></i>
								<span className="sr-only">비추천</span>0
							</div>
							<div className="clearfix d-block d-md-none"></div>
						</li>
					</ul>
				</section>
				{/* <!-- } 게시물 목록 끝 --> */}

				{/* <!-- 페이지 시작 { --> */}
				<Pagination />
				{/* <!-- } 페이지 끝 --> */}
			</form>
		</div>
	);
};

export default Board;
