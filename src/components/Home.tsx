import { styled, keyframes } from "styled-components";
import bgImg from "@/assets/forest-image.jpg";
import avatarImg from "@/assets/avatar.png";
import { useState, type FC } from "react";
import { FaTwitter, FaDiscord, FaLink } from "react-icons/fa";

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

// 複製成功動畫
const fadeInOut = keyframes`
  0% { opacity: 0; transform: translateY(-10px); }
  10% { opacity: 1; transform: translateY(0); }
  90% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-10px); }
`;

// 社群連結按鈕容器
const SocialLinkWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid white;
  border-radius: 12px;
  background: transparent;
  /* cursor: pointer;
  transform: skew(-8deg);
  transition: background 0.2s; */
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

// 調整內部內容抵消 skew
const Content = styled.div`
  display: flex;
  align-items: center;
  transform: skew(8deg);
  width: 100%;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: white;
`;

const Username = styled.span`
  flex: 1;
  text-align: center;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
`;

const ActionIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: white;
`;

const Toast = styled.div`
  position: absolute;
  top: -32px;
  background: #333;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  animation: ${fadeInOut} 1.5s ease;
`;

interface SocialLinkProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  username: string;
  href?: string;
  copy?: boolean;
}

const SocialLink: FC<SocialLinkProps> = ({ icon: Icon, username, href, copy = false }) => {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    if (copy) {
      navigator.clipboard.writeText(username).then(() => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 1500);
      });
    } else if (href) {
      window.open(href, "_blank");
    }
  };

  return (
    <SocialLinkWrapper onClick={handleClick}>
      <Content>
        <IconWrapper>
          <Icon />
        </IconWrapper>
        <Username>{username}</Username>
        <ActionIcon>
          <FaLink />
        </ActionIcon>
      </Content>
      {showToast && <Toast>已複製！</Toast>}
    </SocialLinkWrapper>
  );
}



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
        <SocialLink
          icon={FaTwitter}
          username="@saiba_momoi"
          href="https://twitter.com/saiba_momoi"
          copy={false}
        />
        <SocialLink
          icon={FaDiscord}
          username="Saiba#1234"
          copy={true}
        />
      </MainSection>
    </PageWrapper>
  );
}

export default Home;
