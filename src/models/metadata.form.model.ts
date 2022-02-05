import { FormArray } from '@angular/forms';

import { BaseFormGroup, BaseFormArray } from './base-object.form.model';
import { Metadatum } from './metadata.model';

export class MetadatumFormGroup extends BaseFormGroup<Metadatum> { 

	constructor( datum = new Metadatum() ) {
		super( datum );
	}

} 


export class MetadataFormArray extends BaseFormArray<MetadatumFormGroup> {

	constructor( data = [] as Array<MetadatumFormGroup> ) {
		super( data );
	}

} 