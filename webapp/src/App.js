import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import './App.css';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;
`;

const Header = styled.h1``;

const API = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : '';

function App() {
    const [url, setUrl] = useState();
    const [isSending, setIsSending] = useState(false);
    const handleConverToPdf = useCallback(
        async e => {
            if (isSending || !url) {
                return;
            }
            e.preventDefault();

            setIsSending(true);

            // call api
            await axios
                .get(`${API}/getPdf?url=${url}`, {
                    responseType: 'arraybuffer',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/pdf',
                    },
                })
                .then(response => {
                    let blob = new Blob([response.data], { type: 'application/pdf' });
                    let link = document.createElement('a');
                    link.href = window.URL.createObjectURL(blob);
                    link.download = 'Results.pdf';
                    link.click();
                });

            setIsSending(false);
        },
        [isSending, url],
    );

    return (
        <Container>
            <Header>Convert HTML To PDF</Header>
            <input onChange={e => setUrl(e.target.value)} disabled={isSending} />
            <button color="primary" onClick={handleConverToPdf} disabled={isSending}>
                Convert to pdf
            </button>
        </Container>
    );
}

export default App;
