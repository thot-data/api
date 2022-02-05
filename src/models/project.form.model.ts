import { FormArray, FormGroup } from '@angular/forms';


import { ResourceFormGroup } 									from './resource.form.model';
import { Project } 														from './project.model';
import { AssetFormGroup, AssetsFormArray } 		from './asset.form.model';
import { ScriptFormGroup, ScriptsFormArray } 	from './script.form.model';
import { BaseFormArray } 											from './base-object.form.model';
import { StandardResourceFormGroup } 					from './standard-resource.form.model';
import { 
	ContainerFormGroup, ContainersFormArray 
}	from './container.form.model';

import { 
	LibraryFormGroup, LibrariesFormArray,
	RemoteLibraryFormGroup, RemoteLibrariesFormArray
} from './library.form.model';

import {
	ProjectFormControls as Controls,
	ProjectFormGroup as ProjectFGI
} from '@interfaces/models/project.form.interface';


type ResourceMap<T> = { [ key: string ]: T };


export class ProjectFormGroup 
	extends StandardResourceFormGroup
	implements ProjectFGI {

	controls: Controls

	constructor( project: Partial<Project> = new Project() ) {
		if ( !( project instanceof Project ) ) {
			project = new Project( project );
		}

		super( project );

		const root 	= this.get( 'root' ) 		as ContainerFormGroup,
			assets 		= this.get( 'assets' ) 	as AssetsFormArray,
			scripts 	= this.get( 'scripts' ) as ScriptsFormArray,
			user_libs 	= this.get( 'user_libraries' ) 		as LibrariesFormArray,
			remote_libs = this.get( 'remote_libraries' ) 	as RemoteLibrariesFormArray;

		if ( project.root instanceof Object ) {
			// update root to be ContainerFormGroup rather than FormGroup
			this.setControl( 
				'root', 
				new ContainerFormGroup( this.get( 'root' ).value ) 
			);
		}

		// cast assets
		this.setControl( 
			'assets', 
			new AssetsFormArray( assets.controls as AssetFormGroup[] )
		);

		// cast scripts
		this.setControl( 
			'scripts', 
			new ScriptsFormArray( scripts.controls as ScriptFormGroup[] )
		);

		// cast libraries
		this.setControl(
			'user_libraries',
			new LibrariesFormArray( user_libs.controls as LibraryFormGroup[] )
		);

		this.setControl(
			'remote_libraries',
			new RemoteLibrariesFormArray( 
				remote_libs.controls as RemoteLibraryFormGroup[] 
			)
		);

		// resolve project assets and scripts with containers'
		this.resolve_resources();

	} // end #constructor


	/**
	 * Resolves Assets and Scripts of the project with
	 * those of the Containers, so only one object
	 * exists for each resource.
	 */
	resolve_resources() {

		/**
		 * Maps resources to their id for easy access.
		 */
		function resource_map<T extends ResourceFormGroup>( 
			resources: Array<T> 
		): ResourceMap<T> {

			const map = {};
			for ( let resource of resources ) { 
				const id = resource.get( '_id' ).value;
				map[ id ] = resource;
			};

			return map;
		} // end #resource_map


		/**
		 * Replaces a control with on in map if it exists.
		 * @type {[type]}
		 */
		function resolve_resources_from_map<T extends FormArray, S extends ResourceFormGroup>( 
			resources: T, 
			map: ResourceMap<S> 
		) {

			for ( let index = 0; index < resources.length; ++index ) {
				const resource = resources.at( index ),
					resource_id = resource.get( '_id' ).value;

				if ( resource_id in map ) {
					resources.setControl( index, map[ resource_id ] )
				}
			}

		} // end #resolve_resource


		/**
		 * Resolve project Assets with Container Assets recursively.
		 * @param {ContainerFormGroup} container Current Container.
		 */
		function resolve_container( container: ContainerFormGroup ) {

			resolve_resources_from_map<AssetsFormArray, AssetFormGroup>(
				container.get( 'assets' ) as AssetsFormArray, 
				asset_groups
			);

			const children = ( ( container.get( 'children' ) as ContainersFormArray ).controls as ContainerFormGroup[] );
			for ( let child of children ) {
				// recurse
				resolve_container( child );
			}

		} // end #resolve_container

		//--- main ---

		const assets = ( this.get( 'assets' ) as AssetsFormArray ).controls as AssetFormGroup[]; 
		const asset_groups = resource_map<AssetFormGroup>( assets );

		resolve_container( this.get( 'root' ) as ContainerFormGroup );

	} // end #resolve_resources_

} // end ProjectFormGroup 


export class ProjectsFormArray extends BaseFormArray<ProjectFormGroup> {

	constructor( projects = [] as Array<ProjectFormGroup> ) {
		super( projects );
	}
}