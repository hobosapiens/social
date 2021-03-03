import React from "react";
import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer";

describe('ProfileStatus component', () => {
    test('Status from props should be in the state', () => {
        const component = create(<ProfileStatus status='test_status'/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('test_status');
    });

    test('After creation <span> should be displayed', () => {
        const component = create(<ProfileStatus status='test_status'/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });

    test('After creation <input> should not be displayed', () => {
        const component = create(<ProfileStatus status='test_status'/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType('input');
        }).toThrow();
    });

    test('After creation <span> should contain correct status', () => {
        const component = create(<ProfileStatus status='test_status'/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('test_status');
    });

    test('Input should be desplayed in edit mode instead span', () => {
        const component = create(<ProfileStatus status='test_status'/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('test_status');
    });

    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status='test_status' updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});