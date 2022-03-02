import React from 'react';
import reactDom from 'react-dom';

import Heading from './heading'
import { render, cleanup } from '@testing-library/react'

describe('Heading testing', () => {
    afterEach(cleanup);

    it("Test to see if heading renders", () => {
        const { getByTestId } = render(<Heading />);
        expect(getByTestId("heading")).toBeTruthy;
    })

    it("Test to see if heading renders correctly", () => {
        const { getByTestId } = render(<Heading>Anything</Heading>);
        expect(getByTestId("heading").innerHTML).toBe('Anything');
    })

    it("Test to see if classNames are added", () => {
        const classTest = 'section-heading'
        const { getByTestId } = render(<Heading className={classTest} >anything</Heading>);
        expect(getByTestId("heading").className).toContain(classTest);
    })

    it("Test to see if heading is uppercase", () => {
        const { getByTestId } = render(<Heading uppercase>anything</Heading>);
        expect(getByTestId("heading").className).toContain('uppercase');
    })

    it("Test to see if heading is equal in line height", () => {
        const { getByTestId } = render(<Heading equalLineHeight>anything</Heading>);
        expect(getByTestId("heading").className).toContain('equal-line-height');
    })

    it("Test to see if default heading component is h2", () => {
        const { getByTestId } = render(<Heading></Heading>);
        expect(getByTestId("heading").tagName).toBe('H2');
    })

    it("Test to see if heading is correct component", () => {
        const { getByTestId } = render(<Heading is='h5'></Heading>);
        expect(getByTestId("heading").tagName).toBe('H5');
    })
})