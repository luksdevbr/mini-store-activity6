import { useTheme } from '../../contexts/ThemeProvider';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  animation: pulse 1.5s infinite ease-in-out;
  transition: all 250ms ease;
  border-radius: 0.375rem;
  width: 100%;
  background-color: ${props => props.isDark ? props.theme.secundaryDark : 'white'};
  overflow: hidden;

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Image = styled.div`
  width: 100%;
  height: 292px;
  background-color: ${props => props.isDark ? props.theme.skeletonDark : props.theme.skeleton};
`;

const Details = styled.div`
  margin: 0.75rem 0;
  padding: 0 1.25rem;
`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  min-height: 3rem;
`;

const TitleLine = styled.div`
  width: 100%;
  height: 20px;
  background-color: ${props => props.isDark ? props.theme.skeletonDark : props.theme.skeleton};
`;

const TitleLineShort = styled(TitleLine)`
  width: 100px;
`;

const Price = styled.h2`
  width: 92px;
  height: 20px;
  background-color: ${props => props.isDark ? props.theme.skeletonDark : props.theme.skeleton};
`;

const Rating = styled.div`
  margin: 0.75rem 0;
  width: 92px;
  height: 20px;
  background-color: ${props => props.isDark ? props.theme.skeletonDark : props.theme.skeleton};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Button = styled.div`
  border-radius: 9999px;
  padding: 0.5rem 0.75rem;
  width: 112px;
  height: 40px;
  background-color: ${props => props.isDark ? props.theme.skeletonDark : props.theme.skeleton};
  transition: all 250ms ease;
`;

export default function ProductCardSkeleton() {
  const { theme } = useTheme();

  return (
    <Card isDark={theme === 'dark'}>
      <Image isDark={theme === 'dark'}></Image>
      <Details>
        <Title>
          <TitleLine isDark={theme === 'dark'}></TitleLine>
          <TitleLineShort isDark={theme === 'dark'}></TitleLineShort>
        </Title>
        <Price isDark={theme === 'dark'}></Price>
        <Rating isDark={theme === 'dark'}></Rating> 
        <ButtonContainer>
          <Button isDark={theme === 'dark'}></Button>
        </ButtonContainer>
      </Details> 
    </Card>
  );
}
