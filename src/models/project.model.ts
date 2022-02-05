import { Project as ProjectInt } from '@interfaces/models/project.interface';	
import { StandardResource } from './standard-resource.model';
import { Asset } 						from './asset.model';
import { Script }						from './script.model';
import { Container } 				from './container.model';
import { Library, RemoteLibrary  } from './library.model';


export class Project 
	extends StandardResource
	implements ProjectInt {

	assets: 	Asset[];
	scripts: 	Script[];
	root: 		Container;
	user_libraries: 	Library[];
	remote_libraries: RemoteLibrary[];


	constructor( project?: any ) {
		const props = {
			assets: 	[],
			scripts: 	[],
			root: 		new Container(),
			user_libraries: 	[],
			remote_libraries: []
		};

		super();
		this.add_properties( Object.keys( props ) );  
		this.set_properties( { ...props, ...project } );
	
		// cast root
		if ( this.root instanceof Object ) {
			this.root = new Container( this.root );
		}

		// cast libraries 
		this.user_libraries = this.user_libraries.map( (library: Library ) => {
			return (
				library instanceof Object ?
				new Library( library ) :
				library
			);
		} );

		this.remote_libraries = this.remote_libraries.map( 
			( library: RemoteLibrary ) => {
				return new RemoteLibrary( library ); 
			} 
		);


	}
}