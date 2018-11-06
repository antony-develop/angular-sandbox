import { Address } from './Address';

export interface User {
    firstName: string,
    lastName: string,
    email: string,
    // age: number,
    // address?: Address,
    isActive?: boolean,
    registered?: any,
    showDitails?: boolean
}
