import React from 'react'
import { Helmet } from 'react-helmet-async';

const Title = ({title = "Sandesh",description = "this is made by ankit pawar",}) => {
  return ( <Helmet>
              <title>{title}</title>
              <meta name='description' content={description} />
            </Helmet>
    );
};

export default Title;