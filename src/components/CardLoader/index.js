import React from "react";
import ContentLoader from "react-content-loader";

const CardLoader = (props) => {
    const listCard = [];
    const { numberOfCard } = props;
    for (let i = 0; i < numberOfCard; i++) {
        listCard.push(
            <ContentLoader key={i} className='card' speed={1} viewBox='0 0 300 350' backgroundColor='#e8e8e8' foregroundColor='#f0f0f0'>
                <rect x='0' y='0' rx='3' ry='3' width='300' height='350' />
            </ContentLoader>
        );
    }
    return listCard;
};

export default CardLoader;
