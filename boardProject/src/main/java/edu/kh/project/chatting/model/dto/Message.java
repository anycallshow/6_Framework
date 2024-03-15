package edu.kh.project.chatting.model.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Message {
    private int messageNo; // 메세지 번호
    private String messageContent; // 메세지 내용
    private String readFlag; // 읽음 표시
    private int senderNo; // 보낸 회원 번호
    private int targetNo; // 받는 회원 번호
    private int chattingNo; // 채팅방 번호
    private String sendTime; // 보낸 시간
}