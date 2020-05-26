import React from "react";
import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer";

describe('ProfileStatus component', () => {
    test('Status from props should be in the state', () => {
        const component = create(<ProfileStatus status='test_status' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('test_status');
    });

    test('After creation span should be displayed', () => {
        const component = create(<ProfileStatus status='test_status' />);
        const instance = component.getInstance();
        let span = instance.findByType('span');
        expect(span.length).toBe(1);
    });
    test('After creation span should contain correct status', () => {
        const component = create(<ProfileStatus status='test_status' />);
        const instance = component.getInstance();
        let span = instance.findByType('span');
        expect(span.length).toBe(1);
    });
});