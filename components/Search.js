import React from 'react';

const Search = () => {
	return (
		<div id="bo_search" className="collapse">
			<div className="alert bg-light border p-2 p-sm-3 mb-3 mx-3 mx-sm-0">
				<form id="fsearch" name="fsearch" method="get" className="m-auto" style={{ maxWidth: '600px' }}>
					<input type="hidden" name="bo_table" value="community" />
					<input type="hidden" name="sca" value="" />
					<div className="form-row mx-n1">
						<div className="col-6 col-sm-3 px-1">
							<label for="sfl" className="sr-only">
								검색대상
							</label>
							<select name="sfl" className="custom-select">
								<option value="wr_subject">제목</option>
								<option value="wr_content">내용</option>
								<option value="wr_subject||wr_content">제목+내용</option>
								<option value="wr_name,1">글쓴이</option>
								<option value="wr_name,0">글쓴이(코)</option>
							</select>
						</div>
						<div className="col-6 col-sm-3 px-1">
							<select name="sop" className="custom-select">
								<option value="and" selected="selected">
									그리고
								</option>
								<option value="or">또는</option>
							</select>
						</div>
						<div className="col-12 col-sm-6 pt-2 pt-sm-0 px-1">
							<label for="stx" className="sr-only">
								검색어
							</label>
							<div className="input-group">
								<input
									type="text"
									id="bo_stx"
									name="stx"
									value=""
									required=""
									className="form-control"
									placeholder="검색어를 입력해 주세요."
								/>
								<div className="input-group-append">
									<button type="submit" className="btn btn-primary" title="검색하기">
										<i className="fa fa-search" aria-hidden="true"></i>
										<span className="sr-only">검색하기</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Search;
