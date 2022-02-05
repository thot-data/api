import {
	StandardResource,
	Container
} from '../typedefs/resources';

import * as factory from './resources.factory.ts';

describe( 'Resources factory', function() {
	it( 'should export a function #toStandardResource', () => {
		expect( factory.toStandardResource ).toBeDefined();
	} );

	it( 'should export a function #toContainer', () => {
		expect( factory.toStandardResource ).toBeDefined();
	} );


	describe( '#toStandardResource', () => {
		let now: Date;
		let creator: string;
		let defaultResource: StandardResource;

		beforeEach( () => {
			now = new Date();
			creator = "creator";

			defaultResource = {
				_id: "",
				__v: 0,
				creator,
				created: now,
				modified: now,
				tags: [],
				metadata: {},
			};
		
		} );  // end #beforeEach

		describe( 'when passed an minimal object', () => {
			it( 'should create a Standarad Resource with default properties', () => {
				const props = {
					"creator": creator
				};

				const created = factory.toStandardResource( props );

				// check all properties exist
				const createdKeys = Object.keys( created ).sort();
				const defaultKeys = Object.keys( defaultResource ).sort();
				expect( createdKeys ).toEqual( defaultKeys );

				// check values
				const valCheck = [
					'__v',
					'creator',
					'tags',
					'metadata'
				];

				for ( let key of valCheck ) {
					expect( created[ key ] ).toEqual( defaultResource[ key ] );
				}
			} );
		} );

		describe( 'when not passed a creator', () => {
			it( 'should throw an error', () => {
				expect( () => {
					factory.toStandardResource( {} )
				} ).toThrow(
					new Error( '`creator` must be assigned.' )
				);
			} );
		} );

	} );  // end describe#toStandardResource


	describe( '#toContainer', () => {

		let now: Date;
		let creator: string;
		let defaultContainer: Container;

		beforeEach( () => {
			now = new Date();
			creator = "creator";

			defaultContainer = {
				_id: "",
				__v: 0,
				creator,
				created: now,
				modified: now,
				tags: [],
				metadata: {},
				children: [],
				assets: [],
				scripts: []
			};
		
		} );  // end #beforeEach


		describe( 'when passed an minimal object', () => {
			it( 'should create a Container with default properties', () => {
				const props = {
					"creator": creator
				};

				const created = factory.toContainer( props );

				// check all properties exist
				const createdKeys = Object.keys( created ).sort();
				const defaultKeys = Object.keys( defaultContainer ).sort();
				expect( createdKeys ).toEqual( defaultKeys );

				// check values
				const valCheck = [
					'__v',
					'creator',
					'tags',
					'metadata',
					'children',
					'assets',
					'scripts'
				];

				for ( let key of valCheck ) {
					expect( created[ key ] ).toEqual( defaultContainer[ key ] );
				}
			} );
		} );

	} );  // end describe#toContainer
} );