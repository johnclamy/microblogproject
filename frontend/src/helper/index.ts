/****************************************************
 *   HELPER FUNCTIONS                               *
 *                                                  *
 *   (01)  capitalizeFirstLetter                    *
 *                                                  *
 *                                                  *
 ****************************************************/


// (01) Capitalize the first Character of a given string

function capitalizeFirstLetter<T extends string>(str: T): Capitalize<T>
function capitalizeFirstLetter(str: string): string {
    if (!str) return str
    return str.charAt(0).toUpperCase() + str.slice(1)
}


export {
    capitalizeFirstLetter,
}
