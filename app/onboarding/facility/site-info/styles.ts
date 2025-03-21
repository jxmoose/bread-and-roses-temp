'use client';

import styled from 'styled-components';
import COLORS from '@/styles/colors';
import { Sans } from '@/styles/fonts';

export const RedAsterisk = styled.span`
  color: #b22222;
`;

export const GrayInput = styled.div`
  display: flex;
  font-family: ${Sans.style.fontFamily};
  font-size: 1rem;
  color: ${COLORS.gray10};
  background: ${COLORS.gray1};
  margin-top: 0.1875rem;
  border: 1px solid ${COLORS.gray6};
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  padding: 12px 16px 12px 16px;
  align-items: flex-center;
  justify-content: flex-start;
  gap: 12px;
`;

export const RadioContainer = styled.label`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  gap: 8px;

  input {
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid ${COLORS.gray10};
    border-radius: 50%;
    position: relative;
    cursor: pointer;
  }

  input:checked {
    border: 3px solid ${COLORS.rose10}; /* Custom color for checked */
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  flex-direction: column;
`;
