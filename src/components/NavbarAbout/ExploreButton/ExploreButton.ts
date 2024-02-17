import { Button } from 'antd';
import styled from 'styled-components';

export const ExploreButton = styled(Button)({
    padding: '0.5rem 1.25rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    fontSize: '0.75rem',
    transition: 'color 150ms',
    '&:hover': {
        opacity: 0.9,
    },
    '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
    },
    backgroundColor: '#1c7fff',
    height: '28.5px',
    marginLeft: '0.625rem',
    borderRadius: '4px',
    borderWidth: 0,
    color: 'white',
});
