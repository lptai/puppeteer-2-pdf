import React, { useState, useCallback, Fragment } from 'react';
import styled from 'styled-components';
import { Input, Button, message } from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css';
import './App.css';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;
`;

const InputURL = styled(Input)`
    width: 20%;
    margin: 20px;
`;

const Box = styled.div`
    padding: 20px;
`;


const Link = styled.a`
    padding: 5px;
`;

const API = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : '';
message.config({
    top: 50,
    maxCount: 1,
  });

function App() {
    const [links, setLinks] = useState([]);
    const [url, setUrl] = useState();
    const [isSending, setIsSending] = useState(false);

    const handleConverToPdf = useCallback(
        async e => {
            if (isSending || !url) {
                return;
            }
            e.preventDefault();

            setIsSending(true);
            message.loading('Processing....');

            // call api
            await axios
                .get(`${API}/getPdf?url=${url}`)
                .then(response => {
                    let blob = new Blob([response.data], { type: 'application/pdf' });
                    const link = {};
                    link.href = window.URL.createObjectURL(blob);
                    link.name = 'file';
                    link.url = url;

                    setLinks(old => [...old, link]);
                    setUrl('');
                    message.success('Yay !!! it\' done. Click a link below to download');
                })
                .catch(e => {
                    console.log(e.response);
                    setIsSending(false);
                    message.error('Invalid URL or it is private page');
                });

            setIsSending(false);
        },
        [isSending, url],
    );

    return (
        <Container>
            <h1>Convert HTML To PDF</h1>
            <InputURL
                value={url}
                size="large"
                onChange={e => setUrl(e.target.value)}
                disabled={isSending}
                allowClear
            />
            <Button color="primary" onClick={handleConverToPdf} disabled={isSending}>
                Convert to pdf
            </Button>

            <Box>
                {links.map((link, idx) => (
                    <Fragment>
                        <Link
                            key={`${idx}-link`}
                            href={link.href}
                            download={`${link.name}-${idx}.pdf`}>
                            {link.url}
                        </Link>
                    </Fragment>
                ))}
            </Box>
        </Container>
    );
}

export default App;
