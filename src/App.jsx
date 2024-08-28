import { useThemeContext } from '@/themes/ThemeProvider';
import { Box, Typography } from '@mui/material';
import { UISwitch } from './components';
import {
  ContentContainer,
  ProfileImage,
  ProfileSection,
  SocialLink,
  SocialLinks,
  Wrapper,
} from './styles/style';

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { TbBrandFiverr } from 'react-icons/tb';

import imgProfile from '@/assets/images/profile.png';

function App() {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <Wrapper>
      <ContentContainer>
        <Box textAlign='end'>
          <UISwitch checked={isDarkMode} onChange={toggleTheme} />
        </Box>
        <ProfileSection>
          <ProfileImage src={imgProfile} alt='Profile' />
          <h2>Javed Akhtar</h2>
          <Typography align='center'>
            MERN Stack Developer with 4+ years of experience in creating
            efficient and scalable web applications. Passionate about coding,
            technology, and continuous learning.
          </Typography>
        </ProfileSection>
        <Box>
          <h2>Social Media Links</h2>
          <SocialLinks>
            <SocialLink
              href='https://www.facebook.com/profile.php?id=100007397497285&mibextid=JRoKGi'
              target='_blank'
              rel='noopener noreferrer'>
              <FacebookRoundedIcon fontSize='large' />
              Facebook
            </SocialLink>
            <SocialLink
              href='https://www.linkedin.com/in/javedakhtar1220/'
              target='_blank'
              rel='noopener noreferrer'>
              <FaLinkedin size={30} />
              LinkedIn
            </SocialLink>
            <SocialLink
              href='https://www.instagram.com/7aved_akhtar'
              target='_blank'
              rel='noopener noreferrer'>
              <FaInstagram size={30} />
              Instagram
            </SocialLink>
          </SocialLinks>
          <Box mt='3em'>
            <h2>Freelance Links</h2>
            <SocialLinks>
              <SocialLink
                href='https://portfolio-cf490.web.app/'
                target='_blank'
                rel='noopener noreferrer'>
                <LanguageRoundedIcon fontSize='large' />
                Portfolio
              </SocialLink>
              <SocialLink
                href='https://www.fiverr.com/javedakhtar1220'
                target='_blank'
                rel='noopener noreferrer'>
                <TbBrandFiverr size={30} />
                Fiverr
              </SocialLink>
              <SocialLink
                href='https://www.upwork.com/freelancers/javedakhtar'
                target='_blank'
                rel='noopener noreferrer'>
                <SiUpwork size={30} />
                Upwork
              </SocialLink>
            </SocialLinks>
          </Box>
        </Box>
      </ContentContainer>
    </Wrapper>
  );
}

export default App;
