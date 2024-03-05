package edu.kh.project.board.model.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.kh.project.board.model.dto.Board;
import edu.kh.project.board.model.dto.Pagination;

/**
 * @author user1
 *
 */
@Repository
public class BoardDAO {
	
	@Autowired
	private SqlSessionTemplate sqlSession;

	/** 게시판 종류 목록 조회 DAO
	 * @return boardTypeList
	 */
	public List<Map<String, Object>> selectBoardTypeList() {
		return sqlSession.selectList("boardMapper.selectBoardTypeList");
	}

	/** 특정 게시판의 삭제되지 않은 게시글 수 조회 DAO
	 * @param boardCode
	 * @return listCount
	 */
	public int getListCount(int boardCode) {
		return sqlSession.selectOne("boardMapper.getListCount", boardCode);
	}

	/** 특정 게시판에서 현재 페이지에 해당하는 부분에 대한 게시글 목록 조회 DAO
	 * @param pagination
	 * @param boardCode
	 * @return boardList
	 */
	public List<Board> selectBoardList(Pagination pagination, int boardCode) {
		
		// RowBounds 객체
		// - 마이바티스에서 페이징 처리를 위해 제공하는 객체
		// - offset만큼 건너 뛰고
		//   그 다음 지정된 행 개수(limit) 만큼 조회
		
		// 1) offset 계산
		int offset
		= (pagination.getCurrentPage() - 1) * pagination.getLimit();
		
		// 2) RowBounds 객체 생성
		RowBounds rowBounds = new RowBounds(offset, pagination.getLimit());
		
		// 3) selectList("namespace.id", 파라미터, RowBounds) 호출 
		
		return sqlSession.selectList("boardMapper.selectBoardList", boardCode, rowBounds);
	}

	/** 게시글 상세 조회 DAO
	 * @param map
	 * @return board
	 */
	public Board selectBoard(Map<String, Object> map) {
		return sqlSession.selectOne("boardMapper.selectBoard", map);
	}

	/** 좋아요 여부 확인
	 * @param map
	 * @return count(0또는1)
	 */
	public int boardLikeCheck(Map<String, Object> map) {
		return sqlSession.selectOne("boardMapper.boardLikeCheck",map);
	}

	/** 좋아요 테이블 삽입 DAO
	 * @param paramMap
	 * @return result
	 */
	public int insertBoardLike(Map<String, Integer> paramMap) {
		return sqlSession.insert("boardMapper.insertBoardLike", paramMap);
	}

	/** 좋아요 테이블 삭제 DAO
	 * @param paramMap
	 * @return result
	 */
	public int deleteBoardLike(Map<String, Integer> paramMap) {
		return sqlSession.delete("boardMapper.deleteBoardLike", paramMap);
	}

	/** 현재 게시글 좋아요 개수 조회 DAO
	 * @param boardNo
	 * @return count
	 */
	public int countBoardLike(Integer boardNo) {
		return sqlSession.selectOne("boardMapper.countBoardLike", boardNo);
	}

	/** 조회수 증가 DAO
	 * @param boardNo
	 * @return result
	 */
	public int updateReadCount(int boardNo) {
		return sqlSession.update("boardMapper.updateReadCount", boardNo);
	}

	/** 게시글 수 조회(검색)
	 * @param paramMap
	 * @return listCount
	 */
	public int getListCount(Map<String, Object> paramMap) {
		return sqlSession.selectOne("boardMapper.getListCount_search",paramMap);
	}

	/** 게시글 목록 조회(검색)
	 * @param pagination
	 * @param paramMap
	 * @return boardList
	 */
	public List<Board> selectBoardList(Pagination pagination, Map<String, Object> paramMap) {
		
		// 1) offset 계산
		int offset
		= (pagination.getCurrentPage() - 1) * pagination.getLimit();
		
		// 2) RowBounds 객체 생성
		RowBounds rowBounds = new RowBounds(offset, pagination.getLimit());
		
		// 3) selectList("namespace.id", 파라미터, RowBounds) 호출
		return sqlSession.selectList("boardMapper.selectBoardList_search", paramMap, rowBounds);
	}

	/** 헤더 검색 자동완성 DAO
	 * @param query
	 * @return boardList
	 */
	public List<Board> boardSearch(String query) {
		return sqlSession.selectList("boardMapper.boardSearch", query);
	}

	/** DB 이미지(파일) 목록 조회 DAO
	 * @return dbImageList
	 */
	public List<String> selectImageList() {
		return sqlSession.selectList("boardMapper.selectImageListAll");
	}
	
}
