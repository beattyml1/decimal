const checkAndFormat = (input: Decimal | number, operation: string) => {
		if (this.p !== input.p) throw `p must be equal to ${operation} two numbers`;
		return (typeof(input) === 'number') ? new Decimal(this.p, input) : input;
}
const compare = 'compare';
const sep = (1.1).toLocaleString().substring(1, 2);

export default class Decimal {
	p: number;
	v: number;
	constructor(prec: number, val: number) {
		this.v = Math.round(val * Math.pow(10, prec));
		this.p = prec;
	}
	
	static parse(s: string) {
		var parts = stringVal.split(sep);
		var precision = parts[1].length;
		return new Decimal(precision, parseInt(parts[0])*precision + parseInt(parts[1]))
	}

	plus = (right: Decimal | number) => {
		return new Decimal(this.p, this.v + checkAndFormat(right, 'add').v);
	}

	minus =  (right: Decimal | number) => {
		return new Decimal(this.p, this.v - checkAndFormat(right, 'subtract').v);
	}

	times =  (right: Decimal | number) => {
		return new Decimal(this.p, this.v * checkAndFormat(right, 'multiply').v);
	}

	dividedBy = (right: Decimal | number) => {
		return new Decimal(this.p, this.v / checkAndFormat(right, 'divide').v);
	}

	equals = (right: Decimal | number) => {
		return this.v === checkAndFormat(right, compare).v;
	}

	greaterThan = (right: Decimal | number) => {
		return this.v > checkAndFormat(right, compare).v;
	}

	lessThan = (right: Decimal | number) => {
		return this.v < checkAndFormat(right, compare).v;
	}

	greaterThanOrEqual = (right: Decimal | number) => {
		return this.v >= checkAndFormat(right, compare).v;
	}

	lessThanOrEqual = (right: Decimal | number) => {
		return this.v <= checkAndFormat(right, compare).v;
	}

	notEqual = (right: Decimal | number) => {
		return !this.equals(right);
	}

	toFixed = ()  =>{
		return toNumber().toFixed(this.p);
	}

	toNumber = ()   => {
		return (this.v / Math.pow(10, this.p)));
	}
}
