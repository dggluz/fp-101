import { gte } from '@utils';

export const getAge = <T extends {age: number}> (person: T) =>
	person.age
;

export const isAdult = <T extends {age: number}> (person: T) =>
	gte(getAge(person), 18)
;
