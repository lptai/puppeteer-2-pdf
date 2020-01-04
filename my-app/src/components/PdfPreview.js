import React, { Component, Fragment } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class PdfDocument extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <Fragment>
                <Document file={this.props.file} onLoadSuccess={this.onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </Fragment>
        );
    }
}
