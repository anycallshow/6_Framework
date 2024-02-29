<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>

<title>대기오염 공공데이터</title>
</head>
<body>

    <h1>실시간 대기오염 정보</h1>

    지역 : 
    <select id="location">
        <option>전국</option>
        <option>서울</option>
        <option>부산</option>
        <option>대구</option>
        <option>인천</option>
        <option>광주</option>
        <option>울산</option>
        <option>경기</option>
        <option>강원</option>
        <option>충북</option>
        <option>충남</option>
        <option>전북</option>
        <option>전남</option>
        <option>경북</option>
        <option>경남</option>
        <option>제주</option>
        <option>세종</option>
    </select>

    <button id="btn1">해당 지역 대기오염 정보</button>
    <br><br>

    <table id="result1" border="1">
        <thead>
            <tr>
                <th>측정소명</th>
                <th>측정일시</th>
                <th>통합대기환경수치</th>
                <th>미세먼지농도</th>
                <th>아황산가스농도</th>
                <th>일산화탄소농도</th>
                <th>이산화질소농도</th>
                <th>오존농도</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>

    <script>
        $(function () {
            $("#btn1").click(function (){
                /* json 형식으로 응답 받을 때
                $.ajax({
                    url : "air", // 요청 주소
                    data : { location : $("#location").val()}, // 요청시 보낼 데이터
                    success : function (result){
                        // console.log(result);
                        // console.log(result.response.body.items);

                        $("#result1>tbody").html("");

                        const itemArr = result.response.body.items;
                        let value = "";
                        
                        for (let item of itemArr) {

                            value += "<tr>"
                                        +"<td>" + item.stationName + "</td>"
                                        +"<td>" + item.dataTime + "</td>"
                                        +"<td>" + item.khaiValue + "</td>"
                                        +"<td>" + item.pm10Value + "</td>"
                                        +"<td>" + item.so2Value + "</td>"
                                        +"<td>" + item.coValue + "</td>"
                                        +"<td>" + item.no2Value + "</td>"
                                        +"<td>" + item.o3Value + "</td>"
                                    + "</tr>"
                        }

                        $("#result1>tbody").html(value);
                    },
                    error : function (){
                        console.log("통신 실패"); 
                    }
                }) */

                // ------------------------------------------------------------------
                $.ajax({
                    url : "air",
                    data : {location : $("#location").val()},
                    success : function (result){
                        
                        //console.log(result);
                        
                        // $('요소명').find(매개변수)
                        // - 기준이 되는 요소의 하위 요소들 중 특정 요소를 찾을 때 사용
                        // - html, xml은 같은 markup language이기 때문에 사용 가능하다.
                        // console.log( $(result).find("item") );

                        // xml형식의 응답데이터를 받았을 때
                        // 1. 넘겨받은 데이터를 $() 제이쿼리화 시킨 후
                        //    응답데이터 안에 실제 데이터가 담겨있는 요소 선택
                        const itemArr = $(result).find("item");

                        // 2. 반복문을 통해 실제 데이터가 담김 요소들에 접근해서 동적으로 요소 만들기
                        let value;
                        itemArr.each(function(index, item){
                            // index : 순차적으로 접근하는 인덱스 수
                            // item : 실제 인덱스에 해당하는 값

                            // console.log(item);
                            // console.log(index);

                            // console.log($(item).find("stationName").text());

                            value += "<tr>"
                                        +"<td>" + $(item).find("stationName").text() + "</td>"
                                        +"<td>" + $(item).find("dataTime").text() + "</td>"
                                        +"<td>" + $(item).find("khaiValue").text() + "</td>"
                                        +"<td>" + $(item).find("pm10Value").text() + "</td>"
                                        +"<td>" + $(item).find("so2Value").text() + "</td>"
                                        +"<td>" + $(item).find("coValue").text() + "</td>"
                                        +"<td>" + $(item).find("no2Value").text() + "</td>"
                                        +"<td>" + $(item).find("o3Value").text() + "</td>"
                                    + "</tr>";
                        })
                        $("#result1>tbody").text("");
                        // 3. 동적으로 만들어낸 요소를 화면에 출력
                        $("#result1>tbody").html(value);

                    },
                    error : function (){
                        console.log("통신 실패");
                    }
                })

            })
            
        })
    </script>

    <hr>

    공공데이터사이트에 행정안전부_지진해일 긴급대피장소 검색 후 진행
    
    <h1>실시간 지진해일 긴급대피장소</h1>

    <button id="btn2">실시간 지진해일 대피소 정보</button>
    <br><br>

    <table border="1" id="result2">
    <thead>
        <tr>
            <th>시도명</th>
            <th>시군구명</th>
            <th>대피지구명</th>
            <th>대피장소명</th>
            <th>주소</th>
            <th>경도</th>
            <th>위도</th>
            <th>수용가능인원수</th>
            <th>대피소 분류명</th>
        </tr>
    </thead>
    <tbody></tbody>
    </table>

    <script>

        $(function (){
            $("#btn2").click(function (){
                $.ajax({
                    url : "tsunami",
                    success : function(result){
                        console.log(result);

                        const itemArr = $(result).find("row");

                        let value;
                        itemArr.each(function(index, item){
                            // index : 순차적으로 접근하는 인덱스 수
                            // item : 실제 인덱스에 해당하는 값

                            console.log(item);
                            // console.log(index);

                            value += "<tr>"
                                        +"<td>" + $(item).find("sido_name").text() + "</td>"
                                        +"<td>" + $(item).find("sigungu_name").text() + "</td>"
                                        +"<td>" + $(item).find("remarks").text() + "</td>"
                                        +"<td>" + $(item).find("shel_nm").text() + "</td>"
                                        +"<td>" + $(item).find("address").text() + "</td>"
                                        +"<td>" + $(item).find("lon").text() + "</td>"
                                        +"<td>" + $(item).find("lat").text() + "</td>"
                                        +"<td>" + $(item).find("shel_av").text() + "</td>"
                                        +"<td>" + $(item).find("shel_div_type").text() + "</td>"
                                    + "</tr>";
                        })
                        $("#result2>tbody").text("");
                        // 3. 동적으로 만들어낸 요소를 화면에 출력
                        $("#result2>tbody").html(value);



                    },
                    error : function(){
                        console.log("통신 실패");
                    }
                    
                })
            })
        })

    </script>
	
</body>
</html>