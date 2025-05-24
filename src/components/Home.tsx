import styled from "styled-components";
import bgImg from "@/assets/forest-image.jpg"; // 照你的路徑調整

interface BgContainerProps {
    $bg: string;
}

// 背景層
const BgContainer = styled.div<BgContainerProps>`
    position: relative;
    min-height: 100vh;
    width: 100%;
    background-image: url(${props => props.$bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden; /* 保護內容不會跑出去 */
`;

// 內容層
const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* 這裡你可以用 flex、grid、甚至你自己愛的排版方式 */
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    z-index: 1;
    /* 如需加陰影或背景濾鏡可以這邊加 */
`;

const WhiteText = styled.p`
    color: white;
    font-size: 50px;
`;

function Home() {
    return (
        <BgContainer $bg={bgImg}>
            <Content>
                <WhiteText>hi</WhiteText>
            </Content>
        </BgContainer>
    );
}

export default Home;