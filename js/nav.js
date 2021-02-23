//네비게이션(Navigation) : GNB(메인메뉴) & LNB(서브메뉴)
//마우스를 메인메뉴에 클릭하면 해당 서브메뉴가 아래로 나타난다.
//1. 메인메뉴를 클릭하면 해당 메인메뉴에 on 클래스가 추가(addClass)된다.
//   그리고 해당 버튼을 제외한 모든 버튼은 클릭스가 삭제(removeClass)된다.
//2. 해당 아래 서브메뉴에도 on 클래스가 추가(addClass)된다.
//   그리고 해당 서브메뉴를 제외한 모든 서브메뉴는 클래스가 삭제(removeClass)된다.
//3. 해당 메인메뉴와 서브메뉴의 영역을 떠나면(mouseleave == mouseout)
//   메인메뉴와 서브메뉴 모두 초기화 모든 클래스 삭제(removeClass)된다.
// window.onload = function(){

// }

var nav = {
    init:function(){
        this.navFn();
        this.forFn();
    },
    navFn:function(){
        var $mainBtn = document.getElementsByClassName('main-btn');
        var $sub     = document.getElementsByClassName('sub');
        var $navArea = document.getElementsByClassName('nav-area');

            //메인0 버튼 클릭 추가(add) 이벤트(Event) 리스너(Listener) 등록
            //버튼 타겟 EventTarget ==> $mainBtn[0]
            $mainBtn[0].addEventListener('mouseenter', function(event){
                event.preventDefault();
                // this.classList.add('on');  //addClass('on') 제이쿼리
                $mainBtn[0].classList.add('on');
                $mainBtn[1].classList.remove('on');
                $mainBtn[2].classList.remove('on');
                $mainBtn[3].classList.remove('on');
                
                //서브메뉴 보이기(show())
                $sub[0].classList.add('on');
                $sub[1].classList.remove('on');
                $sub[2].classList.remove('on');
                $sub[3].classList.remove('on');

            },false);

            //버튼 타겟 EventTarget ==> $mainBtn[1]
            $mainBtn[1].addEventListener('mouseenter', function(event){
                event.preventDefault();
                // this.classList.add('on');  //addClass('on') 제이쿼리
                $mainBtn[1].classList.add('on');
                $mainBtn[0].classList.remove('on');
                $mainBtn[2].classList.remove('on');
                $mainBtn[3].classList.remove('on');   

                //서브메뉴 보이기(show())
                $sub[1].classList.add('on');
                $sub[0].classList.remove('on');
                $sub[2].classList.remove('on');
                $sub[3].classList.remove('on');                
            },false);

            //버튼 타겟 EventTarget ==> $mainBtn[2]
            $mainBtn[2].addEventListener('mouseenter', function(event){
                event.preventDefault();
                this.classList.add('on');  //addClass('on') 제이쿼리
                $mainBtn[2].classList.add('on');
                $mainBtn[0].classList.remove('on');
                $mainBtn[1].classList.remove('on');
                $mainBtn[3].classList.remove('on'); 
                
                //서브메뉴 보이기(show())
                $sub[2].classList.add('on');
                $sub[0].classList.remove('on');
                $sub[1].classList.remove('on');
                $sub[3].classList.remove('on');

            },false);

            //버튼 타겟 EventTarget ==> $mainBtn[3]
            $mainBtn[3].addEventListener('mouseenter', function(event){
                event.preventDefault();
                this.classList.add('on');  //addClass('on') 제이쿼리
                $mainBtn[3].classList.add('on');
                $mainBtn[0].classList.remove('on');
                $mainBtn[1].classList.remove('on');
                $mainBtn[2].classList.remove('on');  

                //서브메뉴 보이기(show())
                $sub[3].classList.add('on');
                $sub[0].classList.remove('on');
                $sub[1].classList.remove('on');
                $sub[2].classList.remove('on');                
            },false);



            //li.$navArea 영역을 떠나면 메인메뉴, 서브메뉴 모든 클래스 삭제
            $navArea[0].addEventListener('mouseleave',function(){                
                $mainBtn[0].classList.remove('on');  
                $sub[0].classList.remove('on');
            },false);

            $navArea[1].addEventListener('mouseleave',function(){                
                $mainBtn[1].classList.remove('on');  
                $sub[1].classList.remove('on');
            },false);

            $navArea[2].addEventListener('mouseleave',function(){                
                $mainBtn[2].classList.remove('on');  
                $sub[2].classList.remove('on');
            },false);

            $navArea[3].addEventListener('mouseleave',function(){                
                $mainBtn[3].classList.remove('on');  
                $sub[3].classList.remove('on');
            },false);
    },
    forFn:function(){ //반복문 알고리즘
        //1 ~ 100 까지 출력하는  반복문 2씩 증가
        for(var i=1; i<=100; i+=1 ){
            console.log( i );
        }
        //짝수(Even)
        for(var i=2; i<=100; i+=2 ){ // 2 4 6 .. 100
            console.log('짝수 : '+ i );
        }
        //홀수(Odd)
        for(var i=1; i<=100; i+=2 ){ // 1 3 5 .. 99
            console.log('홀수 : ' + i );
        }

        //5의 배수 
        for(var i=5; i<=100; i+=5 ){
            console.log(`5의 배수 : ${ i }`);
        }

        //구구단 2단 
        // for(var i=1; i<=9; i++){
        //     // console.log('2 * ' + i + ' = ' + (2*i));
        //     console.log(`2 * ${i} = ${2*i}`);
        // }


        //구구단 3단 
        // for(var i=1; i<=9; i++){
        //     // console.log('3 * ' + i + ' = ' + (2*i));
        //     console.log(`3 * ${i} = ${3*i}`);
        // }

        var cnt = 0;
        var txt = '';
        var $outTable = document.querySelector('#out-table');

        //구구단 2 ~ 9단
        for(var i=2; i<=9; i++){     //2    3    4   ... 9
            txt += '<tr><th>' + i + '단</th></tr>';
            for(var j=1; j<=9; j++){ //1~9  1~9  1~9 ... 1~9
                cnt++; //반복 횟수 누적 합
                var x = (i*j) < 10 ? ('0' + (i*j)) : (i*j);

                txt += '<tr><td>' + i + '*' + j + '=' + x + '</td></tr>';
            }
        }

        // console.log(txt);

        $outTable.innerHTML = '';
        $outTable.innerHTML = txt;

        
    }
};

nav.init(); //로딩시

