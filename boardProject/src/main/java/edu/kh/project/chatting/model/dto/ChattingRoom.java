package edu.kh.project.chatting.model.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ChattingRoom {
    private int chattingNo; // 채팅방 번호
    private String lastMessage; // 마지막 메세지
    private String sendTime; // 보낸 시간
    private int targetNo; // 받는 회원 번호
    private String targetNickName; // 받는 회원 이름
    private String targetProfile; // 받는 회원 프로필 이미지
    private int notReadCount; // 읽음여부
    
}