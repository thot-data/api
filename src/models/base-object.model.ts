export class BaseObject {

	constructor( properties?: Set<string> | Array<string> ) {
		if ( properties ) {
			for ( let prop of properties ) {
				this[ prop ] = undefined;
			}
		}
	}


	add_property( name: string ) {
		this[ name ] = undefined;
	}


	add_properties( properties: Set<string> | Array<string> ) {
		for ( let prop of properties ) {
			this[ prop ] = undefined;
		}
	}


	/**
	 * Initialize set property values based on object.	
	 * 
	 * @param {any}      object     Object container property name - value pairs.	
	 */
	set_properties( obj?: object ) {
		if ( ! obj ) {
			// base case for convenience 
			return;
		}

		for ( let prop of Object.getOwnPropertyNames( this ) ) {
			// iterate over allowed properties
			if ( obj.hasOwnProperty( prop ) ) {
				// property is set in object
				this[ prop ] = obj[ prop ];
			}
		}
		
	} // end #set_properties


	// TODO [2]: Create factory function to cast to given class
	// TODO [5]: Type check for klass is class
	protected cast_if_object( obj: any, klass: any ): any {
		return (
			obj instanceof Object ?
			new klass( obj ) :
			obj
		);
	} // end #cast_if_object
}