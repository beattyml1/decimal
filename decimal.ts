const checkAndFormat = (input: Decimal | number, operation: string) => {
		if (this.precision !== input.precision) throw `Precision must be equal to ${operation} two numbers`;
		return (typeof(input) === 'number') ? new Decimal(this.precision, input) : input;
}
const compare = 'compare';

export default class Decimal {
	precision: number;
	value: number;
	constructor(precision: number, value: number) {
		this.value = Math.round(this.value * Math.pow(10, this.precision));
		this.precision = precision;
	}

	plus = (right: Decimal | number) => {
		return new Decimal(this.precision, this.value + checkAndFormat(right, 'add').value);
	}

	minus =  (right: Decimal | number) => {
		return new Decimal(this.precision, this.value - checkAndFormat(right, 'subtract').value);
	}

	times =  (right: Decimal | number) => {
		return new Decimal(this.precision, this.value * checkAndFormat(right, 'multiply').value);
	}

	dividedBy = (right: Decimal | number) => {
		return new Decimal(this.precision, this.value / checkAndFormat(right, 'divide').value);
	}

	equals = (right: Decimal | number) => {
		return this.value === checkAndFormat(right, compare).value;
	}

	greaterThan = (right: Decimal | number) => {
		return this.value > checkAndFormat(right, compare).value;
	}

	lessThan = (right: Decimal | number) => {
		return this.value < checkAndFormat(right, compare).value;
	}

	greaterThanOrEqual = (right: Decimal | number) => {
		return this.value >= checkAndFormat(right, compare).value;
	}

	lessThanOrEqual = (right: Decimal | number) => {
		return this.value <= checkAndFormat(right, compare).value;
	}

	notEqual = (right: Decimal | number) => {
		return !this.equals(right);
	}

	toFixed = ()  =>{
		return toNumber().toFixed(this.precision);
	}

	toNumber = ()   => {
		return (this.value / Math.pow(10, this.precision)));
	}
}
