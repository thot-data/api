import { FormArray, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { FormControls } from '@interfaces/models/form.interface';


export class BaseFormGroup<T extends { [key: string]: any }> 
	extends FormGroup {

	controls: FormControls;

	constructor( init?: T ) {
		/**
		 * Convert object to AbstractControls, recursively
		 * @param {any} obj Object to convert
		 * @returns { AbstractControl } AbstractControl.
		 */
		
		function to_control( obj: any ): AbstractControl {
			if ( ( obj instanceof Array ) || ( obj instanceof Set ) ) {
				// iterable, use FormArray
				const controls = [] as Array<AbstractControl>;
				for ( let elm of obj ) {
					controls.push( 
						to_control( elm )
					);
				}

				return new FormArray( controls );
			}
			else if (
				( obj !== null ) &&
				( typeof obj === 'object' ) &&
				!( obj instanceof File )
			) {
				// value is object, use FormGroup
				const controls: FormControls = {};
				for ( let prop in obj ) {
					controls[ prop ] = to_control( obj[ prop ] );
				}

				return new FormGroup( controls );
			}
			else {
				// basic value, use FormControl
				return new FormControl( obj );
			}

		} // end #to_control

		
		// initialize controls
		const controls: FormControls = {};
		for ( let prop in init ) {
			const control = to_control( init[ prop ] );
			controls[ prop ] = control
		}
		
		super( controls );

	} // end #constructor

} // end class BaseFormGroup


export class BaseFormArray<G extends FormGroup> extends FormArray {

	constructor( init?: Array<G> ) {
		if ( init === undefined ) {
			init = [];
		}
		
		super( init );
	}

} // end class BaseFormArray


// TODO [3]: Type of klass must be set correctly
export function cast_array( array: FormGroup[], klass: any /* extends FormGroup*/ ): any[] {
	for ( let [ index, entry ] of Object.entries( array ) ) {
		if ( !( entry instanceof klass ) ) {
			array[ index ] = new klass( entry.value )
		}
	}

	return array;
}