import React from 'react';
import collectionItem from '../collection-item/collection-item.component';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h2 className='title'>{title.toUpperCase()}</h2>
        <div className='preview'>
            {
                items.filter((item, idx) => idx < 4).map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id} { ...otherItemProps } />  
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;