import { FormArray, FormControl } from '@angular/forms';

import { Library, RemoteLibrary } 			from './library.model';
import { BaseFormGroup, BaseFormArray } from './base-object.form.model';
import { StandardResourceFormGroup } 		from './standard-resource.form.model';

export class LibraryFormGroup extends StandardResourceFormGroup {
	path = new FormControl();

	constructor( library = new Library() ) {
		super( library );
	} // end #constructor

} 


export class LibrariesFormArray extends BaseFormArray<LibraryFormGroup> {

	constructor( libraries = [] as LibraryFormGroup[] ) {
		super( libraries );
	}
}



export class RemoteLibraryFormGroup extends BaseFormGroup<RemoteLibrary> {

	constructor( library = new RemoteLibrary() ) {
		super( library );
	}

}


export class RemoteLibrariesFormArray 
	extends BaseFormArray<RemoteLibraryFormGroup> {

	constructor( libraries = [] as RemoteLibraryFormGroup[] ) {
		super( libraries );
	}

}