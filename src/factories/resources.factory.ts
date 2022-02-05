import { v4 as uuid } from 'uuid';

import {
	StandardResource, StandardResourceInit,
	Container, ContainerInit
} from '@typedefs/resources';


/**
 * @param {StandaraResourceInit} props - Properties to assign.
 * @returns {StandardResource}
 * @throws {Error} If `creator` is not set on `props`.
 */
export function toStandardResource(
	props: StandardResourceInit
): StandardResource {
	if ( ! props.creator ) {
		throw new Error( '`creator` must be assigned.' );
	}

	const now = new Date();
	const defaults = {
		_id: uuid(),
		__v: 0,
		created: now,
		modified: now,
		tags: [],
		metadata: {},
	};

	const resource = {
		...defaults,
		...props
	};

	return resource;
}


/**
 * @param {ContainerInit} props - Properties to assign.
 * @returns {Container}
 */
export function toContainer(
	props: ContainerInit
): Container {
	const defaults = {
		children: [],
		assets: [],
		scripts: []
	};

	const resource = toStandardResource( props );

	const container = {
		...defaults,
		...resource
	};

	return container;
}