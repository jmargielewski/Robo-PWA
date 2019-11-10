import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

import { setSearchField } from './actions';

import * as reducers from './reducers';

describe('searchRobots', () => {
    const initialState = {
        searchField: '',
    };

    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual(initialState)
    });

    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(initialState, setSearchField('abc'))).toEqual({ searchField: 'abc' })
    });
});

describe('requestRobots', () => {
    const initialState = {
        robots: [],
        isPending: false,
        error: '',
    };

    it('should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialState);
    });

    it('should handle REQUEST_ROBOTS_PENDING', () => {
        expect(reducers.requestRobots(initialState, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            isPending: true,
            robots: [],
            error: '',
        });
    });

    it('should handle REQUEST_ROBOTS_SUCCESS', () => {
        expect(reducers.requestRobots(initialState, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '123',
                name: 'test',
                email: 'test@test.com',
            }],
        })).toEqual({
            isPending: false,
            robots: [{
                id: '123',
                name: 'test',
                email: 'test@test.com',
            }],
            error: '',
        });
    });

    it('should handle REQUEST_ROBOTS_FAILED', () => {
        expect(reducers.requestRobots(initialState, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'Noooo!!!!',
        })).toEqual({
            isPending: false,
            robots: [],
            error: 'Noooo!!!!',
        });
    });
});
