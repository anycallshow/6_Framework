package edu.kh.project.member.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.kh.project.member.model.dto.Member;

@Repository // DB 연결 의미 + Bean 등록 (IOC)
public class AjaxDAO {
	
	@Autowired // bean 중에서 타입이 같은 객체를 DI
	private SqlSessionTemplate sqlSession;

	/** 이메일로 닉네임 조회 DAO
	 * @param email
	 * @return nickname
	 */
	public String selectNickname(String email) {
		
		return sqlSession.selectOne("ajaxMapper.selectNickname",email);
	}

	/** 닉네임으로 전화번호 조회 DAO
	 * @param nickname
	 * @return memberTel
	 */
	public String selectMemberTel(String nickname) {
		
		return sqlSession.selectOne("ajaxMapper.selectMemberTel",nickname);
	}

	/** 이메일 중복 검사 DAO
	 * @param email
	 * @return count
	 */
	public int checkEmail(String email) {
		
		return sqlSession.selectOne("ajaxMapper.checkEmail",email);
	}

	/** 닉네임 중복 검사 DAO
	 * @param nickname
	 * @return count
	 */
	public int checkNickname(String nickname) {
		
		return sqlSession.selectOne("ajaxMapper.checkNickname",nickname);
	}

	/** 이메일로 회원 정보 조회 DAO
	 * @param email
	 * @return member
	 */
	public Member selectMember(String email) {
		return sqlSession.selectOne("ajaxMapper.selectMember", email);
	}

}
