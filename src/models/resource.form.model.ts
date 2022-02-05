import { 
	AbstractControl, FormGroup, FormControl
} from '@angular/forms';

import { BaseFormGroup, BaseFormArray } 		from './base-object.form.model';
import { Resource	} 												from './resource.model';
import { Resource as ResourceInt } 					from '@interfaces/models/resource.interface';
import { 
	ResourceFormControls as Controls,
	ResourceFormGroup as ResourceFGI 
} from '@interfaces/models/resource.form.interface';


export class ResourceFormGroup 
	extends BaseFormGroup<Resource>
	implements ResourceFGI {

	controls: Controls

	constructor( resource: Partial<Resource> = new Resource() ) {
		if ( !( resource instanceof Resource ) ) {
			resource = new Resource( resource );
		}

		super( resource as Resource );
	}

}


export class ResourceFormArray<T extends ResourceFormGroup> 
	extends BaseFormArray<T> {
	
	constructor( resource_array?: T[] ) {
		super( resource_array );
	}

	get_by_id( id: string ): T {
		for ( let ctrl of this.controls ) {
			if ( ctrl.get( '_id').value == id ) {
				return ctrl as T;
			}
		}

		return undefined;
	}

}