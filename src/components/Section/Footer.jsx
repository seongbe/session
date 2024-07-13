import React from 'react'
import Logo from '../../assets/img/likelion_logo.svg'
import Instar from '../../assets/img/instar.svg'
import Youtube from '../../assets/img/youtube.svg'
import Branch from '../../assets/img/branch.svg'
import Download from '../../assets/img/download.svg'
import Share from '../../assets/img/share.svg'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="left">
                <img src={Logo} alt="Logo" />
                {/* Figma 레이아웃을 참고하여 회사 정보를 알맞은 태그를 사용하여 작성하세요. */}
                
                <div>
                    <div>
                        <img src={Instar} alt="Instar" className="instar" />
                    </div>
                    <div>
                        <img src={Youtube} alt="Youtube" className="youtube" />
                    </div>
                    <div>
                        <img src={Branch} alt="Branch" className="branch" />
                    </div>
                </div>
            </div>
            {/* Figma 레이아웃 - FOOTER의 오른쪽 부분입니다.*/}
            <div className="right">
                {/* Figma 레이아웃을 참고하여 'FAMILY BRAND' 섹션을 아래와 같이 알맞은 태그들을 사용하여 작성하세요. */}
                <div className="family">
                    
                </div>
                {/* Figma 레이아웃을 참고하여 'POLICY' 섹션을 작성하세요.*/}
                <div className="policy">
                    
                    <div>
                        <p>Nonprofit Report</p>
                        {/* Figma 레이아웃을 참고 /<img> 태그를 사용하여 '다운로드' 이미지를 화면에 표시하세요*/}
                        
                    </div>
                </div>
                {/* Figma 레이아웃을 참고하여 'RESOURCE' 섹션을 작성하세요.*/}
                <div className="resource">
                    
                    <div>
                        <p>로고 가이드라인</p>
                        {/* Figma 레이아웃을 참고 /<img> 태그를 사용하여 '다운로드' 이미지를 화면에 표시하세요*/}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
