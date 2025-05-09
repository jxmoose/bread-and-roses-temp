'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import Back from '@/public/images/back.svg';
import { OnboardingContext } from '@/utils/onboardingContext';
import {
  BackButton,
  Background,
  Button,
  ButtonContainer,
  Container,
  ContinueText,
  FixedFooter,
  Image,
  InlineContainer,
  InputContainer,
  Label,
  Title,
} from '../styles';
import { TextArea } from './styles';

export default function Onboarding() {
  const router = useRouter();
  const onboardingContext = useContext(OnboardingContext);
  if (!onboardingContext) return null;

  const { role } = onboardingContext;
  const { preferences, setPreferences } = onboardingContext;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setPreferences({
      ...preferences,
      additionalInfo: value,
    });
  };

  const handleSubmit = async () => {
    router.push('/onboarding/review');
  };

  const handleBack = () => {
    if (role.isPerformer) {
      router.push('/onboarding/equipment');
    } else {
      router.push('/onboarding/show-preference');
    }
  };

  return (
    <Background>
      <InlineContainer>
        <BackButton onClick={handleBack}>
          <Image src={Back} alt="Back icon" />
        </BackButton>
        <Title $fontWeight={500}>Do you require any accomodations?</Title>
        {role.isPerformer ? (
          <ProgressBar from={60} to={80} />
        ) : (
          <ProgressBar from={50} to={75} />
        )}
        <Container>
          <InputContainer>
            <Label>Additional Information</Label>
            <TextArea
              name="additional information"
              placeholder=""
              value={preferences.additionalInfo}
              onChange={handleChange}
            />
          </InputContainer>
        </Container>

        <ButtonContainer>
          <FixedFooter />
          <Button onClick={handleSubmit} position="fixed">
            <ContinueText>Continue</ContinueText>
          </Button>
        </ButtonContainer>
      </InlineContainer>
    </Background>
  );
}
