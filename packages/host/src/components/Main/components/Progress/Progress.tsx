import React from 'react';
import { Box, CircularProgress } from '@abdt/ornament';

const Progress = () => {
    return (
        <Box
            display="flex"
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
        >
            <CircularProgress />
        </Box>
    );
};

export default Progress;
