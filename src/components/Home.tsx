import styled from "styled-components";
import bgImg from "@/assets/forest-image.jpg";
import avatarImg from "@/assets/avatar.png"

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

// 內容層：整個區塊置中
const Content = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;      /* 水平置中 */
  justify-content: center;  /* 垂直置中 */
  z-index: 1;
`;

// 頭貼樣式
const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 24px; /* 與下面的社群連結保持距離 */
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
`;

// 社群連結容器
const SocialLinks = styled.div`
  display: flex;
  gap: 16px; /* 各連結之間的間距 */
`;

// 單一社群連結樣式
const SocialLink = styled.a`
  color: white;
  font-size: 20px;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`;


function Home() {
    return (
        <BgContainer $bg={bgImg}>
            <Content>
                {/* 正中央的頭貼 */}
                <Avatar src={avatarImg} alt="主人頭貼" />

                {/* 放在頭貼下方的社群連結 */}
                <SocialLinks>
                    <SocialLink href="https://twitter.com/你的帳號" target="_blank" rel="noreferrer">
                        Twitter
                    </SocialLink>
                    <SocialLink href="https://github.com/你的帳號" target="_blank" rel="noreferrer">
                        GitHub
                    </SocialLink>
                    <SocialLink href="https://www.linkedin.com/in/你的帳號" target="_blank" rel="noreferrer">
                        LinkedIn
                    </SocialLink>
                </SocialLinks>
            </Content>
        </BgContainer>
    );
}

export default Home;