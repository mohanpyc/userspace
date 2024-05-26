import styled from '@emotion/styled';
import {  Grid, Card, CardActions, CardContent } from '../../MUIComponents';

export const CustomGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
}));

export const CustomCard = styled(Card)(({ theme }) => ({
  width: '400px',
  height: '500px',
}));

export const CustomCardContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const CustomCardActions = styled(CardActions)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column'
  }));
