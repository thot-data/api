import { BaseObject } from './base-object.model';
import { Script } from './script.model';

export class ScriptAssociation extends BaseObject{
	script: 	string | Script;
	priority: number;
	autorun: 	boolean;

	constructor ( association?: any ) {
		// copy association with defaults
		association = Object.assign(
			{
				script: 	undefined,
				priority: 0,
				autorun: 	true
			},

			association
		);

		// cast script if needed
		let script = association.script;
		
		if ( 
				script 													&&
				( typeof script === 'object' ) 	&&
				! ( script instanceof Script ) 
		) {
			association.script = new Script( script );
		} // end if script

		super( Object.keys( association ) );
		this.set_properties( association );
			
	}

	// TODO [1]: Function to automatically fill script
	// fill_script() {
	// 	if ( typeof this.script === 'string' ) {
 //      this.script_service.get( this.association.script )
 //      	.subscribe( ( script: Script ) => {
 //      		this.script = script;
 //      	} );
 //    }
	// }
}