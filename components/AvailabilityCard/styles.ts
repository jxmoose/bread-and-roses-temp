'use client';

import NextImage from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import COLORS from '@/styles/colors';
import { SMALL } from '@/styles/text';

export const AvailabilityContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.5rem;
  border-radius: 16px;
  width: 100%;
  background: ${COLORS.bread1};
  margin-bottom: 3rem;
  box-shadow: 0px 6px 15px -2px rgba(0, 0, 0, 0.08);
`;

export const AvailabilityHeader = styled.main`
  display: flex;
  padding: 1rem 1.5rem;
  justify-content: space-between;
  align-items: center;
  background: ${COLORS.pomegranate11};
  border-radius: 16px 16px 0 0;
  width: 100%;
`;

export const AvailabilityTitle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const Content = styled.main`
  padding: 0rem 1.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SubHeader = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  justify-content: start;
  margin-bottom: 0.25rem;
`;

export const Arrow = styled(NextImage)`
  width: 24px;
  height: 24px;
  transform: rotate(180deg);
`;

export const TruncatedText = styled(SMALL)`
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
