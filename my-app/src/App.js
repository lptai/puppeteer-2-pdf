import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import './App.css';
import PdfPreview from './components/PdfPreview';

const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const Header = styled.h1`
`;

const API = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : '';

function App() {
    const [url, setUrl] = useState();
    const [isSending, setIsSending] = useState(false);
    const [file, setFile] = useState();
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
                    setFile(blob);
                });

            setIsSending(false);
        },
        [isSending, url],
    );

    return (
        <Flex>
            <Header>Convert HTML To PDF</Header>
            <Container>
                <Form>
                    <input onChange={e => setUrl(e.target.value)} disabled={isSending} />
                    <button color="primary" onClick={handleConverToPdf} disabled={isSending}>
                        Convert to pdf
                    </button>
                </Form>
                {file && <PdfPreview file={file} />}
            </Container>
        </Flex>
    );
}

export default App;
