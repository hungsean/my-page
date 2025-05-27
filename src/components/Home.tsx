import styled from "styled-components";
import bgImg from "@/assets/forest-image.jpg";
import avatarImg from "@/assets/avatar.png";

// 頁面整體容器
const PageWrapper = styled.div`
  width: 100%;
`;

// 頭部區塊：背景與頭貼
const HeaderSection = styled.div`
  position: relative;
  height: 50vh;
  width: 100%;
  background-color: black;
  overflow: hidden;
`;

// 背景圖片
const BgImage = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
`;

// 頭貼定位
const AvatarWrapper = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

// 內容區塊：名字與其他內容
const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
`;

// 名字容器
const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const JapaneseName = styled.p`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

const EnglishName = styled.p`
  color: white;
  font-size: 1rem;
  margin: 0;
`;

function Home() {
  return (
    <PageWrapper>
      <HeaderSection>
        <BgImage />
        <AvatarWrapper>
          <Avatar src={avatarImg} alt="主人頭貼" />
        </AvatarWrapper>
      </HeaderSection>

      <MainSection>
        <NameWrapper>
          <JapaneseName>才羽 モモイ</JapaneseName>
          <EnglishName>Saiba Momoi</EnglishName>
        </NameWrapper>
      </MainSection>
    </PageWrapper>
  );
}

export default Home;
