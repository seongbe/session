import React from 'react'
import Img01 from '../../assets/img/section04_1.png'
import Img02 from '../../assets/img/section04_2.png'
import Img03 from '../../assets/img/section04_3.png'
import Img04 from '../../assets/img/section04_4.png'

const Section05 = () => {
    return (
        <div className='Section05_wrap'>
            {/* 헤더 섹션: Figma 레이아웃을 참고하여 제목을 <h3>과 <h1> 태그로 작성하세요. */}
            <div className="header">
                {/* LIKELION MEDIA를 작성하세요. */}
                {/* 언론 속의 LIKELION를 작성하세요. */}
            </div>
            
            <div className="main">
                {/* 각 뉴스 항목을 <div> 태그로 감싸고, 내부에 <img>와 텍스트 블록을 포함하세요. */}

                <div>
                    {/* <img> 태그로 뉴스 이미지를 삽입하고, 속성(이미지 대체 텍스트)으로 "Img01"을 사용하세요. */}

                    <div>
                        {/*뉴스 제목을 작성하세요. */}

                        {/* 뉴스 요약을 className='text'와 함께 작성하세요. */}

                        {/* 출판 정보를 className='info'와 함께 작성하세요. */}
                    </div>
                </div>
                {/* 다음 세 뉴스 항목에 대해서도 동일한 구조를 반복하세요. */}
            </div>
        </div>
    )
}

export default Section05
