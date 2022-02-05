import { Resource } 					from '@models/resource.model';
import { ResourceFormGroup } 	from '@models/resource.form.model';

export class ResourceSet<T extends Resource> {
	resources: T[];

	constructor( resources?: T[] ) {
		this.resources = resources || [];
	} // end constructor


	get ids(): string[] {
		return this.resources.map( ( resource: Resource ) => resource._id );
	}


	get size(): number {
		return this.resources.length;
	}


	has( resource: T|string ): boolean {
		return this.ids.includes( this.to_id( resource ) );
	}


	add( resource: T ) {
		if ( ! this.ids.includes( resource._id ) ) {
			// resource not in set
			this.resources.push( resource );
		}
	}


	delete( resource: T|string ): boolean {
		resource = this.to_id( resource );
		const res_index = this.ids.indexOf( resource );

		if ( res_index === -1 ) {
			// resource not in set
			return false;
		}

		// resource in set, remove
		this.resources.splice( res_index, 1 );
		return true;

	}


	clear() {
		this.resources = [];
	}


	get( amount: number = 1 ) {
		return this.resources.slice( -amount )
	}


	get_one(): T {
		if ( this.resources.length ) {
			return this.resources[ 0 ]; 
		}

		// no resources
		return undefined;
	}


	// TODO [2]: Adhere to Set Iterator, rather than ArrayIterator.
	entries(): IterableIterator<[number, T]> {
		return this.resources.entries();
	}


	// TODO [2]: Adhere to Set Iterator, rather than ArrayIterator.
	values(): IterableIterator<T> {
		return this.resources.values();
	}


	// TODO [2]: Type guard cb as function with correct signature.
	// TODO [2]: Check cb function returns a Resource.
	forEach( cb: any ) {
		this.resources.forEach( cb );
	}


	// TODO [5]: function that compares two ResourceSets
	// to see if they have the same resources in them
	// can compare resource ids, but how to deal with change in 
	// resource properties?


	private to_id( resource: any ): string {
		if ( typeof resource !== 'string' ) {
			// convert to id string
			return resource._id;
		}

		// resource already id string
		return resource;
	}

} // end class ResourceSet


export class ResourceFormGroupSet<T extends ResourceFormGroup> {
	resources: T[];

	constructor( resources?: T[] ) {
		this.resources = resources || [];
	} // end constructor


	get ids(): string[] {
		return this.resources.map( ( resource: T ) => {
			return resource.get( '_id' ).value;
		} );
	}


	get size(): number {
		return this.resources.length;
	}


	get value(): ResourceSet<any> {
		const set = new ResourceSet();
		for( let group of this.resources ) {
			set.add( group.value );
		}

		return set;
	}


	has( resource: T|string ): boolean {
		return this.ids.includes( this.to_id( resource ) );
	}


	add( resource: T ) {
		if ( ! this.ids.includes( resource.get( '_id' ).value ) ) {
			// resource not in set
			this.resources.push( resource );
		}
	}


	delete( resource: T|string ): boolean {
		resource = this.to_id( resource );
		const res_index = this.ids.indexOf( resource );

		if ( res_index === -1 ) {
			// resource not in set
			return false;
		}

		// resource in set, remove
		this.resources.splice( res_index, 1 );
		return true;

	}


	clear() {
		this.resources = [];
	}


	get( amount: number = 1 ) {
		return this.resources.slice( -amount )
	}


	get_one(): T {
		if ( this.resources.length ) {
			return this.resources[ 0 ]; 
		}

		// no resources
		return undefined;
	}


	// TODO [2]: Adhere to Set Iterator, rather than ArrayIterator.
	entries(): IterableIterator<[number, T]> {
		return this.resources.entries();
	}


	// TODO [2]: Adhere to Set Iterator, rather than ArrayIterator.
	values(): IterableIterator<T> {
		return this.resources.values();
	}


	// TODO [2]: Type guard cb as function with correct signature.
	// TODO [2]: Check cb function returns a Resource.
	forEach( cb: any ) {
		this.resources.forEach( cb );
	}


	// TODO [5]: function that compares two ResourceSets
	// to see if they have the same resources in them
	// can compare resource ids, but how to deal with change in 
	// resource properties?


	private to_id( resource: any ): string {
		if ( typeof resource !== 'string' ) {
			// convert to id string
			return resource._id;
		}

		// resource already id string
		return resource;
	}

} // end class ResourceSet