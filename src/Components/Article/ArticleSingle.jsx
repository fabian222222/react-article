import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

export const ArticleSingle = (props) => {
    return (
        <div style={{marginBottom : "20px"}}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        catégorie : {props.info.ArticleCategory.name}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {props.info.title} ~ {`${props.info.User.firstname} ${props.info.User.lastname}`}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.info.content}
                    </Typography>
                    <Typography variant="body2">
                        {props.info.created_at}
                    </Typography>
                </CardContent>
                <CardActions>
                    <NavLink style={{textDecoration:"none", color:'blue', fontSize:"16px"}} to={`/articles/${props.info.id}`}>Voir article</NavLink>
                </CardActions>
            </Card>
        </div>
    )
}