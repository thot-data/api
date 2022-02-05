import { FormGroup, FormArray, FormControl } from '@angular/forms';

import { Script } from './script.model';
import { ScriptAssociation } from './script-association.model';
import { BaseFormGroup, BaseFormArray } from './base-object.form.model';
import { ResourceFormArray } from './resource.form.model';

export class ScriptAssociationFormGroup extends BaseFormGroup<ScriptAssociation> {
	script: 		FormControl;
	priority: 	FormControl;
	autorun: 		FormControl;


	constructor( association = new ScriptAssociation() ) {
		// cast association if given script or id
		let script;
		if ( association instanceof Script  ) {
			script = association._id;
		}
		else if ( typeof association == 'string' ) {
			script = association;
		}

		if ( script ) {
			association = new ScriptAssociation( { script: script } );
		}

		super( association );
	} // end #constructor

} 


export class ScriptAssociationsFormArray extends BaseFormArray<ScriptAssociationFormGroup> {

	constructor( scripts = [] as Array<ScriptAssociationFormGroup> ) {
		super( scripts );
	}

}