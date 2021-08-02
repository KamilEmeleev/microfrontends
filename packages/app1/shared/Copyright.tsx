import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { typography, palette } from '@abdt/design-tokens';
import { styled, StyleSheetManager, ThemeLayout, css } from '@abdt/ornament';

const StyledParagraph = styled('p')`
    ${({ theme }) => css`
        font-family: ${typography.text.xl.fontFamily};
        color: ${palette.text.primary};
        font-size: ${typography.text.xl.fontSize};
        font-weight: ${typography.text.xl.fontWeight};
        line-height: ${typography.text.xl.lineHeight};
        ${theme.breakpoints.down('sm')} {
            font-family: ${typography.text.l.fontFamily};
            color: ${palette.text.primary};
            font-size: ${typography.text.l.fontSize};
            font-weight: ${typography.text.l.fontWeight};
            line-height: ${typography.text.l.lineHeight};
        }
    `};
`;

const CopyrightComponent = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <StyledParagraph>
                © {currentYear} Ак Барс Цифровые Технологии
            </StyledParagraph>
        </>
    );
};

export class Copyright extends HTMLElement {
    private readonly styleHost: HTMLElement;

    private readonly mountPoint: HTMLElement;

    constructor() {
        super();
        this.styleHost = document.createElement('div');
        this.mountPoint = document.createElement('div');
        this.attachShadow({ mode: 'open' });
        this.addEventListener('click', () => alert('https://akbars.digital/'));
    }

    connectedCallback() {
        this.shadowRoot?.appendChild(this.styleHost);
        this.shadowRoot?.appendChild(this.mountPoint);

        ReactDOM.render(
            <StyleSheetManager target={this.styleHost}>
                <ThemeLayout>
                    <CopyrightComponent />
                </ThemeLayout>
            </StyleSheetManager>,
            this.mountPoint
        );
    }
}

export default Copyright;
