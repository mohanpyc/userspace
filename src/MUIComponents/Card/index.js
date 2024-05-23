import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const Card = (Actions,cContent) => {
    return <Card >
                {cContent?<CardContent>
                </CardContent>:null}
                {Actions?<CardActions>
                </CardActions>:null}
            </Card>
}

export default Card;