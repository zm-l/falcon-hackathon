import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

const QueryDetail = () => {
  const { id } = useParams();
  // Fetch or derive the query details based on the ID here
  const query = `Details for query ID: ${id}`;

  return (
    <div>
      <Typography variant="h4" component="h2">
        {query}
      </Typography>
    </div>
  );
};

export default QueryDetail;