
/**
 * Converts T into a partial for all keys not in K.
 * 
 * interface User {
 * 		age: number,
 * 		phone: string,
 * 		firstName: string,
 * 		lastName: string,
 * }
 * 
 * interface BasicUser = PartialOmit<User, "lastName" | "phone">
 * // 	interface UserLastName {
 * // 		// converted to partial
 * //		age: number | undefined
 * // 		firstName: string | undefined,
 * //		
 * //		// omitted from partial
 * //		phone: string,
 * //		lastName: string
 * // 	}
 * 
 * @param T - Type to convert.
 * @param K - Keys to emit from the partial.
 */
export type PartialOmit<T, K extends keyof T> = (
	Partial<Omit<T, K>> &
	Pick<T, K>
);