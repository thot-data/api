import { FormArray, FormControl } from '@angular/forms';

import { Script } from './script.model';
import { FileResourceFormGroup } 	from './file-resource.form.model';
import { ResourceFormArray } 			from './resource.form.model';

export class ScriptFormGroup extends FileResourceFormGroup {
	file: FormControl;

	constructor( script: ( Script | any ) = new Script() ) {
		if ( !( script instanceof Script ) ) {
			script = new Script( script );
		}

		super( script );
	} // end #constructor

} 


export class ScriptsFormArray extends ResourceFormArray<ScriptFormGroup> {

	constructor( scripts = [] as Array<ScriptFormGroup> ) {
		super( scripts );
	}
}