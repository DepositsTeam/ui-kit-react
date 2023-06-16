import React from 'react';
import Text from './Text.jsx'
import { render, cleanup } from '@testing-library/react'

describe('Text testing', () => {
    afterEach(cleanup);

    // it("Test if text would render", () => {
    //     const div = document.createElement('div')
    //     reactDom.render(<Text />, div)
    // })

    it("Test to see if text renders", () => {
        const { getByTestId } = render(<Text />);
        expect(getByTestId("text")).toBeTruthy();
    })

    it("Test to see if text renders correctly", () => {
        const { getByTestId } = render(<Text>Anything</Text>);
        expect(getByTestId("text").innerHTML).toBe('Anything');
    })

    it("Test to see if classNames are added", () => {
        const text = 'header-text'
        const { getByTestId } = render(<Text className={text} >anything</Text>);
        expect(getByTestId("text").className).toContain(text);
    })

    it("Test to see if text is uppercase", () => {
        const { getByTestId } = render(<Text uppercase>anything</Text>);
        expect(getByTestId("text").className).toContain('uppercase');
    })

    it("Test to see if text is equal in line height", () => {
        const { getByTestId } = render(<Text equalLineHeight>anything</Text>);
        expect(getByTestId("text").className).toContain('equal-line-height');
    })
})