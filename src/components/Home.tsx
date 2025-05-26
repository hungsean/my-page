import styled from "styled-components";
import bgImg from "@/assets/forest-image.jpg";
import avatarImg from "@/assets/avatar.png"

const BgWrapper = styled.div`
  position: relative;
  height: 50vh;
  width: 100%;
  background-color: black;
  overflow: hidden;
`;

const BgImage = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
`;

const Content = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  z-index: 1;
  pointer-events: none;
`;

// 頭貼樣式
const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
`;

// // 社群連結容器
// const SocialLinks = styled.div`
//   display: flex;
//   gap: 16px; /* 各連結之間的間距 */
// `;

// // 單一社群連結樣式
// const SocialLink = styled.a`
//   color: white;
//   font-size: 20px;
//   text-decoration: none;
//   &:hover {
//     opacity: 0.8;
//   }
// `;


function Home() {
    return (
      <BgWrapper>
        <BgImage />
        <Content>
          <Avatar src={avatarImg} alt="主人頭貼" />
        </Content>
      </BgWrapper>

    );
}

export default Home;